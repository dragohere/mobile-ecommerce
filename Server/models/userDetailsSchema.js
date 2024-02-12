const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userDetailsSchema = new Schema({
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
    msg: {
        type:String,
        default:"Registered"
    },
});
module.exports = mongoose.model("userDetails", userDetailsSchema);