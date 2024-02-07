import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function SnackBar({open,handleClose,productName, barColorType,additional}) {
  const [state, setState] = React.useState({
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal } = state;

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={barColorType}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {`${productName?.productName ? productName?.productName : "Item"} ${additional} cart!`}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackBar;
