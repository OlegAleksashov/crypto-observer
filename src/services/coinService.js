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
  return axios.get("https://api.coingecko.com/api/v3/coins/categories/list");
};

export const fetchAllExchanges = () => {
  return axios.get("https://api.coingecko.com/api/v3/exchanges");
};

export const fetchAllAssetPlatforms = () => {
  return axios.get("https://api.coingecko.com/api/v3/asset_platforms");
};

// export const fetchAllCoins = () => {
//   return fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type":
//           "application/x-www-form-urlencoded; charset=UTF-8;application/json",
//       },
//     }
//   ).then((response) => response.json());
// };

// export const fetchAllCategories = () => {
//   return fetch("https://api.coingecko.com/api/v3/coins/categories/list", {
//     method: "GET",
//     headers: {
//       "Content-Type":
//         "application/x-www-form-urlencoded; charset=UTF-8;application/json",
//     },
//   })
//     .then((response) => response.json())
//     .catch((err) => console.error(err));
// };

// export const fetchAllExchanges = () => {
//   return fetch("https://api.coingecko.com/api/v3/exchanges", {
//     method: "GET",
//     headers: {
//       "Content-Type":
//         "application/x-www-form-urlencoded; charset=UTF-8;application/json",
//     },
//   })
//     .then((response) => response.json())
//     .catch((err) => console.error(err));
// };

// export const fetchAllAssetPlatforms = () => {
//   return fetch("https://api.coingecko.com/api/v3/asset_platforms", {
//     method: "GET",
//     headers: {
//       "Content-Type":
//         "application/x-www-form-urlencoded; charset=UTF-8;application/json",
//     },
//   })
//     .then((response) => response.json())
//     .catch((err) => console.error(err));
// };

// export const options = {
//   method: "GET",
//   headers: { "x-cg-demo-api-key": "	CG-CGygkDfhmBsYedqGSXaSB5YT" },
// };

// export const fetch_AllCoins = () => {
//   fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
//     options
//   )
//     .then((response) => response.json())
//     .catch((err) => console.error(err));
// };
