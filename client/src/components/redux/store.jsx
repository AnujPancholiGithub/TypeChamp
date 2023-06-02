import { createStore, applyMiddleware } from "redux";
import { resultReducer } from "./reducers/resultReducer";

const globalStore = createStore(resultReducer);

export default globalStore;
