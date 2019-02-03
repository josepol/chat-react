import { TEST } from './LoginConstants';

const initialState = {
    state: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TEST:
        return {
            test: action.payload
        }
        default:
        return state;
    };
}