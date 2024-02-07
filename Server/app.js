require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const productRoutes = require("./routes/products");
const registerUser = require("./routes/register");
const connectDB = require("./db/connect");

app.use(express.json()); // To parse JSON bodies
app.use("/api/products", productRoutes);
app.use("/api", registerUser);

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