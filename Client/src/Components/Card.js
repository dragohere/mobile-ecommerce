import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import SnackBar from './BarSnack';
import { cartItems } from "../redux/Index";
import { Button } from "@mui/material";

const Card = ({ productName, imageSrc, price, productId, productBrand}) => {
  const dispatch = useDispatch();
  const mainImage = imageSrc[0].urlMain;
  const cardDetails = { productName, mainImage, price, productId };
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const handleClick = () => {
    dispatch(cartItems(cardDetails));
    setSnackBarOpen(true);
  };  
  const handleCloseSnackBar = () => {
    setSnackBarOpen(false);
  };
  return (
    <div className="card">
      <Link
        to={`/singleproduct/${productId}`}
        state={{ productName, mainImage, price, productId, imageSrc }}
      >
        <img src={mainImage} alt={productName} className="card__image" />
      </Link>
      <div className="card__info">
        <Link
          to={`/singleproduct/${productId}`}
          state={{ productName, mainImage, price, productId, imageSrc }}
        >
          <h2 className="card__name">{productName}</h2>
          <p className="card__price">{`Brand : ${productBrand}`}</p>
          <p className="card__price">${price}</p>
        </Link>
        <Button variant="contained" color="success" className="card__button"
          onClick={handleClick}>Add to cart</Button>
      </div>
      {snackBarOpen && <SnackBar open={snackBarOpen} handleClose={handleCloseSnackBar} productName={cardDetails} barColorType="success" additional="added to"/>}
      <Outlet />
    </div>
  );
};

export default Card;
