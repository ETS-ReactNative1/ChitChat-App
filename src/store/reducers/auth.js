import { SET_USER, CLEAR_USER } from "../types";

const initialState = {
    user: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload
            };
        case CLEAR_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}