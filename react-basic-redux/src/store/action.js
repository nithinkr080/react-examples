import { INCREASE, INCREMENT, UI } from "./action-types";

export const inc = () => {
  return {
    type: INCREASE,
  };
};

export const increment = (data) => {
  return {
    type: INCREMENT,
    data: data,
  };
};

export const ui = () => {
  return {
    type: UI,
  };
};
