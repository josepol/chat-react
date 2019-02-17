import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    flex: ${props => props.flex ? props.flex : '1'};;
    width: ${props => props.width ? props.width : '100px'};
    padding: 10px;
    background-color: rgb(52, 52, 52);
    border: none;
    border-bottom: solid 1px white;
    margin: 5px;
    color: white;
    max-width: ${props => props.maxWidth ? props.maxWidth : '200px'};;
`

class InputComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type, placeholder, onChangeListener } = this.props;
        return (
            <Input
                flex={this.props.flex}
                width={this.props.width}
                maxWidth={this.props.maxWidth}
                type={type}
                onChange={onChangeListener}
                placeholder={placeholder}
            />
        );
    }
}

InputComponent.defaultProps = {
    type: 'text'
}

export default InputComponent;