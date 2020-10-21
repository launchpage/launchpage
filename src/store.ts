import { createStore } from "redux";
import { testReducer } from "./reducers/test-reducer";

export const getStore = () => {
  return createStore(testReducer);
};
