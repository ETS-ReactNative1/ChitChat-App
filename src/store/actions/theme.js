import { CHANGE_APP_THEME } from "../types"

export const setAppTheme = (value) => {
    return dispatch => {
        dispatch({
            type: CHANGE_APP_THEME,
            payload: value
        })
    }
}