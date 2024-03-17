import axios from "axios";

export const fetchAllCoins = () => {
  return axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    {
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded; charset=UTF-8;application/json",
      },
    }
  );
};

export const fetchAllCategories = () => {
  return axios.get("https://api.coingecko.com/api/v3/coins/categories/list", {
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    },
  });
};
