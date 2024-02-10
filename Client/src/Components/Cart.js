import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartItems/CartItemsActions";
import DialogBox from "./DialogBox";
import MUIDataTable from "mui-datatables";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import SnackBar from "./BarSnack";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const userData = JSON.parse(sessionStorage.getItem("userDetails"));
  const navigate = useNavigate();
  const cartItemList = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const DialogBoxData = {
    continueButton: "Sign in",
    rejectionButton: "No thanks",
    contentData: "Dear customer, Please login to place an order",
    boxTitle: "Sign in alert",
  };
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const deleteFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    setSnackBarOpen(true);
  };
  const signInFromCart = () => {
    // loginWithRedirect();
    navigate("/login");
    setDialogOpen(false);
  };
  const handleCloseSnackBar = () => {
    setSnackBarOpen(false);
  };

  /////table data/////
  const columns = [
    {
      name: "productId",
      label: "ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "image",
      label: "image",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          // Render custom component for the quantity column
          const { rowData } = tableMeta;
          const { productId, quantity } = rowData;

          return <img src={value} alt={productId} className="cart-image" />;
        },
      },
    },
    {
      name: "productName",
      label: "Product Name",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const { rowData } = tableMeta;
          const { productId, quantity } = rowData;
          return value;
        },
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "quantity",
      label: "Qnt",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "",
      label: "Delete",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          // Render custom component for the quantity column
          const { rowData } = tableMeta;
          const { productId, quantity } = rowData;

          return (
            <>
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => deleteFromCart(rowData[0])}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  const options = {
    responsive: "standard",
    filterType: "checkbox",
    selectableRows: false,
    print: false,
    download: false,
    viewColumns: false,
    search: true,
    searchOpen: false,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 25, 50, 100],
    pagination: true,
    filter: false,
  };

  return (
    <div className="cart-container">
      <div className="cart-list-table">
        {snackBarOpen && (
          <SnackBar
            open={snackBarOpen}
            handleClose={handleCloseSnackBar}
            barColorType="error"
            additional="deleted from"
          />
        )}
        <DialogBox
          open={dialogOpen}
          handleDialogClose={handleDialogClose}
          dialogClickFunction={signInFromCart}
          continueButton={DialogBoxData?.continueButton}
          rejectionButton={DialogBoxData?.rejectionButton}
          boxTitle={DialogBoxData?.boxTitle}
          contentData={DialogBoxData?.contentData}
        />
        {cartItemList?.length === 0 ? (
          <div>No items in cart. Please add...</div>
        ) : (
          <>
            <MUIDataTable
              title={"Cart List"}
              data={cartItemList}
              columns={columns}
              options={options}
            />
            {userData?.isAuthenticated ? (
              <div className="buy-button">
                <Button
                  variant="contained"
                  color="success"
                >
                  Buy
                </Button>
              </div>
            ) : (
              <div className="buy-button">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleDialogOpen}
                >
                  Buy
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
