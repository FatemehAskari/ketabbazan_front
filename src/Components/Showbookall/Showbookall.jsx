import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Navbar2 from "../Navbar/Nav2";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Navbar from "../Navbar/Nav";
import "./showbookall.css";
import Skeleton from "@mui/material/Skeleton";
import { useHistory } from "react-router-dom";
import ChangeNav from "../Navbar/changeNav";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import Footer from "../Footer/footer";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
});

const Showbook = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);
  const [pagenum, setpagenum] = useState(1);
  const [numpage, setnumpage] = useState(1);

  useEffect(() => {
    document.body.style.background="#F5F5F5";
    return()=>{
      document.body.style.background="white";
    };
  },[]);

  const MouseOver = (event) => {
    event.target.style.color = "#1565C0";
  };
  const MouseOut = (event) => {
    event.target.style.color = "black";
  };

  const history = useHistory();
  useEffect(() => {
    setApiLoading(true);
    axios({
      url: `${baseUrl}/read_book/all_books/page_count`,
    }).then((response) => {
      setnumpage(response.data);
    });
    axios({
      url: `${baseUrl}/read_book/all_books/${pagenum}`,
    }).then((response) => {
      setbookinfo(response.data);
      setApiLoading(false);
    });
  }, [pagenum]);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  // console.log(bookinfo.length);

  const handlePagination = (e, p) => {
    setpagenum(p);
    console.log(p);
    history.replace(`/Book/page=${p}`);
    window.scroll(0, 0);
  };

  return (
    <div style={{direction:"rtl"}} className="showbookall_fa">
      <ChangeNav />
      <CacheProvider value={cacheRtl}>
        <div style={{ marginTop: "6%" }}>
          {apiLoading && (
            <div
              style={{
                direction: "rtl",
                display: "flex",
                justifyContent: "center",
                marginBottom: "50px",
              }}
            >
              <Grid
                item
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {Array.from(Array(22)).map((_, index) => (
                  <Grid
                    key={index}
                    sx={{
                      direction: "rtl",
                    }}
                    style={{
                      width: "155px",
                      height: "202px",
                      marginRight: "10px",
                      marginTop: "40px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Skeleton
                      variant="rectangular"
                      width="120px"
                      height="150px"
                    />
                    <div
                      className="showbookall_name"
                      variant="subtitle1"
                      component="div"
                      style={{ color: "black" }}
                    >
                      <Skeleton
                        variant="rectangular"
                        width="100px"
                        height="12px"
                      />
                    </div>

                    <div
                      variant="body2"
                      style={{ color: "#757C86", fontSize: "13px" }}
                      className="showbookall_author"
                    >
                      <Skeleton
                        variant="rectangular"
                        width="80px"
                        height="12px"
                      />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
          {!apiLoading && (
            <>
              <div
                style={{
                  direction: "rtl",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "50px",
                }}
              >
                <Grid
                  item
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {bookinfo.map((info, index) => (
                    <Grid
                      className="showbookall_paper"
                      key={index}
                      to={`/bookinfo/${info.id}`}
                      component={Link}
                      sx={{
                        direction: "rtl",
                      }}
                      style={{
                        marginTop: "40px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <ButtonBase
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          alt="complex1"
                          className="showbookall_img"
                          src={info.image_url}
                          style={{
                            marginTop: "20px",
                            height: "150px",
                            width: "120px",
                            boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px",
                            borderRadius: "2px",
                          }}
                        />
                      </ButtonBase>

                      <div
                        className="showbookall_name"
                        variant="subtitle1"
                        component="div"
                        style={{ color: "black" }}
                        onMouseOver={MouseOver}
                        onMouseOut={MouseOut}
                      >
                        {info.name}
                      </div>
                      <div
                        variant="body2"
                        style={{ color: "#757C86", fontSize: "13px" }}
                        className="showbookall_author"
                      >
                        {info.author}
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </>
          )}
          {numpage > 1 ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ThemeProvider theme={theme}>
                <Pagination
                  count={numpage}
                  style={{
                    marginTop: "-30px",
                    marginBottom: "30px",
                    padding: "10px 80px",
                  }}
                  variant="outlined"
                  color="primary"
                  onChange={handlePagination}
                />
              </ThemeProvider>
            </div>
          ) : (
            <></>
          )}
        </div>
      </CacheProvider>
      <Footer/>
    </div>
  );
};

export default Showbook;
