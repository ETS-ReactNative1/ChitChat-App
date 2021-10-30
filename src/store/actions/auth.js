import { SET_USER, SET_AUTH_LOADING } from "../types"

export const setLoggedinUser = (data) => {
    return dispatch => {
        dispatch({
            type: SET_USER,
            payload: data
        })
    }
}

export const setAuthLoading = (data) => {
    return dispatch => {
        dispatch({
            type: SET_AUTH_LOADING,
            payload: data
        })
    }
}