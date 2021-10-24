import { createStore } from "redux";
import basicReducer from "./reducers";

let store = createStore(basicReducer)

export default store;