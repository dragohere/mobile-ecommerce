const Product = require("../models/productsSchema");
const getAllProducts = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json(myData);
};
// Define an asynchronous function to handle requests for getting all products.
const getAllProductsTesting = async (req, res) => {
  // Destructure the query parameters from the request object.
  const { brand, productName, sort, select, page, limit } = req.query;

  // Initialize an empty object to build the query for MongoDB.
  const queryObject = {};

  // If the 'brand' query parameter is provided, add a regex search to the query object
  // to allow case-insensitive search for the brand.
  if (brand) {
    queryObject.brand = { $regex: brand, $options: "i" };
  }

  // If the 'productName' query parameter is provided, overwrite the brand in the query object.
  // This is likely a mistake; you might want to adjust this logic.
  if (productName) {
    queryObject.brand = productName; // Should this be queryObject.productName = productName?
  }

  // Use the Product model to find documents in the database that match the queryObject.
  // This returns a promise that resolves with the query result.
  let apiData = Product.find(queryObject);

  // If a 'sort' query parameter is provided, replace commas with spaces to match
  // MongoDB's sort syntax, and then apply sorting.
  // Note: This assumes apiData is a Mongoose query, which it isn't after `await`.
  // The sorting should be applied before `await` using `.sort(sortFix)` on the query.
  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix); // Incorrect usage if apiData is an array.
  }
// Check if the 'select' query parameter is provided in the request.
if (select) {
  // The 'select' parameter is expected to be a comma-separated string of field names.
  // This line splits the 'select' string by commas into an array of field names,
  // then joins them back into a single string separated by spaces.
  // This format is required by the Mongoose 'select' method.
  let selectFix = select.split(",").join(" ");

  // Apply the 'select' method to the Mongoose query ('apiData') with the formatted string.
  // This tells Mongoose to only include (or exclude) the specified fields in the results.
  // Fields prefixed with '-' will be excluded, others will be included.
  apiData = apiData.select(selectFix);
}


  // Convert the 'page' query parameter to a number, defaulting to 1 if not provided.
  let pages = Number(page) || 1;
  // Convert the 'limit' query parameter to a number, defaulting to 5 if not provided.
  let limits = Number(limit) || 5;
  // Calculate the number of documents to skip based on the current page and limit.
  let skip = (pages - 1) * limits;

  // Apply pagination by slicing the array to get only the documents for the current page.
  // This assumes apiData is an array, which might not be true if sort was applied correctly.
  apiData = apiData.skip(skip).limit(limits);

  // Prepare the final data to be sent in the response.
  const myData = await apiData;

  // Send a 200 OK response with the paginated data and the total number of hits.
  res.status(200).json({ myData, totalCount: myData.length });
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
      return res
        .status(400)
        .json({ msg: "Product with this name already exists" });
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
