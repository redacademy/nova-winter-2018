import { database } from "../../api/firebase";
// Actions
const COMPANY_LOADING = "COMPANY_LOADING";
const GET_COMPANY_INFO = "GET_COMPANY_INFO";
const GET_PROJECTS_LIST = "GET_ASSIGNMENTS_LIST";
const GET_QUESTIONS_LIST = "GET_QUESTIONS_LIST";
const GET_COMPANY_LIST = "GET_COMPANY_LIST";
// Action Creator
export const getCompanyInfo = companyInfo => ({
  type: GET_COMPANY_INFO,
  payload: companyInfo
});
export const getProjectsInfo = assignmentsInfo => ({
  type: GET_PROJECTS_LIST,
  payload: assignmentsInfo
});
export const getQuestionsInfo = questionsInfo => ({
  type: GET_QUESTIONS_LIST,
  payload: questionsInfo
});
export const companyLoading = () => ({
  type: COMPANY_LOADING
});
export const getCompanyList = companyInfo => ({
  type: GET_COMPANY_LIST,
  payload: companyInfo
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
    })
    .catch(err => {
      console.log("Error getting documents", err);
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
      return companyInfo;
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export const getCompanyProjects = (companyID, projectNumber) => dispatch => {
  database
    .doc("companys/" + companyID + "/projects/" + projectNumber)
    .get()
    .then(function(doc) {
      let projectInfo = doc.data();
      dispatch(getProjectsInfo(projectInfo));
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

export const getCompanyQuestions = (companyID, projectName) => dispatch => {
  database
    .doc("companys/" + companyID + "/" + projectName + "/" + "questions")
    .get()
    .then(function(doc) {
      let questionsData = doc.data();
      dispatch(getQuestionsInfo(questionsData));
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};
// Reducers
export default function(
  state = {
    companyList: {},
    companyInfo: {},
    companyLoading: true,
    questions: {},
    projects: {}
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
    default:
      return state;
  }
}
