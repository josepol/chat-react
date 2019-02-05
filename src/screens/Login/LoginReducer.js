import { LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_ERROR } from './LoginConstants';

const initialState = {
    state: '',
    token: undefined,
    status: undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST_SUCCESS:
        return {
            token: action.payload.token,
            status: action.payload.status
        }
        case LOGIN_REQUEST_ERROR:
        return {
            token: undefined,
            status: action.payload.status
        }
        default:
        return state;
    };
}