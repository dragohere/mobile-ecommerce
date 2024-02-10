const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true,
    },
    lastName: {
        type:String,
        required:true,
    },
    userName: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    isAdmin: {
        type:Boolean,
        default:false
    },
    profileImg:{
        type:String,
        default:""
    },
    cartList: {
        type:Array,
    },
    orders: {
        type:Array,
    },
    isActive: {
        type:Boolean,
        default:true
    },
    isAuthenticated: {
        type:Boolean,
    },
});
module.exports = mongoose.model("userDetails", userDetailsSchema);