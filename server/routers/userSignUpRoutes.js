const { Router } = require("express");
const router = Router();

const { postSignUp } = require("../controllers/signUpUserControllers");

router.post("/", postSignUp);

module.exports = router;

// TODO:
