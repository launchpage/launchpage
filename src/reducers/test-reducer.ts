import { Action } from "redux";

const initialState = { value: 0 };

export const testReducer = (state = initialState, action: Action) => {
  return { ...state };
};
