import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { usernameRequest } from './ChatProvider';

import HeaderComponent from './components/HeaderComponent';
import MessagesComponent from './components/MessagesComponent';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';

const ChatScreenContainer = styled.div``

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px;
`

const Icon = styled.i`
    color: grey;
    font-size: 16px;
    padding: 5px;
    cursor: pointer;
`

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            websocket: undefined,
            currentMessage: undefined,
            messages: []
        }

        this.sendMessage = this.sendMessage.bind(this);
        this.messageOnChangeListener = this.messageOnChangeListener.bind(this);
    }

    componentDidMount() {
        this.props.usernameRequest();
        this.loadWebsocket();
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    loadWebsocket() {
        this.setState({websocket: new WebSocket('ws://127.0.0.1:3001/chat/socket')}, () => {
            const that = this;
            this.state.websocket.onopen = function () {};
            this.state.websocket.onerror = function (error) {};
            this.state.websocket.onmessage = function (message) {
                let json = JSON.parse(message.data);
                console.log(json);
                that.setState({messages: [...that.state.messages, json]});
            };
        });

    }

    sendMessage($event) {
        $event.preventDefault();
        this.resetCurrentMessage();
        const messageParsed = {
            username: 'asd',
            email: 'sdfr',
            message: this.state.currentMessage
        }
        this.state.websocket.send(JSON.stringify(messageParsed));
    }

    messageOnChangeListener($event) {
        this.setState({
            currentMessage: $event.target.value
        });
    }

    resetCurrentMessage() {
        this.myFormRef.reset();
        this.setState({
            currentMessage: ''
        });
    }

    render() {
        return (
            <ChatScreenContainer>
                <HeaderComponent username={this.props.username} />
                <MessagesComponent messages={this.state.messages} />
                <InputWrapper>
                    <form onSubmit={this.sendMessage} ref={el => this.myFormRef = el}>
                        <InputComponent
                            placeholder="Message"
                            width='100%'
                            maxWidth="auto"
                            onChangeListener={this.messageOnChangeListener}
                        />
                        <ButtonComponent value={<Icon className="fas fa-location-arrow"></Icon>}/>
                    </form>
                </InputWrapper>
            </ChatScreenContainer>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        username: state.ChatReducer.username
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        usernameRequest: () => dispatch(usernameRequest())
        /*loginRequest: loginForm => dispatch(loginRequest(loginForm)),
        updateLoginRequestStatus: () => dispatch(loginRequestReset())*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);