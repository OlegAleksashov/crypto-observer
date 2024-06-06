const { Router } = require("express");
const router = Router();
const passport = require("passport");

router.post(
  "/",
  passport.authenticate("account", { session: false }),
  function (req, res) {
    res.send(req.user);
  }
);
module.exports = router;
