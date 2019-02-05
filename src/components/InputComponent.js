import React, { Component } from 'react';

export default class InputComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { type, onChangeListener } = this.props;
        return (
            <div>
                <input type={type} onChange={onChangeListener} />
            </div>
        );
    }
}