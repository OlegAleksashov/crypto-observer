const { Router } = require("express");
const router = Router();

const { createNewUser } = require("../controllers/allUsersControllers");

router.post("/", createNewUser);

module.exports = router;