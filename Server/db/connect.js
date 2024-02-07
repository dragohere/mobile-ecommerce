// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose")

const connectDB = async (uri) => {
  console.log("Connected to db");
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err.stack);
    process.exit(0);
  }
};
module.exports = connectDB;
