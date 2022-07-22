import React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Grid, Hidden, Paper, Typography } from "@mui/material";
import "./style.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, text, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const Dialog1 = ({ close, open, text }) => {
  console.log("&&&");
  console.log(text + "^^");
  return (
    <div>
      <BootstrapDialog
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={close}
        ></BootstrapDialogTitle>
          <DialogContent
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="showdia_andazeh"
          >
            <div className="showdia_ti" style={{ textAlign: "center" }}>
              برای استفاده از امکانات سایت باید وارد سایت بشی
            </div>
            <Button
              variant="contained"
              component={Link}
              to={`/login`}
              style={{
                backgroundColor: "CAE5F3",
                borderRadius: "10px",
                marginTop: "7%",
                width: "80%",
              }}
            >
              ورود به کتاب بازان
            </Button>
            <div className="showdia_ti" style={{ marginTop: "7%" }}>
              حساب کاربری نداری؟
              <Link
                to="/signup"
                style={{
                  marginRight: "5px",
                  color: "#1565C0",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                ثبت نام
              </Link>
            </div>
          </DialogContent>
        <DialogActions></DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default Dialog1;
