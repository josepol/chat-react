import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import LoginReducer from './screens/Login/LoginReducer';
import ChatReducer from './screens/Chat/ChatReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    LoginReducer,
    ChatReducer
})

export default createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));