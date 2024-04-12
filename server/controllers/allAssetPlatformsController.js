const allAssetPlatforms = require("../value/allAssetPlatforms");

const getAllAssetPlatforms = async (req, res) => {
  return res.status(200).json(allAssetPlatforms);
};

module.exports = { getAllAssetPlatforms };