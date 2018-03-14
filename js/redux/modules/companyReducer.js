// Actions
const COMPANY_LOADING = 'COMPANY_LOADING';
const GET_COMPANY_INFO = 'GET_COMPANY_INFO';
const GET_PROJECTS_LIST = 'GET_ASSIGNMENTS_LIST';
const GET_QUESTIONS_LIST = 'GET_QUESTIONS_LIST';

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
	payload: load
});

export const companyLoading = () => ({
	type: COMPANY_LOADING
});

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
