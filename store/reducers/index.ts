import { combineReducers } from "redux";
import UserReducer from "./users/index";

const rootReducers = combineReducers({ user: UserReducer });

export default rootReducers;
