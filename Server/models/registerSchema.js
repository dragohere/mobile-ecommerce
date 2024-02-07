const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required:true,
  }
});
module.exports = mongoose.model("registerUSer", registerSchema);