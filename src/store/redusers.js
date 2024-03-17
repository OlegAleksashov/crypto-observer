import { ALL_TIME_HIGH } from "./actionTypes";

export const fetchReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_TIME_HIGH:
      return action.payload;
    default:
      return state;
  }
};
