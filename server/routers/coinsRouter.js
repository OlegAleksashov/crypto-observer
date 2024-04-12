const { Router } = require("express");
const router = Router();
const { getAllCoins } = require("../controllers/allCoinsController");

router.get("/", getAllCoins);

module.exports = router;