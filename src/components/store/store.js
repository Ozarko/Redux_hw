import { createStore } from "redux";
import { userNameReducer } from "./reducers/userNameReducer";

export const store = createStore(userNameReducer)