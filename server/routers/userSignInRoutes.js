const { Router } = require("express");
const router = Router();

const { postSignIn } = require("../controllers/signInUserControllers");

router.post("/", postSignIn);

module.exports = router;