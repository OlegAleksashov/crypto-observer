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