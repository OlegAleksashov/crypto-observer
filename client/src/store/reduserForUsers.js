import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  VALIDATE_USER,
} from "./actionTypes";

export const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    confirmdPassword: "",
  },
};

export function validateUser(state = initialState, action) {
  switch (action.type) {
    case VALIDATE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          errorMessage: action.payload.details.map((d) => d.message).join(", "),
        },
      };

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
    default:
      return state;
  }
}
