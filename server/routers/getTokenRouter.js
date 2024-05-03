const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middleware/auth.middleware");

const { getAuth } = require("../controllers/getTokenController");

router.get("/", getAuth, authMiddleware);

module.exports = router;
