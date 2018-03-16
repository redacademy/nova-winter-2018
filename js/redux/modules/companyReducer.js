const firebase = require("firebase");
require("firebase/firestore");
import { database } from "../../api/firebase";

// Actions
const COMPANY_LOADING = "COMPANY_LOADING";
const GET_COMPANY_INFO = "GET_COMPANY_INFO";
const GET_PROJECTS_LIST = "GET_ASSIGNMENTS_LIST";
const GET_QUESTIONS_LIST = "GET_QUESTIONS_LIST";

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

// Fetch functions
export const getCompany = companyID => dispatch => {
  database
    .collection("companys")
    .doc(companyID)
    .get()
    .then(function(doc) {
      let companyInfo = doc.data();
      dispatch(getCompanyInfo(companyInfo));
      return getData;
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

export const getCompanyQuestions = (
  companyID,
  projectNumber,
  questionNumber
) => dispatch => {
  database
    .doc(
      "companys/" +
        companyID +
        "/projects/" +
        projectNumber +
        "/questions/" +
        questionNumber
    )
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
    companyInfo: {},
    companyLoading: true,
    questions: {},
    projects: {}
  },
  action
) {
  switch (action.type) {
  case GET_COMPANY_INFO: {
    return { ...state, companyInfo: action.payload };
  }
  case GET_PROJECTS_LIST: {
    return { ...state, projects: action.payload };
  }
  case GET_QUESTIONS_LIST: {
    return { ...state, questions: action.payload };
  }
  case COMPANY_LOADING: {
    return { ...state, companyLoading: false };
  }
  default:
    return state;
  }
}
