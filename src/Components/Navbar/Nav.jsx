// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Grid,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Link, useHistory } from "react-router-dom";
// import Logo from "../../assets/Image/logo.png";
// import Box from "@mui/material/Box";
// import ArticleIcon from "@mui/icons-material/Article";
// import DrawerComp from "./DrawerCopm";
// import SearchIcon from "@mui/icons-material/Search";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import Paper from "@mui/material/Paper";
// import SearchBar from "./Searchbar";

// const Nav = () => {
//   const theme = useTheme();
//   const isMatch = useMediaQuery(theme.breakpoints.down(600));
//   const checkpx = useMediaQuery(theme.breakpoints.down(900));
//   const history = useHistory();
//   const [openSearchBar, setOpenSearchBar] = useState(false);
//   const handlesubmit = async (event) => {
//     event.preventDefault();
//     history.replace(`/Searchbook/?q=${search}`);
//   };
//   const handleSearch = () => {
//     setOpenSearchBar(!openSearchBar);
//     console.log(openSearchBar+"2222");
//   };
//   const handleSearchBarClose = () => {
//     setOpenSearchBar(false);
//   };
//   console.log(openSearchBar+"11111");
//   let showbox = null;
//   if (openSearchBar && checkpx) {
//     showbox = <SearchBar open={openSearchBar} close={handleSearchBarClose}/>;
//     console.log(openSearchBar);
//   }
//   const [search, setsearchname] = useState("");
//   const Setsearch = (event) => {
//     setsearchname(event.target.value);
//   };
//   const MenuButton = ({ Icon, text, linkTo }) => {
//     return (
//       <div style={{ marginBottom: "5 px" }}>
//         <Button
//           style={{
//             color: "#000",
//             width: "100%",
//             justifyContent: "flex-start",
//             padding: "16px",
//           }}
//           variant="text"
//           component={Link}
//           to="/signup"
//         >
//           <Icon style={{ color: "#1565C0" }} />
//           <span style={{ marginRight: "5px" }}>{text}</span>
//         </Button>
//       </div>
//     );
//   };
//   return (
//     <Box sx={{ flexGrow: 1, direction: "rtl" }}>
//       <AppBar
//         sx={{ backgroundColor: "#fff", height: "63px", direction: "rtl" }}
//         position="fixed"
//       >
//         <Toolbar>
//           {isMatch ? (
//             <>
//               <Grid
//                 item
//                 xs={11}
//                 sx={{ flexGrow: 1 }}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   textDecoration: "none",
//                 }}
//               >
//                 <Grid
//                   item
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     textDecoration: "none",
//                   }}
//                   to={`/`}
//                   component={Link}
//                 >
//                   <img
//                     className="SignUpform_img"
//                     src={Logo}
//                     alt="Signuppicture"
//                     style={{
//                       height: "62px",
//                     }}
//                   />
//                   <Typography
//                     variant="h5"
//                     component="p"
//                     style={{
//                       fontWeight: 900,
//                       color: "#000",
//                       marginRight: "10px",
//                     }}
//                   >
//                     کتاب بازان
//                   </Typography>
//                 </Grid>
//                 <IconButton
//                   style={{
//                     color: "#1565C0",
//                     display: "flex",
//                     justifyContent: "center",
//                     marginRight: "5%",
//                   }}
//                   onClick={handleSearch}
//                 >
//                   <SearchIcon></SearchIcon>
//                 </IconButton>
//               </Grid>
//               <DrawerComp />
//             </>
//           ) : (
//             <>
//               <Grid
//                 container
//                 sx={{ placeItems: "center" }}
//                 style={{ display: "flex", alignItems: "center" }}
//               >
//                 <Grid
//                   item
//                   lg={2}
//                   md={2.5}
//                   sm={3.8}
//                   sx={{ flexGrow: 1 }}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     textDecoration: "none",
//                   }}
//                   to={`/`}
//                   component={Link}
//                 >
//                   <img
//                     className="SignUpform_img"
//                     src={Logo}
//                     alt="Signuppicture"
//                     style={{
//                       height: "62px",
//                     }}
//                   />
//                   <Typography
//                     variant="h5"
//                     component="p"
//                     style={{
//                       fontWeight: 900,
//                       color: "#000",
//                       marginRight: "10px",
//                     }}
//                   >
//                     کتاب بازان
//                   </Typography>
//                 </Grid>
//                 {!checkpx ? (
//                   <Grid item lg={6} md={5}>
//                     <Box
//                       component="form"
//                       style={{ fontFamily: "BYekan" }}
//                       onSubmit={handlesubmit}
//                     >
//                       <Paper
//                         sx={{
//                           height: "45px",
//                           p: "2px 4px",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           borderRadius: "8px",
//                           backgroundColor: "#EBECF0",
//                           display: { md: "flex", xs: "none" },
//                         }}
//                       >
//                         <InputBase
//                           sx={{ ml: 1, flex: 1, padding: "16px" }}
//                           placeholder="جستجوی کتاب و نویسنده"
//                           inputProps={{ "aria-label": "search google maps" }}
//                           value={search}
//                           onChange={Setsearch}
//                         />
//                         <IconButton
//                           type="submit"
//                           sx={{ p: "10px" }}
//                           aria-label="search"
//                         >
//                           <SearchIcon style={{ color: "gray" }} />
//                         </IconButton>
//                       </Paper>
//                     </Box>
//                   </Grid>
//                 ) : (
//                   <>
//                     <Grid item sm={1}>
//                       <IconButton
//                         style={{
//                           color: "#1565C0",
//                           display: "flex",
//                           justifyContent: "center",
//                         }}
//                         onClick={handleSearch}
//                       >
//                         <SearchIcon></SearchIcon>
//                       </IconButton>
//                     </Grid>
//                   </>
//                 )}
//                 <Grid item lg={2} md={2} sm={3}></Grid>
//                 <Grid item lg={2} md={2.5} sm={4}>
//                   <Button
//                     variant="contained"
//                     to="/login"
//                     component={Link}
//                     style={{
//                       backgroundColor: "1479AD",
//                       fontWeight: 800,
//                       width: "80px",
//                       height: "36px",
//                     }}
//                   >
//                     ورود
//                   </Button>
//                   <Button
//                     variant="contained"
//                     to="/signup"
//                     component={Link}
//                     style={{
//                       backgroundColor: "CAE5F3",
//                       marginRight: "10px",
//                       fontWeight: 800,
//                       width: "80px",
//                       height: "36px",
//                     }}
//                   >
//                     ثبت نام
//                   </Button>
//                 </Grid>
//               </Grid>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//       {showbox}
//     </Box>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/Image/logo.png";
import Box from "@mui/material/Box";
import ArticleIcon from "@mui/icons-material/Article";
import DrawerComp from "./DrawerCopm";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import SearchBar from "./Searchbar";

const Nav = () => {
  const theme = useTheme();
  const isMatch600 = useMediaQuery(theme.breakpoints.down(650));
  const checkpx = useMediaQuery(theme.breakpoints.down(900));
  const history = useHistory();
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const handlesubmit = async (event) => {
    event.preventDefault();
    history.replace(`/Searchbook/?q=${search}`);
  };
  const handleSearch = () => {
    setOpenSearchBar(!openSearchBar);
    console.log(openSearchBar + "2222");
  };
  const handleSearchBarClose = () => {
    setOpenSearchBar(false);
  };
  console.log(openSearchBar + "11111");
  let showbox = null;
  if (openSearchBar && checkpx) {
    showbox = <SearchBar open={openSearchBar} close={handleSearchBarClose} />;
    console.log(openSearchBar);
  }
  const [search, setsearchname] = useState("");
  const Setsearch = (event) => {
    setsearchname(event.target.value);
  };

  const MouseOver = (event) => {
    event.target.style.color = "#1565C0";
  };
  const MouseOut = (event) => {
    event.target.style.color = "#545252";
  };
  return (
    <Box sx={{ flexGrow: 1, direction: "rtl" }}>
      <AppBar
        sx={{ backgroundColor: "#fff", height: "63px", direction: "rtl" }}
        position="fixed"
      >
        <Toolbar>
          {!isMatch600 && (
            <>
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "63px",
                  width: "84%",
                }}
              >
                <Grid component={Link} to={`/`}>
                  <img
                    className="Nav_img"
                    src={Logo}
                    alt="Signuppicture"
                    style={{
                    }}
                  />
                </Grid>
                <Grid
                  component={Link}
                  className="Nav_type"
                  to={`/`}
                  style={{
                    color: "#0D9ECF",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                >
                  کتاب بازان
                </Grid>
                <Grid
                  sx={{
                    marginRight: "0.8rem",
                    color: "#545252",
                    fontSize: "0.9rem",
                    display: "flex",
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    component={Link}
                    to={`/`}
                    sx={{
                      marginRight: "1.1rem",
                      textDecoration: "none",
                      color: "#545252",
                    }}
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    خانه
                  </Typography>
                  <Typography
                    component={Link}
                    to={`/AboutUs`}
                    sx={{
                      marginRight: "1.1rem",
                      textDecoration: "none",
                      color: "#545252",
                    }}
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    درباره ما
                  </Typography>
                  <Typography
                    component={Link}
                    to={`/login`}
                    sx={{
                      marginRight: "1.1rem",
                      textDecoration: "none",
                      color: "#545252",
                    }}
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    طرح سوال
                  </Typography>

                  {/* <Typography
                component={Link}
                sx={{
                  marginRight: "1.1rem",
                  textDecoration: "none",
                  color: "#545252",
                }}
              >
               مقاله
              </Typography> */}
                </Grid>
                {!checkpx && (
                  <Box
                    component="form"
                    style={{
                      fontFamily: "BYekan",
                      marginRight: "2%",
                      width: "30%",
                    }}
                    onSubmit={handlesubmit}
                  >
                    <Grid
                      sx={{
                        height: "40px",
                        p: "2px 4px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50px",
                        backgroundColor: "#EBECF0",
                        display: { md: "flex", xs: "none" },
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
                )}
                {checkpx && (
                  <Grid sx={{ marginRight: "2%" }}>
                    <IconButton
                      style={{
                        color: "#1565C0",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      onClick={handleSearch}
                    >
                      <SearchIcon></SearchIcon>
                    </IconButton>
                  </Grid>
                )}
              </Grid>

              <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  to="/login"
                  component={Link}
                  sx={{
                    backgroundColor: "1479AD",
                    fontWeight: 800,
                    width: "75px",
                    height: "36px",
                    marginRight: "auto",
                  }}
                >
                  ورود
                </Button>

                <Button
                  variant="contained"
                  to="/signup"
                  component={Link}
                  style={{
                    backgroundColor: "CAE5F3",
                    marginRight: "10px",
                    fontWeight: 800,
                    width: "75px",
                    height: "36px",
                  }}
                >
                  ثبت نام
                </Button>
              </Grid>
            </>
          )}
          {isMatch600 && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "63px",
                }}
              >
                <DrawerComp />
              </div>
              <Grid
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "63px",
                  marginRight: "3%",
                  width: "100%",
                }}
              >
                <Grid component={Link} to={`/`}>
                  <img
                    className="Nav_img"
                    src={Logo}
                    alt="Signuppicture"
                    style={{}}
                  />
                </Grid>

                <Grid
                  component={Link}
                  to={`/`}
                  style={{
                    color: "#0D9ECF",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                  className="Nav_type"
                >
                  کتاب بازان
                </Grid>

                <Grid sx={{ marginRight: "3%" }}>
                  <IconButton
                    style={{
                      color: "#1565C0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    onClick={handleSearch}
                  >
                    <SearchIcon></SearchIcon>
                  </IconButton>
                </Grid>
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
      {showbox}
    </Box>
  );
};

export default Nav;
