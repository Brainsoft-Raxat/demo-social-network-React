import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import navReducer from "./navReducer";
import userReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage: userReducer,
    nav: navReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer})

let store = createStore(reducers, applyMiddleware(thunk));

export default store