const connectDB = require("./db/connect");
const userDetailsSchema = require("./models/signInSchema");
const userDetails = require("./userDetails.json");
require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await userDetailsSchema.deleteMany();
    await userDetailsSchema.create(userDetails);
    console.log("User Registered");
  } catch (error) {
    console.log(error);
  }
};
start();
