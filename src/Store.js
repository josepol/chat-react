import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import LoginReducer from './screens/Login/LoginReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    LoginReducer
})

export default createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));