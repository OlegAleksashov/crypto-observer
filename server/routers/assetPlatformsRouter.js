const { Router } = require("express");
const router = Router();
const { getAllAssetPlatforms } = require("../controllers/allAssetPlatformsController");

router.get("/", getAllAssetPlatforms);

module.exports = router;