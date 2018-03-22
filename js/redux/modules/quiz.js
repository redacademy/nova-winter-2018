// Actions
const QUIZ_LOADING = "QUIZ_LOADING";
const QUIZ_ERROR = "QUIZ_ERROR";
const CREATE_ANSWER_LIST = "CREATE_ANSWER_LIST";
const ADD_TO_SCORE = "ADD_TO_SCORE";
// Action Creator
export const quizLoading = load => ({
  type: QUIZ_LOADING,
  payload: load
});
export const quizError = error => ({
  type: QUIZ_ERROR,
  payload: error
});
export const addToScore = increment => ({
  type: ADD_TO_SCORE,
  payload: increment
});
export const createAnswerList = answer => ({
  type: CREATE_ANSWER_LIST,
  payload: answer
});
export default function (
  state = {
    answers: [],
    score: 0
  },
  action
) {
  switch (action.type) {
    case QUIZ_LOADING: {
      return { ...state, quizLoading: action.payload };
    }
    case QUIZ_ERROR: {
      return { ...state, quizError: action.payload };
    }
    case CREATE_ANSWER_LIST: {
      return { ...state, answers: [...state.answers, action.payload] };
    }
    case ADD_TO_SCORE: {
      return { ...state, score: state.score + action.payload };
    }
    default:
      return state;
  }
}
