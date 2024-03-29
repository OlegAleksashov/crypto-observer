import axios from "axios";

export const fetchAllCoins = () => {
  return axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    {
      headers: {
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

export const fetchAllCategories = () => {
  return axios.get("https://api.coingecko.com/api/v3/coins/categories/list", {
    headers: {
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const fetchAllExchanges = () => {
  return axios.get("https://api.coingecko.com/api/v3/exchanges", {
    headers: {
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export const fetchAllAssetPlatforms = () => {
  return axios.get("https://api.coingecko.com/api/v3/asset_platforms", {
    headers: {
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
      "Access-Control-Allow-Origin": "*",
    },
  });
};

// By using coinGecko npm api.....................................

//import CoinGecko from "coingecko-api";
/*const CoinGeckoClient = new CoinGecko();

export const fetchAllExchanges = async () => {
  try {
    const response = await CoinGeckoClient.exchanges.list();
    return response.data;
  } catch (error) {
    console.error("Error fetching all exchanges:", error);
    return []; 
  }
};

export const fetchAllCategories = async () => {
  try {
    const response = await CoinGeckoClient.coins.categories();
    return response.data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return []; 
  }
};

export const fetchAllCoins = async () => {
  try {
    const response = await CoinGeckoClient.coins.markets({
      vs_currency: "usd",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching all coins:", error);
    return []; 
  }
};

export const fetchAllAssetPlatforms = async () => {
  try {
    const response = await CoinGeckoClient.assetPlatforms.list();
    return response.data;
  } catch (error) {
    console.error("Error fetching all asset platforms:", error);
    return []; 
  }
}; */

// by using plain fetch requests...............................

/*export const fetchAllCoins = () => {
  return fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    {
      method: "GET",
      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded; charset=UTF-8;application/json",
      },
    }
  ).then((response) => response.json());
};

export const fetchAllCategories = () => {
  return fetch("https://api.coingecko.com/api/v3/coins/categories/list", {
    method: "GET",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const fetchAllExchanges = () => {
  return fetch("https://api.coingecko.com/api/v3/exchanges", {
    method: "GET",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const fetchAllAssetPlatforms = () => {
  return fetch("https://api.coingecko.com/api/v3/asset_platforms", {
    method: "GET",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};*/
