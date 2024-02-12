const connectDB = require("../../db/connect");
const signInUserSchema = require("../../models/signInSchema");
const signInUser = require("./signUser.json");
require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await signInUserSchema.deleteMany();
    await signInUserSchema.create(signInUser);
    console.log("User Registered");
  } catch (error) {
    console.log(error);
  }
};
start();
