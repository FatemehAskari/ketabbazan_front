// import React from 'react'

// const Myarticle = () => {
//     return (  );
// }

// export default Myarticle;

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { useMediaQuery, useTheme } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const Myarticle = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [articleinfo, setarticleinfo] = useState([]);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(550));
  const token = "Token " + localStorage.getItem("token");
  useEffect(() => {
    setApiLoading(true);
    axios
      .get(`${baseUrl}/write_article/my_articles/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setarticleinfo(response.data);
        setApiLoading(false);
      });
  }, []);
  return (
    <div>
      {apiLoading && (
        <div style={{ direction: "rtl", marginRight: "5%" }}>
          {Array.from(Array(5)).map((_, index) => (
            <div style={{ marginTop: "20px" }}>
              <div style={{ display: "flex" }}>
                <Skeleton variant="rectangular" width={150} height={150} />
                <div style={{ marginRight: "16px" }}>
                  <Skeleton
                    style={{ marginTop: "5px" }}
                    variant="rectangular"
                    width={140}
                    height={6}
                  />
                  <Skeleton
                    style={{ marginTop: "10px" }}
                    variant="rectangular"
                    width={120}
                    height={6}
                  />

                  <Skeleton
                    style={{ marginTop: "20px" }}
                    variant="rectangular"
                    width={200}
                    height={6}
                  />
                  <Skeleton
                    style={{ marginTop: "10px" }}
                    variant="rectangular"
                    width={200}
                    height={6}
                  />
                  <Skeleton
                    style={{ marginTop: "10px" }}
                    variant="rectangular"
                    width={200}
                    height={6}
                  />
                  <Skeleton
                    style={{ marginTop: "10px" }}
                    variant="rectangular"
                    width={200}
                    height={6}
                  />
                  <Skeleton
                    style={{ marginTop: "10px" }}
                    variant="rectangular"
                    width={200}
                    height={6}
                  />

                  <Skeleton
                    style={{ marginTop: "10px" }}
                    variant="circular"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <Divider
                style={{ color: "red", width: "100%", marginTop: "2%" }}
              />
            </div>
          ))}
        </div>
      )}
      {!apiLoading && (
        <div
          style={{
            direction: "rtl",
          }}
        >
          {articleinfo.length === 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
                fontSize: "19px",
              }}
            >
              مقاله ای موجود نیست
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
              className="showarti_fa"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {articleinfo.map((info, index) => (
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
                              textJustify: "inter-word",
                              textAlign: "justify",
                            }}
                            className="showall_summary"
                          >
                            {isMatch
                              ? info.summary.slice(0, 100) + "..."
                              : info.summary.slice(0, 250) + "..."}
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
      )}
    </div>
  );
};

export default Myarticle;
