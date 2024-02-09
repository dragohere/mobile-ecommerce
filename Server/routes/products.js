const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllProductsTesting,
  userData,
} = require("../controllers/products");

router.route("/getAllProducts").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/user").post(userData);

module.exports = router;
