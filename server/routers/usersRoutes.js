const { Router } = require("express");
const router = Router();

const {
  postSignUp,
  postSignIn,
} = require("../controllers/allUsersControllers");

router.post("/", postSignUp);
router.post("/", postSignIn);

module.exports = router;

// TODO:
