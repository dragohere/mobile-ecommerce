import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {cartItems} from '../redux/Index';
import { useNavigate } from "react-router-dom";

function SingleProduct({ cart, setCart, }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { productName, mainImage, price, imageSrc, productId } = location.state;
  const [ratingValue, setRatingValue] = React.useState(4);
  const [quantity, setQuantity] = React.useState(1);
  const [currentImage, setCurrentImage] = React.useState(mainImage);
  const productDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const productIncrement = () => {
    // dispatch(allProducts())
    setQuantity((prevCount) => prevCount + 1);
  };
  const selectImage = (imageValue) => {
    setCurrentImage(imageValue);
  };
  const addToCart = () => {
    const productDetails = {
      productName, mainImage, price, productId, quantity
    }
    dispatch(cartItems(productDetails));
    navigate("/cart");
  };
  useEffect(()=>{

  },[])
  return (
    <div className="single-product">
      <Grid container>
        <Grid item xs={12} md={6} lg={6} className="center-row">
          <div className="center-column">
            <img
              src={imageSrc[1]?.url}
              className="product-mini-size"
              onClick={() => selectImage(imageSrc[1]?.url)}
            />
            <img
              src={imageSrc[2]?.url}
              className="product-mini-size"
              onClick={() => selectImage(imageSrc[2]?.url)}
            />
            <img
              src={imageSrc[3]?.url}
              className="product-mini-size"
              onClick={() => selectImage(imageSrc[3]?.url)}
            />
            <img
              src={imageSrc[4]?.url}
              className="product-mini-size"
              onClick={() => selectImage(imageSrc[4]?.url)}
            />
          </div>
          <div className="center-column">
            <img src={currentImage} className="product-large-size" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className="product-detail-container">
          <div className="product-detail">
            <h1>{productName}</h1>
            <Rating
              name="singleProduct-rating"
              className="singleProduct-rating"
              value={ratingValue}
              size="large"
              readOnly
              //   onChange={(event, newValue) => {
              //     setRatingValue(newValue);
              //   }}
            />
            <p>MRP : {price}/-</p>
            <p>Deal of the day : 2000/-</p>
            <p>Available : Instock</p>
            <p> Brand : Iphone</p>
            <p>ID : {productId}</p>
          </div>
          <div className="product-ordercount">
            <button onClick={productDecrement} className="product-decrement">
              -
            </button>
            <div className="product-ordercount-value">{quantity}</div>
            <button onClick={productIncrement} className="product-increment">
              +
            </button>
          </div>
          <Button
            variant="contained"
            color="success"
            onClick={addToCart}
            // onClick={() => {
            //   dispatch(cartItems(location.state, quantity));
            //   navigate("/cart");
            // }}
            className="addtocart-btn"
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SingleProduct;
