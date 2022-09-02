import { INCREASE, UI } from "./action-types";
import { INCREMENT } from "./action-types";
const initialCountState = { count: 0 };

export const countReducer = (state = initialCountState, action) => {
  if (action.type === INCREASE) {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === INCREMENT) {
    return {
      count: state.count + action.data,
    };
  }

  return state;
};

const initialUiState = { ui: true };

export const uiReducer = (state = initialUiState, action) => {
  if (action.type === UI) {
    return {
      ui: !state.ui,
    };
  }
  return state;
};
