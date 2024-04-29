import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_REQUEST,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  user: JSON.parse(localStorage.getItem("users")) || {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {

    // ================== SIGNUP ====================== //

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

    // ================== SIGNIN ====================== //

    case SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    default:
      return state;
  }
};
