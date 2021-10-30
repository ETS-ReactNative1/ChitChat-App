import { SET_USER, CLEAR_USER, SET_AUTH_LOADING } from "../types";

const initialState = {
    authLoading: true,
    user: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                authLoading: payload
            };
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