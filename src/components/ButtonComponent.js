import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px;
    background-color: white;
    border: none;
    font-weight: bold;
    border-radius: 4px;
`

export default class ButtonComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type, value } = this.props;
        return (
            <>
                <Button type={type}>{value}</Button>
            </>
        );
    }
}