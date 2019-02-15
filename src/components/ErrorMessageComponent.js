import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
    padding: 10px;
    color: rgba(125, 0, 0, 1);
    background-color: rgba(165, 0, 0, 0.1);
    border-radius: 4px;
`

export default class ErrorMessageComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ErrorMessage>
                {this.props.errorMessage}
            </ErrorMessage>
        );
    }
}