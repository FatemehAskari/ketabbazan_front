import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  ButtonGroup,
  Button,
  ClickAwayListener,
  AppBar,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useHistory } from "react-router-dom";
import { Divider } from "@mui/material";

const OptionProfile = () => {
  const MouseOver = (event) => {
    event.target.style.color = "#1565C0";
  };
  const MouseOut = (event) => {
    event.target.style.color = "#545252";
  };
    const handleExit = () => {
    localStorage.clear();
    
  }
  return (
    <AppBar
      className="OPprofile_App"
      sx={{
        backgroundColor: "#fff",
        zIndex: "25",
        direction: "rtl",
        width: "190px",
        borderRadius: "2px",
        marginTop: "2px",
      }}
    >
      <Grid
        component="form"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 7%",
          height: "63px",
          width: "100%",
          marginTop: "63px",
        }}
      >
        <Grid
          style={{ marginTop: "10px", color: "#555252", fontSize: "0.95rem" }}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
        >
          <div style={{ display: "flex", marginTop: "2px" }}>
            <Grid
              component={Link}
              to={`/profile`}
              style={{ textDecoration: "none", color: "#555252" }}
            >
              ویرایش پروفایل
            </Grid>
          </div>
          <div style={{ display: "flex", marginTop: "8px" }}>
            <Grid
              style={{ textDecoration: "none", color: "#555252" }}
            >
              وضعیت کتاب های من{" "}
            </Grid>
          </div>
          <div style={{ display: "flex", marginTop: "8px" }}>
            <Grid
              style={{ textDecoration: "none", color: "#555252" }}
            >
              مقاله های من{" "}
            </Grid>
          </div>
          <div style={{ display: "flex", marginTop: "8px" }}>
            <Grid
              style={{ textDecoration: "none", color: "#555252" }}
              disabled
            >
              {" "}
              شارژ کیف پول{" "}
            </Grid>
          </div>
        </Grid>
        <Divider  style={{ width: "100%", marginTop:"15px" }} />
        <div style={{ display: "flex", marginTop: "10px" }} onClick={handleExit}>
          <Grid
            style={{ textDecoration: "none", color: "red" }}
          >
            خروج
          </Grid>
        </div>
      </Grid>
    </AppBar>
  );
};

export default OptionProfile;
