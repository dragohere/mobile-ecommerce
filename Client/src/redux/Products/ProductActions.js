import {ALL_PRODUCTS, FEATURED_PRODUCTS } from './ProductTypes';

export const allProducts = ()=>{
    return{
        type:ALL_PRODUCTS,
    }
}
export const featuredProducts = ()=>{
    return{
        type:FEATURED_PRODUCTS,
    }
}