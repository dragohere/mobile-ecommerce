const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartListSchema = new Schema({
    email: {
        type:String,
        
    },
    productId: {
        type:Number,
        
    },
    productName: {
        type:String,
        
    },
    image: {
        type:String,
        
    },
    price: {
        type:Number,
        
    },
    inStock: {
        type:Boolean,
        
    },
    quantity: {
        type:Number,
        
    },
});
module.exports = mongoose.model("cartList", cartListSchema);