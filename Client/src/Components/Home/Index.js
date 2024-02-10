import React, { useEffect, useState } from "react";
import Card from "../Card";
import Grid from "@mui/material/Grid";
import {useSelector } from "react-redux";
import Loader from "../Loader";


function Home({cart,setCart}) {
  const featuredProductsData  = useSelector(state=>state?.productsState?.featuredProducts);
  const allProductsData  = useSelector(state=>state?.productsState?.allProducts);
// sessionStorage.removeItem("userDetails");
const [isLoading, setIsLoading]=useState(false)
useEffect(()=>{
  setIsLoading(true )
  setTimeout(()=>{
    setIsLoading(false)
  },3000)
},[])
  return (
    <div className="Home">
      {isLoading && <Loader/>}
      <div className="welcome-note">
        <div>
          <h1>Welcome to Mobiles</h1>
          <p>Your device is in safe hands with our skilled technicians</p>
        </div>
      </div>
      <div className="featured-product">
        <h1>Our Featured Products</h1>
        <div>
          <Grid container>
            {featuredProductsData.map((productDetails) => {
              const { productName, imageSrc, price, productId, brand } =
                productDetails;
              return (
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={3}
                  key={productId}
                  className="featured-list"
                >
                  <Card
                    productName={productName}
                    imageSrc={imageSrc}
                    price={price}
                    productId={productId}
                    productBrand={brand}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <div className="featured-product">
        <h1>All Products</h1>
        <div>
          <Grid container>
            {allProductsData.map((productDetails) => {
              const { productName, imageSrc, price, productId } =
                productDetails;
              return (
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={3}
                  key={productId}
                  className="featured-list"
                >
                  <Card
                    productName={productName}
                    imageSrc={imageSrc}
                    price={price}
                    productId={productId}
                    cart={cart}
                    setCart={setCart}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Home;
