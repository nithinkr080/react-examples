import { counterReducer } from "./counterSlice";
import { uiReducer } from "./uiSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    count: counterReducer.reducer,
    ui: uiReducer.reducer,
  },
});

export default store;
