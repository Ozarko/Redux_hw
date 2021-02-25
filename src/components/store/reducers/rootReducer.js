import { combineReducers } from "redux";
import { userNameReducer } from "./userNameReducer";

export default combineReducers({
  userName: userNameReducer
})