const connectDB = require("../../db/connect");
const ProductSchema = require("../../models/products");
const productsJson = require("./products.json");
require("dotenv").config();

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await ProductSchema.deleteMany();
    await ProductSchema.create(productsJson);
    console.log("Product success");
  } catch (error) {
    console.log(error);
  }
};
start();
