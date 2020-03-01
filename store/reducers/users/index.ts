import { combineReducers } from "redux";
import signupReducers from "./signup/reducers";

const UserReducer = combineReducers({
  signupReducers
});

export default UserReducer;
