const Product = require("../models/products");
const getAllProducts = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json(myData);
};
const getAllProductsTesting = async (req, res) => {
  const { brand, productName } = req.query;
  const queryObject = {};
  if (brand) {
    queryObject.brand = { $regax: brand, $options: "i" };
  }
  if (productName) {
    queryObject.brand = productName;
  }
  const myData = await Product.find(queryObject);
  res.status(200).json(myData);
};
const userData = async (req, res) => {
  try {
    const {
      productId,
      productName,
      imageSrc,
      rating,
      inStock,
      featured,
      brand,
      price,
    } = req.body;
    const productIdExists = await Product.findOne({
      productId: productId,
    });
    if (productIdExists) {
      return res
        .status(400)
        .json({ msg: "Product with this ID already exists" });
    }
    userExist = await Product.findOne({ productName: productName });
    if (userExist) {
      return res.status(400).json({ msg: "Product with this name already exists" });
    }
    const newProductCreated = await Product.create({
      productId,
      productName,
      imageSrc,
      rating,
      inStock,
      featured,
      brand,
      price,
    });
    res.status(200).json({ newProductCreated });
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error Bhuvan ");
  }
};
module.exports = { getAllProducts, getAllProductsTesting, userData };
