const express = require("express");
const router = express.Router();
const {getUserDetails} = require("../controllers/getUserDetails");
router.route("/getUserDetails").post(getUserDetails);
module.exports = router;
