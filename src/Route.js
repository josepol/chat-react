import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/Login/LoginScreen';
import ChatScreen from './screens/Chat/ChatScreen';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/chat" component={ChatScreen} />
            </Switch>
        );
    }
}