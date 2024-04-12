const allCoins = require("../value/allCoins");

const getAllCoins = async (req, res) => {
  return res.status(200).json(allCoins);
};

module.exports = { getAllCoins };