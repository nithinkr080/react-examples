import { countReducer, uiReducer } from "./action-reducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  countReducer,
  uiReducer,
});

const store = createStore(rootReducer);

export default store;
