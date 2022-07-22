import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import image from "../../assets/Image/image.png";
import ChangeNav from "./../Navbar/changeNav";
import "./style.css";
import { useMediaQuery, useTheme } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Footer from "../Footer/footer";


const ShowAllarticle = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [articleinfo, setarticleinfo] = useState([]);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(550));
  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/write_article/`).then((response) => {
      console.log(response.data);
      setarticleinfo(response.data);
      setApiLoading(false);
    });
  }, []);
  return (
    <div>
      <ChangeNav />
      {apiLoading && (
        <div style={{ direction: "rtl", marginRight: "5%", marginTop:"80px" }}>
          {Array.from(Array(10)).map((_, index) => (
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

                  <Skeleton style={{marginTop:"10px"}} variant="circular" width={25} height={25} />
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
            marginTop: "90px",
          }}
        >
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
                              height: "45px",
                              textJustify: "inter-word",
                              textAlign: "justify",
                            }}
                            className="showall_summary"
                          >
                            {isMatch
                              ? info.summary.slice(0, 62) + "..."
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
      )}
      <Footer/>
    </div>
  );
};

export default ShowAllarticle;
