import { combineReducers } from 'redux';
import authReducer from './modules/auth';
import companyReducer from './modules/companyReducer';
import { NavigationReducer } from '@expo/ex-navigation';

const rootReducer = combineReducers({
	navigation: NavigationReducer,
	auth: authReducer,
	company: companyReducer
});

export default rootReducer;
