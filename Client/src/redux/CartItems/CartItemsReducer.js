import { CARTITEMS, REMOVEFROMCART } from "./CartItemsTypes";
import axios from "axios"

const cartListDetails = JSON.parse(sessionStorage.getItem("cart"));

const initialState = cartListDetails || [];

console.log(cartListDetails,"cartListDetails")
const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));

const CartReducer = (state = initialState, action) => {
  const { imageSrc, mainImage, price, productId, productName, quantity } =
    action.payload?.productDetails || {};
  switch (action.type) {
    case CARTITEMS:
      const getUserDetailsWithCart = async (payload) => {
        try {
          const response = await axios.post('http://localhost:5000/api/getUserDetails/cart',payload);
          const cartDetails = response.data;
          sessionStorage.setItem("cart", JSON.stringify(cartDetails?.cartList));
          return cartDetails;
        } catch (error) {
          console.error('Error fetching user details:', error);
          throw error;
        }
      };
      const existingProductIndex = state.findIndex(
        (item) => item.productId === productId
      );
      if (existingProductIndex >= 0) {
        const newState = state.map((item, index) => {
          if (index === existingProductIndex) {
            const updatedQuantity = quantity
              ? item.quantity + quantity
              : item.quantity + 1;
            return { ...item, quantity: updatedQuantity, email:userDetails?.email };
          }
          getUserDetailsWithCart(item)
          return item;
        });
        sessionStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      } else {
        const newState = [
          ...state,
          {
            productId: productId,
            productName: productName,
            image: mainImage,
            price: price,
            quantity: quantity ? quantity : 1,
            email:userDetails?.email
          },
        ];
        sessionStorage.setItem("cart", JSON.stringify(newState));
        let email = userDetails?.email
        const oldState={
          ...action.payload.productDetails, email
        }
        getUserDetailsWithCart(oldState)
        return newState;
      }

    case REMOVEFROMCART:
      const newState = state.filter(
        (item) => item.productId !== action.payload
      );
      sessionStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};
export default CartReducer;
