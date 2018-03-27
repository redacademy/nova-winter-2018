import { database } from "../../api/firebase";
import { algoliaSearchIndex } from "../../api/algoliaConfig";

// Action Types
const COMPANY_LOADING = "COMPANY_LOADING";
const GET_COMPANY_INFO = "GET_COMPANY_INFO";
const GET_PROJECTS_LIST = "GET_PROJECTS_LIST";
const GET_ALL_PROJECTS_LIST = "GET_ALL_PROJECTS_LIST";
const GET_QUESTIONS_LIST = "GET_QUESTIONS_LIST";
const GET_COMPANY_LIST = "GET_COMPANY_LIST";
const DATA_ERROR = "DATA_ERROR";
const GET_COMPANY_SEARCH_RESULTS = "GET_COMPANY_SEARCH_RESULTS";
const GET_RESOURCES = "GET_RESOURCES";
const SEARCH_ERROR = "SEARCH_ERROR";
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
const GET_DELIVERABLES = "GET_DELIVERABLES";
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

const getResources = resources => ({
  type: GET_RESOURCES,
  payload: resources
});

export const companyLoading = () => ({
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

const searchError = error => ({
  type: SEARCH_ERROR,
  payload: error
});

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query
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

export const getProjectResources = (companyID, projectID) => dispatch => {
  database
    .collection(
      "companys/" + companyID + "/projects/" + projectID + "/resources"
    )
    .get()
    .then(collection => {
      const resources = [];
      collection.forEach(doc => {
        resources.push(doc.data());
      });
      dispatch(getResources(resources));
    })
    .catch(function(error) {
      dispatch(getDataError(error));
    });
};

export const getCompanyQuestions = (companyID, projectName) => dispatch => {
  database
    .doc(
      "companys/" +
        companyID +
        "/projects/" +
        projectName +
        "/questions/questions"
    )
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
export const executeCompanySearch = searchQuery => dispatch => {
  algoliaSearchIndex.search({ query: searchQuery }, (err, content) => {
    if (err) {
      dispatch(searchError(err));
    }
    let results = [];
    for (var h in content.hits) {
      results.push(content.hits[h]);
    }
    dispatch(getCompanySearchResults(results));
  });
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
// Reducers
export default function(
  state = {
    searchQuery: "",
    companyList: [],
    companyInfo: {},
    dataError: null,
    companySearchResults: [],
    searchError: null,
    companyLoading: true,
    questions: {},
    projects: [],
    resources: [],
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

    case GET_RESOURCES: {
      return {
        ...state,
        resources: action.payload,
        dataError: null
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
    case SEARCH_ERROR: {
      return { ...state, searchError: action.payload };
    }
    case SET_SEARCH_QUERY: {
      return { ...state, searchQuery: action.payload };
    }
    case GET_DELIVERABLES: {
      return { ...state, deliverables: action.payload };
    }
    default:
      return state;
  }
}
