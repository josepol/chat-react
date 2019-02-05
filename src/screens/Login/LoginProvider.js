import * as axios from "axios";
import { loginRequestSuccess, loginRequestError } from "./LoginActions";
import { ENDPOINT } from '../../AppConstants';


export const loginRequest = (loginForm) => {
    return dispatch => {
        axios.post(`${ENDPOINT}/auth/login`, loginForm)
        .then(response => {
            if (response.data.Status === '0') {
                dispatch(loginRequestSuccess(response.data))
                return;
            }
            dispatch(loginRequestError(response.data))
        })
        .catch(error => {
            throw new Error(error);
        });
    }
}