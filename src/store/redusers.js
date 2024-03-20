import {
  ALL_TIME_HIGH,
  ALL_CATEGORIES,
  ALL_EXCHANGES,
  ALL_ASSETPLATFORMS,
} from "./actionTypes";

export const initialState = {
  allTimeHigh: [],
};

// TODO: finish redusers
export const fetchReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_TIME_HIGH:
      return action.payload;
    case ALL_CATEGORIES:
      return action.payload;
    case ALL_EXCHANGES:
      return action.payload;
    case ALL_ASSETPLATFORMS:
      return action.payload;
    default:
      return state;
  }
};
