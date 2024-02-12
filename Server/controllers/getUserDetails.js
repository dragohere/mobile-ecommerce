const registerUser = require("../models/registerSchema");
const userDetails = require("../models/userDetailsSchema");
const getUserDetails = async (req, res) => {
  const { email } = req.body;
  const getUser_db = await userDetails.findOne({ email: email });
  if (getUser_db.email === email) {
    return res.status(200).json({
      userName: getUser_db?.userName,
      email: getUser_db?.email,
      firstName: getUser_db?.firstName,
      lastName: getUser_db?.lastName,
      isAdmin: false,
      profileImg:
        getUser_db?.profileImg ||
        "https://media.licdn.com/dms/image/D5603AQEy1aTMMU6naw/profile-displayphoto-shrink_800_800/0/1665038963588?e=2147483647&v=beta&t=2__iMRFbYTMjomR6huuDnh5z3bkbvMuXESE9ThId3FU",
      cartList: [],
      orders: [],
      isActive: true,
      isAuthenticated: getUser_db?.isAuthenticated,
    });
  }
};
const getCart = async (req, res) => {
  const {
    email,
    productId,
    image,
    productName,
    price,
    quantity,
    inStock,
  } = req.body || {};
  try {
    const existingUser = await userDetails.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    const productIndex = existingUser.cartList.findIndex(
      (item) => item.productId === productId
    );

    if (productIndex === -1) {
      // Product not found in cart, add new product
      const newCartList = [
        ...existingUser.cartList,
        { email, productId, image, productName, price, quantity, inStock },
      ];
      await userDetails.updateOne(
        { email: email },
        { $set: { cartList: newCartList } }
      );
      const updatedCartList = await userDetails.findOne({ email: email });
      return res.status(200).json({
        cartList: updatedCartList.cartList,
        msg: `${productName} added to cart`,
      });
    } else {
      // Product found in cart, update quantity and price if changed
      const updatedCartList = existingUser.cartList.map((item, index) => {
        if (index === productIndex) {
          // if (item.quantity !== quantity) {
          //   item.quantity = quantity;
          // }
          // if (item.price !== price) {
          //   item.price = price;
          // }
          return {
            ...item,
            productId,
            image,
            productName,
            price,
            quantity,
            inStock,
            email
          };
        } else {
          return item;
        }
      });

      await userDetails.updateOne(
        { email: email },
        { $set: { cartList: updatedCartList } }
      );
      const updatedCartListAfterUpdate = await userDetails.findOne({
        email: email,
      });
      return res.status(200).json({
        cartList: updatedCartListAfterUpdate.cartList,
        msg: `${productName} updated in cart`,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
const deleteFromCart = async (req, res) => {
  try {
    const { email, productId } = req.body; // Assuming email and productId are sent in the request body

    // Use $pull to directly remove the item from the cartList
    const result = await userDetails.updateOne(
      { email: email },
      { $pull: { cartList: { productId: productId } } } // Assuming productId is stored directly in cart items
    );

    // Check if the operation had an effect
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Item not found in cart" });
    }
    let updatedCartList = await userDetails.findOne({ email: email });

    res.status(200).json({
      cartList: updatedCartList?.cartList,
      message: "Item removed from cart.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { getUserDetails, getCart, deleteFromCart };
