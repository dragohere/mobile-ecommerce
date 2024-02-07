import { CARTITEMS, REMOVEFROMCART } from "./CartItemsTypes";

export const cartItems = (productDetails, quantity)=>{
    return{
        type:CARTITEMS,
        payload:{productDetails, quantity},
    }
}
export const removeFromCart = (productId)=>{
    return{
        type:REMOVEFROMCART,
        payload:productId,
    }
}
