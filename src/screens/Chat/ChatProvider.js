import * as axios from "axios";
import { ENDPOINT } from '../../AppConstants';
import { usernameRequestSuccess, usernameRequestError } from './ChatActions';


export const usernameRequest = () => {
    return dispatch => {
        console.log(localStorage.getItem('token'));
        axios.defaults.headers.common = {'Authorization': localStorage.getItem('token')}
        axios.get(`${ENDPOINT}/auth/username`/*, { headers: { Authorization: `${localStorage.getItem('token')}` }}*/)
        .then(response => {
            if (response.data.Username) {
                dispatch(usernameRequestSuccess(response.data.Username))
                return;
            }
            dispatch(usernameRequestError())
        })
        .catch(error => {
            throw new Error(error);
        });
    }
}