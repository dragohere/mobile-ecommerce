const express = require("express");
const router = express.Router();
const { register, signIn, signOut } = require("../controllers/register");

router.route("/register").post(register);
router.route("/signIn").post(signIn);
router.route("/signOut").post(signOut);

module.exports = router;
