import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

// ======================================== SIGNUP ======================================== //

    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

// ======================================== SIGNIN ======================================== //
// TODO: 

    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    // case SIGN_IN_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     user: action.payload,
    //   };
    // case SIGN_IN_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};
