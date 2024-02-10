import { combineReducers } from "redux";
import productReducer from './Products/ProductReducer';
import cartReducer from './CartItems/CartItemsReducer';
import getUserDetails from './UserDetails/userDetailsReducer';
const rootReducer  = combineReducers({
    productsState: productReducer,
    cartState:cartReducer,
    userDetailsState:getUserDetails,
});
export default rootReducer;