// import React, { useState } from "react";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import { Link } from "react-router-dom";
// import { Divider } from "@mui/material";
// import ArticleIcon from "@mui/icons-material/Article";
// import HowToRegIcon from "@mui/icons-material/HowToReg";
// import LoginIcon from "@mui/icons-material/Login";

// const DrawerComp = () => {
//   const [open, setopen] = useState(false);
//   return (
//     <div style={{ direction: "rtl", display: "flex" }}>
//       <Drawer  open={open} onClose={() => setopen(false)}>
//         <List style={{ direction: "rtl", marginLeft: "150px" }}>
//           <ListItem button to="/login" component={Link}>
//             <ListItemIcon>
//               <LoginIcon style={{ color: "#1565C0" }} />
//             </ListItemIcon>
//             <ListItemText>ورود</ListItemText>
//           </ListItem>
//           <Divider style={{ marginTop: "20 px" }} />

//           <ListItem button to="/signup" component={Link}>
//             <ListItemIcon>
//               <HowToRegIcon style={{ color: "#1565C0" }} />
//             </ListItemIcon>
//             <ListItemText>ثبت نام</ListItemText>
//           </ListItem>
//           <Divider style={{ marginTop: "20 px" }} />

//           <ListItem button to="/signup" component={Link}>
//             <ListItemIcon>
//               <ArticleIcon style={{ color: "#1565C0" }} />
//             </ListItemIcon>
//             <ListItemText>مقاله بذار</ListItemText>
//           </ListItem>
//           <Divider style={{ marginTop: "20 px" }} />
//         </List>
//       </Drawer>

//       <IconButton onClick={() => setopen(!open)}>
//         <MenuRoundedIcon style={{ color: "#1565C0" }} />
//       </IconButton>
//     </div>
//   );
// };

// export default DrawerComp;

import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/Image/logo.png";
import { Typography, Grid, Button } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./style.css";


export const MenuButton = ({ Icon, text, linkTo }) => {
  return (
    <div style={{ marginBottom: "5 px" }}>
      <Button
        style={{
          color: "#000",
          width: "100%",
          justifyContent: "flex-start",
          padding: "16px",
          marginRight: "4%",
        }}
        variant="text"
        component={Link}
        to={linkTo}
      >
        <Icon style={{ color: "#1565C0" }} />
        <span
          style={{ marginRight: "6px", fontSize: "17px" }}
          onMouseOver={MouseOver}
          onMouseOut={MouseOut}
        >
          {text}
        </span>
      </Button>
    </div>
  );
};
const MouseOver = (event) => {
  event.target.style.color = "#1565C0";
};
const MouseOut = (event) => {
  event.target.style.color = "black";
};
const DrawerComp = () => {
  const [open, setopen] = useState(false);
  const history = useHistory();
  const [search, setsearchname] = useState("");
  const Setsearch = (event) => {
    setsearchname(event.target.value);
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    history.replace(`/Searchbook/?q=${search}`);
  };
  let loginperson=false;
   let flag1 = localStorage.getItem("token");
  if (flag1 !== null) {
    loginperson=true;
    console.log("login");
  }

  return (
    <div style={{ direction: "rtl", display: "flex" }}>
      <Drawer anchor="right" open={open} onClose={() => setopen(false)}>
        <List className="DrawerComp_list" style={{ direction: "rtl" }}>
          <ListItemButton
            style={{ direction: "ltr" }}
            onClick={() => setopen(!open)}
          >
            <ListItemIcon style={{ color: "#1565C0" }}>
              <CloseIcon />
            </ListItemIcon>
            <ListItemText></ListItemText>
          </ListItemButton>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="SignUpform_img"
              src={Logo}
              alt="Signuppicture"
              style={{
                width: "90px",
                height: "70px",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop:"20px" }}>
            <Typography
              component={Link}
              to={`/`}
              variant="h5"
              style={{
                fontWeight: 900,
                color: "#0D9ECF",
                marginRight: "10px",
                textDecoration: "none",
              }}
            >
              کتاب بازان
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Box
              component="form"
              style={{
                fontFamily: "BYekan",
                marginRight: "2%",
                width: "85%",
              }}
              onSubmit={handlesubmit}
            >
              <Grid
                sx={{
                  height: "40px",
                  p: "2px 4px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                  backgroundColor: "#EBECF0",
                  display: { xs: "flex" },
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, padding: "16px" }}
                  placeholder="جستجوی کتاب و نویسنده"
                  inputProps={{ "aria-label": "search google maps" }}
                  value={search}
                  onChange={Setsearch}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon style={{ color: "gray" }} />
                </IconButton>
              </Grid>
            </Box>
          </div>
          <Divider
            variant="middle"
            style={{ marginTop: "20px", width: "90%" }}
          />

          <MenuButton Icon={HomeIcon} text="خانه" linkTo={`/`} />
          <Divider variant="middle" style={{ width: "90%" }} />

          <MenuButton  Icon={NotListedLocationOutlinedIcon} text="درباره ما" linkTo={`/AboutUs`}/>
          <Divider variant="middle" style={{ width: "90%" }} />
          {!loginperson && (
            <MenuButton Icon={QuizIcon} text="طرح سوال" linkTo={`/login`} />
          )}
          {loginperson && (
            <MenuButton Icon={QuizIcon} text="طرح سوال" linkTo={`/Designquiz`} />
          )}
          <Divider variant="middle" style={{ width: "90%" }} />
          {!loginperson && (
            <>
            <MenuButton Icon={LoginIcon} text="ورود " linkTo={`/login`} />
            <Divider variant="middle" style={{ width: "90%" }} />
              <MenuButton
                Icon={AccountCircleIcon}
                text="ثبت نام "
                linkTo={`/signup`}
              />
              <Divider variant="middle" style={{ width: "90%" }} />
            </>
          )}
        </List>
      </Drawer>

      <IconButton onClick={() => setopen(!open)}>
        <MenuRoundedIcon style={{ color: "#1565C0" }} />
      </IconButton>
    </div>
  );
};

export default DrawerComp;
