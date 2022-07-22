import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../../Variable";
import axios from "axios";
import ButtonBase from "@mui/material/ButtonBase";
import Skeleton from "@mui/material/Skeleton";

const ConditionBook = ({ con }) => {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);
  const token = "Token " + localStorage.getItem("token");
  useEffect(() => {
    console.log("***");
    console.log(con);
    setApiLoading(true);
    axios
      .get(`${baseUrl}/lists/${con}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("+++++");
        console.log(response.data);
        setbookinfo(response.data);
        setApiLoading(false);
      });
  }, [con]);

  // useEffect(() => {
  //     setApiLoading(true);
  //     axios({
  //       url: `${baseUrl}/read_book/newest_books`,
  //     }).then((response) => {
  //       console.log(response.data);
  //       setbookinfo(response.data);
  //       setApiLoading(false);
  //     });
  //   }, []);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const MouseOver = (event) => {
    event.target.style.color = "#30C7CE";
  };
  const MouseOut = (event) => {
    event.target.style.color = "black";
  };
  return (
    <div
      className="showbook_fa"
      style={{
        direction: "rtl",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          direction: "rtl",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      ></div>
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
                      {Array.from(Array(8)).map((_, index) => (
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
          {bookinfo.length === 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
                fontSize: "19px",
              }}
            >
              کتابی موجود نیست.
            </div>
          )}
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
                    marginTop: "0px",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <ButtonBase style={{ display: "flex", alignItems: "center" }}>
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
    </div>
  );
};

export default ConditionBook;
