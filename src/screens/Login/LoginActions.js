import { LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_ERROR } from "./LoginConstants";

export const loginRequestSuccess = (payload) => {
    return {
        type: LOGIN_REQUEST_SUCCESS,
        payload: {
            token: payload.Message,
            status: payload.Status,
            username: payload.Username
        }
    }
}

export const loginRequestError = (payload) => {
    return {
        type: LOGIN_REQUEST_ERROR,
        payload: {
            token: payload.Message,
            status: payload.Status
        }
    }
}

export const loginRequestReset = () => {
    return {
        type: LOGIN_REQUEST_ERROR,
        payload: {
            token: undefined,
            status: undefined
        }
    }
}