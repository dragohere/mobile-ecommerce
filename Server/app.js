require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const productRoutes = require("./routes/products");
const registerUser = require("./routes/register");
const getUserDetails = require("./routes/getUserDetails");
const connectDB = require("./db/connect");
const cors = require('cors');

app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use("/api", cors(), productRoutes, registerUser, getUserDetails);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1); // To exit the process if an error occurs
  }
};

start();