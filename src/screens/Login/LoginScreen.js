import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { test } from './LoginActions';

const mapStateToProps = (state, props) => {
    return {
        test: state.LoginReducer.state
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateTest: (value) => dispatch(test(value))
    }
}

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: ''
        }

        this.test = this.test.bind(this);
        this.testOnChange = this.testOnChange.bind(this);
    }

    test($event) {
        this.props.updateTest(this.state.test);
    }

    testOnChange($event) {
        this.setState({
            test: $event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <h1>Login</h1>
                <input type="text" name="test" value={this.state.test} onChange={this.testOnChange}/>
                <button onClick={this.test}>send test</button>
                <div>test: {this.props.test}</div>
            </Fragment>
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);