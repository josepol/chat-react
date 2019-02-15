import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoginFormComponent from './components/loginForm/LoginFormComponent';
import { loginRequest } from './LoginProvider';
import {loginRequestReset } from './LoginActions';
import styled from 'styled-components';

const LoginScreenContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
`

const LoginFormContainer = styled.div`
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
        this.inputTextEditing = this.inputTextEditing.bind(this);
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

    inputTextEditing() {
        this.props.updateLoginRequestStatus();
    }

    render() {
        return (
            <LoginScreenContainer>
                <LoginFormContainer>
                    <H1>Login</H1>
                    <LoginFormComponent
                        loginRequestListener={this.loginRequestListener}
                        loginRequestStatus={this.props.status} 
                        inputTextEditing={this.inputTextEditing}    
                    />
                </LoginFormContainer>
            </LoginScreenContainer>
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
        loginRequest: loginForm => dispatch(loginRequest(loginForm)),
        updateLoginRequestStatus: () => dispatch(loginRequestReset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);