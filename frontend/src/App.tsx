import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './components/Store';
import Shop from './components/ShopFront';
import { User } from './models/User';
import { AppProps, store } from './store';
import { connect } from 'react-redux';
import Login from './components/Login';
import { v4 as uuid } from 'uuid';

interface Props {
	user: User;
}

interface AppState {
	user: User;
}

class App extends React.Component<Props, AppState> {
	constructor(props: Props) {
		super(props);
		this.state = {user: this.props.user};
	}

	render() {
		return (
		<div className="App">
			<header className="App-header">
			{this.props.user.isLoggedIn ? <Shop/>: <Login/>}
			</header>
		</div>
		);
	} 
}

const mapStateToProps = (state: AppProps) => {
    return {
        user: state.userStore,
    }
}

export default connect(mapStateToProps)(App);