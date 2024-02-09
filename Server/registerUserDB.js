const connectDB = require("./db/connect");
const registerSchema = require("./models/registerSchema");
const registerUser = require("./registerUser.json");
require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await registerSchema.deleteMany();
    await registerSchema.create(productsJson);
    console.log("User Registered");
  } catch (error) {
    console.log(error);
  }
};
start();
