import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { ui: true };

export const uiReducer = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    ui(state) {
      state.ui = !state.ui;
    },
  },
});

export const uiActions = uiReducer.actions;
