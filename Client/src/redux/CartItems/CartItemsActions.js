import { CARTITEMS, REMOVEFROMCART } from "./CartItemsTypes";

export const cartItems = (productDetails)=>{
    return{
        type:CARTITEMS,
        payload:{productDetails},
    }
}
export const removeFromCart = (productId)=>{
    return{
        type:REMOVEFROMCART,
        payload:productId,
    }
}
