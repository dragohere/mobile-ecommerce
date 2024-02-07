import { combineReducers } from "redux";
import productReducer from './Products/ProductReducer';
import cartReducer from './CartItems/CartItemsReducer';
const rootReducer  = combineReducers({
    productsState: productReducer,
    cartState:cartReducer,
});
export default rootReducer;