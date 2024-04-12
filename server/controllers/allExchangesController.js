const allExchanges = require("../value/allExchanges");

const getAllExchanges = async (req, res) => {
  return res.status(200).json(allExchanges);
};

module.exports = { getAllExchanges };