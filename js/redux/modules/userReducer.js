import { database } from "../../api/firebase";

// Action Types
const USER_LOADING = "USER_LOADING";
const GET_USER_INFO = "GET_USER_INFO";
const GET_RESOURCE_PROGRESS = "GET_RESOURCE_PROGRESS";
const DATA_ERROR = "DATA_ERROR";

// Action Creators
export const getUserInfo = userInfo => ({
  type: GET_USER_INFO,
  payload: userInfo
});

const getProgress = progress => ({
  type: GET_RESOURCE_PROGRESS,
  payload: progress
});

export const userLoading = () => ({
  type: USER_LOADING
});

const getDataError = error => ({
  type: DATA_ERROR,
  payload: error
});

// TODO DISPATCH USER LOADING ACTION

export const getUser = userID => dispatch => {
  database
    .collection("users")
    .doc(userID)
    .get()
    .then(function(doc) {
      var userInfo = doc.data();
      dispatch(getUserInfo(userInfo));
    })
    .catch(error => {
      console.log("User data not found:", error);
    });
};

// write user's progress watching videos on resources page.
export const setResourceProgress = (
  userID,
  companyID,
  projectID,
  index
) => dispatch => {
  database
    .doc(
      "users/" + userID + "/myprojects/" + companyID + "/projects/" + projectID
    )
    .set(
      {
        resourceprogress: index
      },
      {
        merge: true
      }
    )
    .then(function() {
      dispatch(getProgress(index));
    })
    .catch(err => {
      dispatch(getDataError(err));
    });
};

// read user's progress watching videos on resources page.
export const getResourceProgress = (
  userID,
  companyID,
  projectID
) => dispatch => {
  database
    .doc(
      "users/" + userID + "/myprojects/" + companyID + "/projects/" + projectID
    )
    .get()
    .then(function(doc) {
      let progress = doc.data().resourceprogress;
      dispatch(getProgress(progress));
    })
    .catch(err => {
      dispatch(getDataError(err));
    });
};

// Reducers

export default function(
  state = {
    userInfo: {},
    userLoading: true,
    resourceProgress: 0,
    dataError: null
  },
  action
) {
  switch (action.type) {
    case GET_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload
      };
    }

    case USER_LOADING: {
      return {
        ...state,
        userLoading: false
      };
    }

    case GET_RESOURCE_PROGRESS: {
      return {
        ...state,
        resourceProgress: action.payload,
        dataError: null
      };
    }

    case DATA_ERROR: {
      return { ...state, dataError: action.payload };
    }

    default:
      return state;
  }
}
