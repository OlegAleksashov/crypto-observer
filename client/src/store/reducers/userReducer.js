import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  VALIDATE_USER,
  ERROR_MESSAGE,
} from "../actionTypes";
import { validateRegister } from "../../assest/validador";

export const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    confirmdPassword: "",
    errorMessage: '',
  },
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case VALIDATE_USER:
      const { error } = validateRegister({
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
      });
      if (error) {
        return {
          ...state,
          errorMessage: error.details.map((d) => d.message).join(', '),
        };
      } else {
        return {
          ...state,
          errorMessage: '',
        };
      }

    case SET_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };

    case SET_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload,
        },
      };

    case SET_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.payload,
        },
      };

    case SET_CONFIRM_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          confirmPassword: action.payload,
        },
      };

    case ERROR_MESSAGE:
      return {
        ...state,
        user: {
          ...state.user,
          errorMessage: action.payload,
        },
      };

    default:
      return state;
  }
}
