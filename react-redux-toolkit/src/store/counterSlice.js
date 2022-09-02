import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { count: 0 };

export const counterReducer = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increase(state) {
      state.count++;
    },
    increment(state, action) {
      state.count = state.count + action.payload;
    },
  },
});

export const counterActions = counterReducer.actions;
