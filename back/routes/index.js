const { Router } = require("express");
const router = Router();
const { list } = require("../value.js");

const test = async (req, res) => {
  if (req.body.token === 123) {
    return res.status(200).json(list);
  }
  return res.status(404).json({ success: "false" });
};

router.use("/test", test);
module.exports = router;
