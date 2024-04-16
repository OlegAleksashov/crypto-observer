import {
  fetchAllCoins,
  fetchAllCategories,
  fetchAllExchanges,
  fetchAllAssetPlatforms,
} from "../services/coinService";
import {
  ALL_COINS,
  ALL_CATEGORIES,
  ALL_EXCHANGES,
  ALL_ASSETPLATFORMS,
  VALIDATE_USER,
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  ERROR_MESSAGE,
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

export const valideteSignUp = (name, email, password, confirmPassword) => ({
  type: VALIDATE_USER,
  payload: {
    name,
    email,
    password,
    confirmPassword,
  },
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setConfirmPassword = (confirmPassword) => ({
  type: SET_CONFIRM_PASSWORD,
  payload: confirmPassword,
});

export const setErrorMessage = (errorMessage) => ({
  type: ERROR_MESSAGE,
  payload: errorMessage,
});
