import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { test } from './LoginActions';
import LoginFormComponent from './components/loginForm/LoginFormComponent';
import { loginRequest } from './LoginProvider';

const mapStateToProps = (state, props) => {
    return {
        status: state.LoginReducer.status,
        token: state.LoginReducer.token
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        loginRequest: loginForm => dispatch(loginRequest(loginForm))
    }
}

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: ''
        }

        this.loginRequestListener = this.loginRequestListener.bind(this);
    }

    componentDidUpdate() {
        if (this.props && this.props.token) {
            localStorage.setItem('token', this.props.token);
            this.props.history.push('/chat');
        }
    }

    loginRequestListener(loginResponse) {
        this.props.loginRequest(loginResponse);
    }

    render() {
        return (
            <Fragment>
                <h1>Login</h1>
                <LoginFormComponent loginRequestListener={this.loginRequestListener} />
            </Fragment>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);