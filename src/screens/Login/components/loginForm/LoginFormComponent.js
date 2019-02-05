import React, { Component, Fragment } from 'react';

import InputComponent from '../../../../components/InputComponent';
import ButtonComponent from '../../../../components/ButtonComponent';

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
        this.setState({
            loginForm: {
                ...this.state.loginForm,
                username: $event.target.value
            }
        });
    }

    passwordOnChangeListener($event) {
        this.setState({
            loginForm: {
                ...this.state.loginForm,
                password: $event.target.value
            }
        });
    }

    submitLogin($event) {
        $event.preventDefault();
        this.props.loginRequestListener(this.state.loginForm);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <form onSubmit={this.submitLogin}>
                        <InputComponent type="text" onChangeListener={this.usernameOnChangeListener} />
                        <InputComponent type="password" onChangeListener={this.passwordOnChangeListener} />
                        <ButtonComponent value="Login" type="submit" />
                    </form>
                </div>
            </Fragment>
        );
    }
}