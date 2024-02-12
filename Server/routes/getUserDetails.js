const express = require("express");
const router = express.Router();
const {getUserDetails, getCart, deleteFromCart} = require("../controllers/getUserDetails");
router.route("/getUserDetails").post(getUserDetails);
router.route("/getUserDetails/cart").post(getCart);
router.route("/getUserDetails/cart/deleteItem").post(deleteFromCart);
module.exports = router;
