import React, { Component } from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: ${props => props.personalMessage ? "flex-end" : "flex-start"};
`

const MessageWrapper = styled.div`
    background-color: white;
    padding: 10px;
    color: black;
    border-radius: 4px;
    margin: 5px;
    width: 60%;
    box-shadow: 1px 3px 10px -5px white;
`

export default class MessageComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <MessageContainer personalMessage={this.props.personalMessage}>
                <MessageWrapper>{this.props.message}</MessageWrapper>
            </MessageContainer>
        );
    }
}