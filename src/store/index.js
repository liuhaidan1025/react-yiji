import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import show from "./reducers/show";

const rootReducer = combineReducers({
  show
});

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
