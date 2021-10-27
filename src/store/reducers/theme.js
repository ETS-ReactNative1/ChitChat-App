import { THEME } from "../../constants/styles";
import { CHANGE_APP_THEME } from "../types";

const initialState = {
    appTheme: THEME.dark
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_APP_THEME:
            return {
                ...state,
                appTheme: payload,
            };
        default:
            return state;
    }
}