import { auth } from "../../api/firebase";
import { AsyncStorage } from "react-native";

// Actions
const SET_USER_STATE = "SET_USER_STATE";
const REMOVE_USER_STATE = "REMOVE_USER_STATE";
const SET_AUTHENTICATION_STATUS = "SET_AUTHENTICATION_STATUS";
const USER_LOADING = "USER_LOADING";
const USER_ERROR = "USER_ERROR";
const SET_EMAIL_STATE = "SET_EMAIL_STATE";
const SET_PASSWORD_STATE = "SET_PASSWORD_STATE";

// Action Creator
export const setUserState = user => ({
  type: SET_USER_STATE,
  payload: user
});

export const userLoading = load => ({
  type: USER_LOADING,
  payload: load
});

export const userError = error => ({
  type: USER_ERROR,
  payload: error
});

const removeUserState = () => ({
  type: REMOVE_USER_STATE
});

const setAuthenticationStatus = bool => ({
  type: SET_AUTHENTICATION_STATUS,
  payload: bool
});

export const setEmailState = email => ({
  type: SET_EMAIL_STATE,
  payload: email
});

export const setPasswordState = password => ({
  type: SET_PASSWORD_STATE,
  payload: password
});

export const logOut = () => dispatch => {
  auth
    .signOut()
    .then(() => {
      dispatch(removeUserState());
      dispatch(setAuthenticationStatus(false));
      AsyncStorage.removeItem("USER_ID");
    })
    .catch(error => {
      console.log("An error occured when signing out", error);
    });
};
export const login = data => dispatch => {
  dispatch(userLoading(true));
  const { email, password } = data;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(setUserState(user));
      dispatch(setAuthenticationStatus(true));
      dispatch(userLoading(false));
      dispatch(setPasswordState(""));
      dispatch(setEmailState(""));
      AsyncStorage.setItem("USER_ID", user.uid);
    })
    .catch(error => {
      console.log(
        "An error occured when logging in. Please check your login credentials",
        error
      );
      dispatch(userError(error));
      dispatch(userLoading(false));
    });
};

export const createUser = data => dispatch => {
  const { email, password } = data;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      return dispatch(setUserState(user));
    })
    .catch(error => dispatch(userError(error)));
};

export default function(
  state = {
    email: "",
    password: "",
    authenticated: false,
    user: null,
    userId: null,
    userLoading: false,
    userError: null
  },
  action
) {
  switch (action.type) {
    case SET_USER_STATE: {
      return { ...state, user: action.payload, userId: action.payload.uid };
    }
    case REMOVE_USER_STATE: {
      return { ...state, user: null, userId: null };
    }
    case USER_LOADING: {
      return { ...state, userLoading: action.payload };
    }
    case USER_ERROR: {
      return { ...state, userError: action.payload };
    }
    case SET_AUTHENTICATION_STATUS: {
      return { ...state, authenticated: action.payload };
    }
    case SET_PASSWORD_STATE: {
      return { ...state, password: action.payload };
    }
    case SET_EMAIL_STATE: {
      return { ...state, email: action.payload };
    }
    default:
      return state;
  }
}
