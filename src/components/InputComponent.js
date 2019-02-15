import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    flex: 1;
    width: 100px;
    padding: 10px;
    background-color: rgb(52, 52, 52);
    border: none;
    border-bottom: solid 1px white;
    margin: 5px;
    color: white;
    max-width: 200px;
`

export default class InputComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type, placeholder, onChangeListener } = this.props;
        return (
            <Input type={type} onChange={onChangeListener} placeholder={placeholder} />
        );
    }
}