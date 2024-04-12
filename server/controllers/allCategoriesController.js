const allCategories = require("../value/allCategories");

const getAllCategories = async (req, res) => {
  return res.status(200).json(allCategories);
};

module.exports = { getAllCategories };