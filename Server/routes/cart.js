const express = require("express");
const router = express.Router();
const {getCart, deleteFromCart} = require("../controllers/cart");
router.route("/getUserDetails/cart").post(getCart);
router.route("/getUserDetails/cart/deleteItem").post(deleteFromCart);
module.exports = router;
