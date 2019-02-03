import { TEST } from "./LoginConstants";

export const test = (payload) => {
    return {
        type: TEST,
        payload
    }
}