import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import image from "../../../assets/Image/image.png";
import Grid from "@mui/material/Grid";
import "./style.css";
import Profileimg from "../../../assets/Image/image.png";
import { width } from "@mui/system";
import { useMediaQuery, useTheme } from "@mui/material";

const Showarticleuser = ({ articleuser, image }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(550));
  return (
    <div
      style={{
        direction: "rtl",
      }}
    >
      {articleuser.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            fontSize: "19px",
          }}
        >
          مقاله نوشته شده ای موجود نیست
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
          {articleuser.map((info, index) => (
            <div>
              <Grid
                style={{
                  marginTop: "3px",
                  display: "flex",
                  textDecoration: "none",
                }}
                key={index}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "150px",
                  }}
                >
                  <Link to={`/articleinfo/${info.id}`}>
                    <img
                      src={info.image}
                      alt="img"
                      style={{
                        width: "140px",
                        height: "100%",
                        borderRadius: "2px",
                        objectFit: "conver",
                      }}
                    />
                  </Link>
                  <div>
                    <Link
                      to={`/articleinfo/${info.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          fontWeight: "bold",
                          marginRight: "10px",
                          color: "black",
                          lineHeight:1.5
                        }}
                        className="showar_title"
                      >
                        {info.title}
                      </div>
                    </Link>
                    <Link
                      to={`/articleinfo/${info.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          marginTop: "5px",
                          marginRight: "10px",
                          color: "#757C86",
                          overflow: "Hidden",
                          whiteSpace: "normal",
                          textOverflow: "ellipsis",
                          height: "45px",
                          textJustify: "inter-word",
                          textAlign: "justify",
                        }}
                        className="showall_summary"
                      >
                        {isMatch
                          ? info.summary.slice(0, 65) + "..."
                          : info.summary.slice(0, 110) + "..."}
                      </div>
                      <Grid
                        style={{
                          marginTop: "3px",
                          marginRight: "10px",
                          color: "#757C86",
                        }}
                        className="showar_tarikh"
                      >
                        {"تاریخ مقاله:" + info.created_jalali}
                      </Grid>
                    </Link>
                    <Link
                      to={`/ShowProfileuser/${info.owner_id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          marginRight: "10px",
                          marginTop: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={info.owner_image}
                          sx={{ width: 20, height: 20 }}
                        />
                        <div
                          style={{
                            marginRight: "5px",
                            color: "#0057D9",
                          }}
                          className="showar_owner"
                        >
                          {info.owner}
                        </div>
                      </div>
                    </Link>
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

export default Showarticleuser;
