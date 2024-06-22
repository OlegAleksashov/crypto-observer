import { PayloadAction } from "@reduxjs/toolkit";
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_REQUEST,
  SET_USER,
  LOG_OUT,
  VERIFY,
} from "../actionTypes";

interface AuthState {
  loading: boolean;
  error: string;
  user: object | null;
  isAuth: boolean;
  token: string | null;
}

const initialState: AuthState = {
  loading: false,
  error: "",
  user: {},
  isAuth: false,
  token: localStorage.getItem("token") || "",
};

export const authReducer = (state = initialState, action: PayloadAction<AuthState>) => {
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
        isAuth: true,
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

    // ================== LOG OUT ====================== //

    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        user: {},
        isAuth: false,
      };

    // ================== VERIFY USER CREDENTIAL ====================== //

    case VERIFY:
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
        isAuth: true,
      };

    default:
      return state;
  }
};
