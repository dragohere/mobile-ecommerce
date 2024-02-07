const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: [true, "Id is required"],
    unique:true,
  },
  productName: {
    type: String,
    required: true,
  },
  imageSrc: {
    urlMain: { type: String },
    urls: [{ type: String }],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  inStock: {
    type: String,
    required: [true, "InStock must be required"],
    enum: ["Y", "N"],
    default: "Y",
  },
  brand: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Product", productSchema);