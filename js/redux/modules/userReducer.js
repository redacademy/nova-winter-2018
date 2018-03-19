import {
  database
} from "../../api/firebase";

// Actions
const USER_LOADING = "USER_LOADING";
const GET_USER_INFO = "GET_USER_INFO";

// Action Creator
export const getUserInfo = userInfo => ({
  type: GET_USER_INFO,
  payload: userInfo
});

export const userLoading = () => ({
  type: USER_LOADING
});
// TODO DISPATCH USER LOADING ACTION

export const getUser = userID => dispatch => {
  database
    .collection("users")
    .doc(userID)
    .get()
    .then(function (doc) {
      var userInfo = doc.data();
      dispatch(getUserInfo(userInfo));
    })
    .catch(error => {
      console.log("User data not found:", error);
    });
};

// Reducers

export default function (
  state = {
    userInfo: {},
    userLoading: true
  },
  action
) {
  switch (action.type) {
    case GET_USER_INFO:
      {
        return { ...state,
          userInfo: action.payload
        };
      }
    case USER_LOADING:
      {
        return { ...state,
          userLoading: false
        };
      }
    default:
      return state;
  }
}