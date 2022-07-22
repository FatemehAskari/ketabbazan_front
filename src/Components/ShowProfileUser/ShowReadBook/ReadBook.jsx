import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../../Variable";
import axios from "axios";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Profileimg from "../../../assets/Image/me.jpg";
import { DriveEta } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import './Style.css'
import { useMediaQuery, useTheme } from "@mui/material";

const Readbook = ({ readbookuser }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(600));
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const MouseOver = (event) => {
    event.target.style.color = "#1565C0";
  };
  const MouseOut = (event) => {
    event.target.style.color = "black";
  };

  return (
    <div
      style={{
        direction: "rtl",
      }}
    >
      {readbookuser.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop:"50px",
            fontSize:"19px"
          }}
        >
          کتاب خوانده شده ای موجود نیست
        </div>
      )}
      <div
        style={{
          direction: "rtl",
          marginBottom: "50px",
          marginTop: "1%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          className="showarticleuser_fa"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {readbookuser.map((info, index) => (
            <div>
              <Grid
                style={{
                  marginTop: "2%",
                  display: "flex",
                  textDecoration: "none",
                }}
                key={index}
                to={`/bookinfo/${info.id}`}
                component={Link}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "150px",
                  }}
                >
                  <div>
                    <img
                      src={info.image_url}
                      alt="img"
                      style={{
                        width: "120px",
                        height: "100%",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: "bold",
                        marginRight: "10px",
                        color: "black",
                      }}
                      onMouseOver={MouseOver}
                      onMouseOut={MouseOut}
                      className="readbook_name"
                    >
                      {info.name}
                    </div>

                    <div
                      style={{
                        marginTop: "4px",
                        marginRight: "10px",
                        color: "#757C86",
                      }}
                      className="readbook_author"
                    >
                      {"نویسنده: " + info.author}                      
                    </div>

                    <div
                      style={{
                        marginTop: "4px",
                        marginRight: "10px",
                        color: "#757C86",
                      }}
                      className="readbook_author"
                    >
                      {" انتشارات:" + info.publisher}
                    </div>

                    <div
                      style={{
                        marginTop: "3px",
                        marginRight: "10px",
                        color: "#757C86",
                        overflow: "Hidden",
                        whiteSpace: "normal",
                        textOverflow: "ellipsis",
                        textJustify: "inter-word",
                        textAlign: "justify",
                      }}
                      className="readbook_summary1"
                    >
                      {isMatch ?info.summary.slice(0,90)+"..." :info.summary.slice(0,110)+"..."}
                    </div>

                    <Grid
                      style={{
                        marginTop: "0.7%",
                        marginRight: "10px",
                      }}
                    >
                      <div style={{ display: "flex",alignItems:"center", direction: "rtl" }}>
                        <span style={{ color: "#757C86" }} className="readbook_rate">
                          امتیاز:
                        </span>
                        <Rating
                          name="read-only"
                          value={Math.round(info.rate)}
                          size={"small"}
                          precision={0.1}
                          readOnly
                        />
                      </div>
                    </Grid>
                  </div>
                </div>
              </Grid>
              <Divider
                style={{ color: "red", width: "100%", marginTop: "2%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Readbook;
