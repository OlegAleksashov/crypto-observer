const { Router } = require("express");
const router = Router();
const { getAllCategories } = require("../controllers/allCategoriesController");

router.get("/", getAllCategories);

module.exports = router;