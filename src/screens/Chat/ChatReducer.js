import { USERNAME_REQUEST_SUCCESS, USERNAME_REQUEST_ERROR } from './ChatConstants';

const initialState = {
    username: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USERNAME_REQUEST_SUCCESS:
        return {
            username: action.payload.username,
        }
        case USERNAME_REQUEST_ERROR:
        return {
            username: undefined
        }
        default:
        return state;
    };
}