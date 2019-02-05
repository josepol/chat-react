import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoginFormComponent from './components/loginForm/LoginFormComponent';
import { loginRequest } from './LoginProvider';
import styled from 'styled-components';

const LoginContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
`

const LoginFormContainer = styled.div`
    width: 300px;
    margin: 5px;
    text-align: center;
`

const H1 = styled.h1`
    color: white;
    text-align: center;
`

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
            <LoginContainer>
                <LoginFormContainer>
                    <H1>Login</H1>
                    <LoginFormComponent loginRequestListener={this.loginRequestListener} />
                </LoginFormContainer>
            </LoginContainer>
        );
    };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);