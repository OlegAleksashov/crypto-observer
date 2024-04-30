import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_REQUEST,
  SET_USER,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  user: JSON.parse(localStorage.getItem("users")) || {},
  isAuth: false,
  token: localStorage.getItem("token") || "",
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

    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        token: action.payload.token,
      };

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
