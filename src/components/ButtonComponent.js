import React, { Component } from 'react';

export default class ButtonComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type, value } = this.props;
        return (
            <div>
                <button type={type}>{value}</button>
            </div>
        );
    }
}