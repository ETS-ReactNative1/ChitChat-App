import { SET_USER } from "../types"

export const setLoggedinUser = (data) => {
    return dispatch => {
        dispatch({
            type: SET_USER,
            payload: data
        })
    }
}