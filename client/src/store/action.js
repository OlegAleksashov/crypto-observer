import {
  fetchAllCoins,
  fetchAllCategories,
  fetchAllExchanges,
  fetchAllAssetPlatforms,
  fetchUser,
} from "../services/coinService";
import {
  ALL_COINS,
  ALL_CATEGORIES,
  ALL_EXCHANGES,
  ALL_ASSETPLATFORMS,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
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

// For user...........................................
// TODO: where does "respons", "error", "userData" take from?
// TODO: How are they related with authReducer and other components?
// TODO: What does "dispatch" mean?

export const signInRequest = (userData) => ({
  type: SIGN_IN_REQUEST,
  payload: userData,
});

export const signInSuccess = (response) => ({
  type: SIGN_IN_SUCCESS,
  payload: response,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const signInUser = (userData) => {
  return async (dispatch) => {
    dispatch(signInRequest(userData));
    try {
      const response = await fetchUser(userData);
      dispatch(signInSuccess(response.data));
      alert(response.data.message);
    } catch (error) {
      dispatch(signInFailure(error.message));
      alert(error.response.body.message);
    }
  };
};

/*export const signInUser = async (userData) => {
  try {
    const response = await fetchUser(userData);
    alert(response.data.message);
  } catch (e) {
    alert(e.response.body.message);
  }
};*/

/*export const signInUser = (userData) => {
  return async (dispatch) => {    
    try {
      const response = await fetchUser(userData);
      alert(response.data.message);
    } catch (e) {
      alert(e.response.body.message);
    }
  };
};*/
