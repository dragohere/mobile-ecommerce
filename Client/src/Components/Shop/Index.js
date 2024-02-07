import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Card from "../Card";

function Index(props) {
    const allProductsList  = useSelector(state=>state?.productsState?.allProducts);
  return (
    <div className="center-row">
      <div className="center-column">
        <div className="featured-product">
        <h1>My Shop</h1>
        <div>
          <Grid container>
            {allProductsList.map((productDetails) => {
              const { productName, imageSrc, price, productId } = productDetails;
              return (
                <Grid item xs={6} md={4} lg={3} key={productId} className="featured-list">
                  <Card
                    productName={productName}
                    imageSrc={imageSrc}
                    price={price}
                    productId={productId}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Index;
