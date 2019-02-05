import React, { Component, Fragment } from 'react';

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            websocket: undefined,
            messages: []
        }

        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        this.loadWebsocket();
    }

    loadWebsocket() {

        this.setState({
            websocket: new WebSocket('ws://127.0.0.1:3001/chat/socket')
        }, () => {
            const that = this;
            this.state.websocket.onopen = function () {
                console.log('websocket connection stablished');
            };
    
            this.state.websocket.onerror = function (error) {
                console.log('websocket error', error);
            };
    
            this.state.websocket.onmessage = function (message) {
                    let json = JSON.parse(message.data);
                    that.setState({messages: [...that.state.messages, json]});
            };
        });

    }

    sendMessage($event) {
        const message = $event.target.value;
        const messageParsed = {
            username: 'asd',
            email: 'sdfr',
            message
        }
        this.state.websocket.send(JSON.stringify(messageParsed));
    }

    render() {
        return (
            <Fragment>
                <h1>Chat</h1>
                <input type="text" onChange={this.sendMessage} />
                {this.state.messages && this.state.messages.map((message, i) => (
                    <p key={i}>message: {message.message}</p>
                ))}
            </Fragment>
        );
    }
}

export default ChatScreen;