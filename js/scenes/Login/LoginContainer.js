import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import { testGetUser } from '../../api/firebaseHelpers';

class LoginContainer extends Component {
	static route = {
		navigationBar: {
			title: 'Login'
		}
	};

	render() {
		testGetUser('WJTvKQHAwP9frwE46woO');

		return <Login />;
	}
}

// LoginContainer.propTypes = {};

export default LoginContainer;
