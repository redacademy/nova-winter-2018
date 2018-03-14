// Actions
const USER_LOADING = "USER_LOADING";
const GET_USER_INFO = "GET_USER_INFO";

// Action Creator
export const getUserInfo = UserInfo => ({
  type: GET_USER_INFO,
  payload: userInfo
});

export const userLoading = () => ({
  type: USER_LOADING
});

// Reducers

export default function(
  state = {
    userInfo: {},
    userLoading: true
  },
  action
) {
  switch (action.type) {
  case GET_USER_INFO: {
    return { ...state, userInfo: action.payload };
  }
  case USER_LOADING: {
    return { ...state, userLoading: false };
  }
  default:
    return state;
  }
}
