import {
  ALL_COINS,
  ALL_CATEGORIES,
  ALL_EXCHANGES,
  ALL_ASSETPLATFORMS,
} from "./actionTypes";

export const initialState = {
  allCoins: [],
  categories: [],
  exchanges: [],
  assetPlatforms: [],
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {

    case ALL_COINS:
      return {
        ...state,
        allCoins: action.payload.data,
      };

    case ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case ALL_EXCHANGES:
      return {
        ...state,
        exchanges: action.payload,
      };

    case ALL_ASSETPLATFORMS:
      return {
        ...state,
        assetPlatforms: action.payload,
      };

    default:
      return state;
  }
};

// export const fetchReducer = (state = [], action) => {
//   switch (action.type) {
//     case ALL_COINS:
//       return action.payload;
//     case ALL_CATEGORIES:
//       return action.payload;
//     case ALL_EXCHANGES:
//       return action.payload;
//     case ALL_ASSETPLATFORMS:
//       return action.payload;
//     default:
//       return state;
//   }
// }; 
