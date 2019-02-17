import React, { Component } from 'react';
import styled from 'styled-components';

import MessageComponent from './MessageComponent';

const MessagesContainer = styled.div`

`

export default class MessagesComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MessagesContainer>
                {this.props.messages && this.props.messages.map((message, i) => <MessageComponent key={i} message={message.message} personalMessage={true}/>)}
            </MessagesContainer>
        );
    }
}