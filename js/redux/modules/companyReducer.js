import { database } from "../../api/firebase";
import { algoliaSearchIndex } from "../../api/algoliaConfig";

import { formatFilterSearchResults } from "../../api/algoliaSearchHelpers";

// Actions
const COMPANY_LOADING = "COMPANY_LOADING";
const GET_COMPANY_INFO = "GET_COMPANY_INFO";
const GET_PROJECTS_LIST = "GET_PROJECTS_LIST";
const GET_ALL_PROJECTS_LIST = "GET_ALL_PROJECTS_LIST";
const GET_QUESTIONS_LIST = "GET_QUESTIONS_LIST";
const GET_COMPANY_LIST = "GET_COMPANY_LIST";
const DATA_ERROR = "DATA_ERROR";
const GET_COMPANY_SEARCH_RESULTS = "GET_COMPANY_SEARCH_RESULTS";
const SEARCH_ERROR = "SEARCH_ERROR";
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
const GET_DELIVERABLES = "GET_DELIVERABLES";
const GET_FILTER_SEARCH_RESULTS = "GET_FILTER_SEARCH_RESULTS";
const TOGGLE_FILTER_TAG = "TOGGLE_FILTER_TAG";

// Action Creator
const getDeliverables = deliverables => ({
  type: GET_DELIVERABLES,
  payload: deliverables
});
export const getCompanyInfo = companyInfo => ({
  type: GET_COMPANY_INFO,
  payload: companyInfo
});
const getProjectsInfo = assignmentsInfo => ({
  type: GET_PROJECTS_LIST,
  payload: assignmentsInfo
});
const getAllProjectsInfo = assignmentsInfo => ({
  type: GET_ALL_PROJECTS_LIST,
  payload: assignmentsInfo
});
const getQuestionsInfo = questionsInfo => ({
  type: GET_QUESTIONS_LIST,
  payload: questionsInfo
});
const companyLoading = () => ({
  type: COMPANY_LOADING
});
const getCompanyList = companyInfo => ({
  type: GET_COMPANY_LIST,
  payload: companyInfo
});

const getDataError = error => ({
  type: DATA_ERROR,
  payload: error
});

export const getCompanySearchResults = searchResults => ({
  type: GET_COMPANY_SEARCH_RESULTS,
  payload: searchResults
});

const getFilterSearchResults = searchResults => ({
  type: GET_FILTER_SEARCH_RESULTS,
  payload: searchResults
});

const searchError = error => ({
  type: SEARCH_ERROR,
  payload: error
});

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query
});

export const toggleFilterTag = tag => ({
  type: TOGGLE_FILTER_TAG,
  payload: tag
});

// Fetch functions
export const getAllCompanys = () => dispatch => {
  database
    .collection("companys")
    .get()
    .then(collection => {
      const companyInfo = [];
      collection.forEach(doc => {
        companyInfo.push(doc.data());
      });
      dispatch(getCompanyList(companyInfo));
      dispatch(getDataError(null));
    })
    .catch(err => {
      dispatch(getDataError(err));
    });
};

export const getCompany = companyID => dispatch => {
  database
    .collection("companys")
    .doc(companyID)
    .get()
    .then(function(doc) {
      let companyInfo = doc.data();
      dispatch(getCompanyInfo(companyInfo));
      dispatch(getDataError(null));
      return companyInfo;
    })
    .catch(function(error) {
      dispatch(getDataError(error));
    });
};

export const getAllCompanyProjects = companyID => dispatch => {
  database
    .collection("companys/" + companyID + "/projects")
    .get()
    .then(collection => {
      const projects = [];
      collection.forEach(doc => {
        projects.push(doc.data());
      });
      dispatch(getAllProjectsInfo(projects));
      dispatch(getDataError(null));
    })
    .catch(function(error) {
      dispatch(getDataError(error));
    });
};

export const getCompanyProjects = (companyID, projectNumber) => dispatch => {
  database
    .doc("companys/" + companyID + "/projects/" + projectNumber)
    .get()
    .then(function(doc) {
      let projectInfo = doc.data();
      dispatch(getProjectsInfo(projectInfo));
      dispatch(getDataError(null));
    })
    .catch(function(error) {
      dispatch(getDataError(error));
    });
};

export const getCompanyQuestions = (companyID, projectName) => dispatch => {
  database
    .doc("companys/" + companyID + "/" + projectName + "/questions")
    .get()
    .then(function(doc) {
      let questionsData = doc.data();
      dispatch(getQuestionsInfo(questionsData));
      dispatch(getDataError(null));
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export const executeCompanySearch = searchParams => dispatch => {
  const { searchQuery, page, filters } = searchParams;
  algoliaSearchIndex.search(
    { query: searchQuery, page, filters },
    (err, content) => {
      if (err) {
        dispatch(searchError(err));
      }
      dispatch(getCompanySearchResults(content));
    }
  );
};

export const getProjectDeliverables = (companyID, project) => dispatch => {
  database
    .collection(
      "companys/" + companyID + "/projects/" + project + "/deliverables"
    )
    .get()
    .then(collection => {
      const deliverables = [];
      collection.forEach(doc => {
        deliverables.push(doc.data());
      });
      dispatch(getDeliverables(deliverables));
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const executeFilterSearch = searchQuery => dispatch => {
  algoliaSearchIndex.search(
    {
      query: searchQuery,
      attributesToRetrieve: ["tags", "industry"],
      hitsPerPage: 5
    },
    (err, content) => {
      if (err) {
        dispatch(searchError(err));
      }
      console.log(content);
      const formattedSearchResults = formatFilterSearchResults(content.hits);
      dispatch(getFilterSearchResults(formattedSearchResults));
    }
  );
};

// Reducers
export default function(
  state = {
    searchQuery: "",
    companyList: [],
    companyInfo: {},
    dataError: null,
    companySearchResults: {},
    filterSearchResults: [],
    activeFilter: null,
    searchError: null,
    companyLoading: true,
    questions: {},
    projects: {},
    deliverables: []
  },
  action
) {
  switch (action.type) {
    case GET_COMPANY_INFO: {
      return {
        ...state,
        companyInfo: action.payload
      };
    }
    case GET_COMPANY_LIST: {
      return {
        ...state,
        companyList: action.payload
      };
    }
    case GET_PROJECTS_LIST: {
      return {
        ...state,
        projects: action.payload
      };
    }
    case GET_ALL_PROJECTS_LIST: {
      return {
        ...state,
        projects: action.payload
      };
    }

    case GET_QUESTIONS_LIST: {
      return {
        ...state,
        questions: action.payload
      };
    }
    case COMPANY_LOADING: {
      return {
        ...state,
        companyLoading: false
      };
    }
    case DATA_ERROR: {
      return { ...state, dataError: action.payload };
    }
    case GET_COMPANY_SEARCH_RESULTS: {
      return {
        ...state,
        companySearchResults: action.payload
      };
    }
    case GET_FILTER_SEARCH_RESULTS: {
      return {
        ...state,
        filterSearchResults: action.payload
      };
    }
    case SEARCH_ERROR: {
      return { ...state, searchError: action.payload };
    }
    case SET_SEARCH_QUERY: {
      return { ...state, searchQuery: action.payload };
    }
    case GET_DELIVERABLES: {
      return { ...state, deliverables: action.payload };
    }
    case TOGGLE_FILTER_TAG: {
      return { ...state, activeFilter: action.payload };
    }
    default:
      return state;
  }
}
