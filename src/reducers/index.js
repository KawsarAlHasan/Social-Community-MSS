import { combineReducers } from "redux";

import authReducer from "../reducers/authReducer";

import postReducer from "../reducers/postReducer";

export const reducers = combineReducers({ authReducer, postReducer });
