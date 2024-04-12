const { Router } = require("express");
const router = Router();
const { getAllExchanges } = require("../controllers/allExchangesController");

router.get("/", getAllExchanges);

module.exports = router;