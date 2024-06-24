import { AppDispatch } from ".";
import {
  fetchAllCoins,
  fetchAllCategories,
  fetchAllExchanges,
  fetchAllAssetPlatforms,
  fetchUser,
  fetchSignInUser,
  fetchVerifyUser,
} from "../services/coinService";
import {
  ALL_COINS,
  ALL_CATEGORIES,
  ALL_EXCHANGES,
  ALL_ASSETPLATFORMS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN_REQUEST,
  SET_USER,
  LOG_OUT,
  VERIFY,
} from "./actionTypes";

interface CoinData {
  data: Array<object>;
}

interface ApiResponse<T> {
  data: T;
}

interface UserData {
  email: string;
  password: string;
}

interface UserResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export const fetchData = () => async (dispatch: AppDispatch) => {
  //TODO: insert types
  const response: ApiResponse<CoinData[]> = await fetchAllCoins();
  dispatch({
    type: ALL_COINS,
    payload: response.data,
  });
};

export const fetchCategories = () => async (dispatch: AppDispatch) => {
  const response = await fetchAllCategories();
  dispatch({
    type: ALL_CATEGORIES,
    payload: response.data,
  });
};

export const fetchExchanges = () => async (dispatch: AppDispatch) => {
  const response = await fetchAllExchanges();
  dispatch({
    type: ALL_EXCHANGES,
    payload: response.data,
  });
};

export const fetchAssetPlatforms = () => async (dispatch: AppDispatch) => {
  const response = await fetchAllAssetPlatforms();
  dispatch({
    type: ALL_ASSETPLATFORMS,
    payload: response.data,
  });
};

// ================== SIGNUP ====================== //

export const signUpRequest = (userData: UserData) => ({
  type: SIGN_UP_REQUEST,
  payload: userData,
});

export const signUpSuccess = (response: UserResponse) => ({
  type: SIGN_UP_SUCCESS,
  payload: response,
});

export const signUpFailure = (error: string) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

export const signUpUser = (userData: UserData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(signUpRequest(userData));
    try {
      const response = await fetchUser(userData);
      dispatch(signUpSuccess(response.data));
    } catch (error) {
      dispatch(signUpFailure((error as ErrorResponse).response.data.message));
      console.log((error as ErrorResponse).response.data.message);
    }
  };
};

// ================== SIGNIN ====================== //

export const signInRequest = (userData: UserData) => ({
  type: SIGN_IN_REQUEST,
  payload: userData,
});

export const setUser = (userData: UserResponse) => ({
  type: SET_USER,
  payload: userData,
  token: userData.token,
});

export const signInUser = (userData: UserData) => {
  return async (dispatch: AppDispatch) => {
    dispatch(signInRequest(userData));
    try {
      const response = await fetchSignInUser(userData);
      dispatch(setUser(response.data));
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      dispatch(signUpFailure((error as ErrorResponse).response.data.message));
      console.log(error);
    }
  };
};

// ================== LOG OUT ====================== //

export const logOutUser = () => ({
  type: LOG_OUT,
});

// ================== VERIFY USER CREDENTIAL ====================== //

export const verifyUser = (userData: UserResponse) => ({
  type: VERIFY,
  payload: userData,
});

export const verifyCredential = (token: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetchVerifyUser(token);
      dispatch(verifyUser(response));
    } catch (error) {
      console.error("Error verifying user:", error);
      dispatch(logOutUser()); //TODO: describe the reason
    }
  };
};
// TODO: where does "respons", "error", "userData" take from?
// TODO: How are they related with authReducer and other components?
// TODO: What does "dispatch" mean?
