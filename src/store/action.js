import { fetchAllCoins } from "../services/coinService";
import { ALL_TIME_HIGH } from "./actionTypes";

export const fetchData = () => async (dispatch) => {
  const response = await fetchAllCoins();
  dispatch({
    type: ALL_TIME_HIGH,
    payload: response.data,
  });
};
