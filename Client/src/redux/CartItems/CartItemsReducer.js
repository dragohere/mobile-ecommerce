import { CARTITEMS, REMOVEFROMCART } from "./CartItemsTypes";


const initialState = JSON.parse(sessionStorage.getItem("cart")) || [
  {
    productId: "ID",
    image: "Image",
    productName: "Product Name",
    price: "Price",
    quantity: "Qnt",
  },
];
const CartReducer = (state = initialState, action) => {
  const { imageSrc, mainImage, price, productId, productName } =
    action.payload?.productDetails || {};
  switch (action.type) {
    case CARTITEMS:
      const existingProductIndex = state.findIndex(
        (item) => item.productId === productId
      );
      if (existingProductIndex >= 0) {
        const newState = state.map((item, index) => {
          if (index === existingProductIndex) {
            const updatedQuantity = action.payload.quantity
              ? item.quantity + action.payload.quantity
              : item.quantity + 1;
            return { ...item, quantity: updatedQuantity };
          }
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
            quantity: action?.payload?.quantity ? action?.payload?.quantity : 1,
          },
        ];
        sessionStorage.setItem("cart", JSON.stringify(newState));
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
