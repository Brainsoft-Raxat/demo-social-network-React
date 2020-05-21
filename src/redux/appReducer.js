import {AuthAPI} from "../api/AuthAPI";
import {stopSubmit} from "redux-form";
import {authCheck} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {

    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
                }
            }
        default:
            return state;

    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authCheck());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    })

    }

export default appReducer