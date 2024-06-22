const { Router } = require("express");
const router = Router();
const passport = require("passport");

const { postSignIn } = require("../controllers/signInUserControllers");

router.post("/", postSignIn); //passport.authenticate("user", { session: false }),

module.exports = router;
