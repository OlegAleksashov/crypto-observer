const { Router } = require("express");
const router = Router();
const coinsRouter = require("./coinsRouter");
const assetPlatformsRouter = require("./assetPlatformsRouter");
const exchangesRouter = require("./excangesRouter");
const categoriesRouter = require("./categoriesRouter");
const usersSignUpRoutes = require("./userSignUpRoutes");
const usersSignInRoutes = require("./userSignInRoutes");


router.use("/all-coins", coinsRouter);
router.use("/all-assetPlatforms", assetPlatformsRouter);
router.use("/all-exchanges", exchangesRouter);
router.use("/all-categories", categoriesRouter);
router.use("/registration", usersSignUpRoutes);
router.use("/signin", usersSignInRoutes);

module.exports = router;

// TODO:

// Note

// const test = async (req, res) => {
//   if (req.body.token === 123) {
//     return res.status(200).json(list);
//   }
//   return res.status(404).json({ success: "false" });
// };
