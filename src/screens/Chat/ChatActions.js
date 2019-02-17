import { USERNAME_REQUEST_SUCCESS, USERNAME_REQUEST_ERROR } from './ChatConstants';

export const usernameRequestSuccess = (payload) => {
    return {
        type: USERNAME_REQUEST_SUCCESS,
        payload: {
            username: payload.Username
        }
    }
}

export const usernameRequestError = () => {
    return {
        type: USERNAME_REQUEST_ERROR,
        payload: {
            username: undefined
        }
    }
}