import {
  fetchAllCoins,
  fetchAllCategories,
  fetchAllExchanges,
  fetchAllAssetPlatforms,
  fetchUser,
  fetchSignInUser
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
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
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

// ======================================== SIGNUP ======================================== //
// TODO: where does "respons", "error", "userData" take from?
// TODO: How are they related with authReducer and other components?
// TODO: What does "dispatch" mean?

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
      alert(response.data.message);
    } catch (error) {
      dispatch(signUpFailure(error.message));
      alert(error.response.body.message);
    }
  };
};

// ======================================== SIGNIN ======================================== //

export const signInRequest = (userData) => ({
  type: SIGN_IN_REQUEST,
  payload: userData,
});

// export const signInSuccess = (response) => ({
//   type: SIGN_IN_SUCCESS,
//   payload: response,
// });

// export const signInFailure = (error) => ({
//   type: SIGN_IN_FAILURE,
//   payload: error,
// });

export const signInUser = (userData) => {
  return async (dispatch) => {
    dispatch(signInRequest(userData));
    try {
      const response = await fetchSignInUser(userData);
      alert(response.data.message);
    } catch (error) {
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
