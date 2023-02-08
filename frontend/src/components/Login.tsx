import { Action } from 'redux';
import { connect } from 'react-redux';
import Api from '../services';
import React from 'react';
import { User } from '../models/User';
import { AppProps, store } from '../store';
import { Box } from '@mui/system';
import * as ActionTypes from '../store/actions';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

interface ReduxProps {
    user: User,
    loginUser: (action: Action) => void,
    logoutUser: (action: Action) => void,
}

interface LoginProps {

}

type Props = ReduxProps & LoginProps;

interface LoginState {
    user: User;
}

class Login extends React.Component<Props, LoginState> {
	constructor(props: Props) {
		super(props);
		this.state = { 
			user: {
				isLoggedIn: props.user.isLoggedIn,
				firstName: props.user.firstName,
				lastName: props.user.lastName,
			},
		};

		this.handleLogin = this.handleLogin.bind(this);
		this.handleFirstName = this.handleFirstName.bind(this);
		this.handleLastName = this.handleLastName.bind(this);
	}

	private handleFirstName(event: any): void {
		this.setState({
			user: {...this.state.user, firstName: event.target.value}
		});
	}

	private handleLastName(event: any): void {
		this.setState({
			user: {...this.state.user, lastName: event.target.value}
		});
	}

	private handleLogin(): void {
		Api.User.login(this.state.user).then(response => {
			localStorage.setItem('token', JSON.stringify(response.token));
			this.props.loginUser(ActionTypes.loginUser());
			localStorage.setItem('user', JSON.stringify({...this.state, isLoggedIn: true}));
		});
	}

	render() {
		return <Box>
			<TextField value={this.state.user.firstName} id="outlined-basic" label="First Name" variant="outlined" onChange={this.handleFirstName}/>
			<TextField value={this.state.user.lastName} id="outlined-basic" label="Last Name" variant="outlined" onChange={this.handleLastName}/>
			<Button onClick={() => this.handleLogin()}>Login</Button>        
		</Box>;
	}
}

const mapStateToProps = (state: AppProps) => {
	return {
		loginUser: (action: Action) => store.dispatch(action),
		logoutUser: (action: Action) => store.dispatch(action),
		user: state.userStore,
	};
};

export default connect(mapStateToProps)(Login);
