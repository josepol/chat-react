import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import InputComponent from '../../../../components/InputComponent';
import ButtonComponent from '../../../../components/ButtonComponent';
import ErrorMessageComponent from '../../../../components/ErrorMessageComponent';

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export default class LoginFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginForm: {
                username: '',
                password: ''
            }
        }
        this.usernameOnChangeListener = this.usernameOnChangeListener.bind(this);
        this.passwordOnChangeListener = this.passwordOnChangeListener.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    usernameOnChangeListener($event) {
        this.returnInputTextEditing($event);
        this.setState({
            loginForm: {
                ...this.state.loginForm,
                username: $event.target.value
            }
        });
    }

    passwordOnChangeListener($event) {
        this.returnInputTextEditing($event);
        this.setState({
            loginForm: {
                ...this.state.loginForm,
                password: $event.target.value
            }
        });
    }

    returnInputTextEditing($event) {
        if ($event.target.value) {
            this.props.inputTextEditing();
        }
    }

    submitLogin($event) {
        $event.preventDefault();
        this.myFormRef.reset();
        this.props.loginRequestListener(this.state.loginForm);
    }

    render() {
        const { loginRequestStatus } = this.props;
        return (
            <Fragment>
                <div>
                    <form onSubmit={this.submitLogin} ref={el => this.myFormRef = el}>
                        <InputWrapper>
                            <InputComponent type="text" placeholder="Username" onChangeListener={this.usernameOnChangeListener} />
                            <InputComponent type="password" placeholder="Password" onChangeListener={this.passwordOnChangeListener} />
                        </InputWrapper>
                        {loginRequestStatus &&  loginRequestStatus !== '0' && <ErrorMessageComponent />}
                        <ButtonComponent value="Login" type="submit" />
                    </form>
                </div>
            </Fragment>
        );
    }
}