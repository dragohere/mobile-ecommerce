import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Loader from "./Loader";

export default function AlertDialog({
  open,
  handleDialogClose,
  continueButton,
  rejectionButton,
  contentData,
  boxTitle,
  dialogClickFunction,
  getErrorPage,
}) {
  return (
    <React.Fragment>
      {/* {isLoading && <Loader />} */}
      <Dialog
        open={open}
        onClose={boxTitle==="Warning Note" ? getErrorPage : handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{boxTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contentData}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={boxTitle==="Warning Note" ? getErrorPage : handleDialogClose} color="error">
            {rejectionButton}
          </Button>
          <Button
            onClick={dialogClickFunction}
            autoFocus
            variant="contained"
            color="success"
          >
            {continueButton}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
