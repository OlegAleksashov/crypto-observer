import {
  fetchAllCoins,
  fetchAllCategories,
  fetchAllExchanges,
  fetchAllAssetPlatforms,
  fetchUser,
  fetchSignInUser,
  fetchTokenUser
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
} from "./actionTypes";

export const fetchData = () => async (dispatch) => {
  const response = await fetchAllCoins();
  dispatch({
    type: ALL_COINS,
    payload: response.data,
  });
};

export const fetchCategories = () => async (dispatch) => {
  const response = await fetchAllCategories();
  dispatch({
    type: ALL_CATEGORIES,
    payload: response.data,
  });
};

export const fetchExchanges = () => async (dispatch) => {
  const response = await fetchAllExchanges();
  dispatch({
    type: ALL_EXCHANGES,
    payload: response.data,
  });
};

export const fetchAssetPlatforms = () => async (dispatch) => {
  const response = await fetchAllAssetPlatforms();
  dispatch({
    type: ALL_ASSETPLATFORMS,
    payload: response.data,
  });
};

// ================== SIGNUP ====================== //

export const signUpRequest = (userData) => ({
  type: SIGN_UP_REQUEST,
  payload: userData,
});

export const signUpSuccess = (response) => ({
  type: SIGN_UP_SUCCESS,
  payload: response,
});

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

export const signUpUser = (userData) => {
  return async (dispatch) => {
    dispatch(signUpRequest(userData));
    try {
      const response = await fetchUser(userData);
      dispatch(signUpSuccess(response.data));
      console.log(response.data.message + "Lol");
    } catch (error) {
      dispatch(signUpFailure(error.response.data.message));
      console.log(error.response.data.message);
    }
  };
};

// ================== SIGNIN ====================== //

export const signInRequest = (userData) => ({
  type: SIGN_IN_REQUEST,
  payload: userData,
});

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
  token: userData.token,
});

export const signInUser = (userData) => {
  return async (dispatch) => {
    dispatch(signInRequest(userData));
    try {
      const response = await fetchSignInUser(userData);
      dispatch(setUser(response.data.user, response.data.token));
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };
};

// ================== LOG OUT ====================== //

export const logOutUser = () => ({
  type: LOG_OUT,
});

// ================== GET TOKEN ====================== //

export const getUserToken = () => {
  return async (dispatch) => {
    try {
      const response = await fetchTokenUser()
      dispatch(setUser(response.data.user, response.data.token));
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      localStorage.removeItem('token')
      console.log(error);
    }
  };
};

// TODO: where does "respons", "error", "userData" take from?
// TODO: How are they related with authReducer and other components?
// TODO: What does "dispatch" mean?
