import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import image from "../../assets/Image/image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "./style.css";
import { Calculate } from "@mui/icons-material";
import useWindowDimensions from "./width";
import { useMediaQuery, useTheme } from "@mui/material";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {  Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

const ShownewArcrousel = () => {
  const [apiLoading, setApiLoading] = useState(false);
  const [articleinfo, setarticleinfo] = useState([]);
  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/write_article/newest_articles/`).then((response) => {
      console.log(response.data);
      setarticleinfo(response.data);
      setApiLoading(false);
    });
  }, []);

  const { height, width } = useWindowDimensions();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(480));
  SwiperCore.use([Navigation, Pagination]);
  return (
    <div style={{ marginTop: "60px" }}>
      <div
        style={{
          direction: "rtl",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#1565C0" }}>
          جدیدترین مقاله ها
        </h2>
        <Link
          to={`/Showallarticle`}
          style={{
            textAlign: "center",
            textDecoration: "none",
            marginTop: "5px",
          }}
        >
          مشاهده همه{" "}
        </Link>
        {apiLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "auto",
              marginTop: 96,
              marginBottom: 96,
            }}
          >
            <ReactLoading
              type="spinningBubbles"
              color={"#1565C0"}
              height={100}
              width={100}
            />
          </div>
        )}
      </div>
      {!apiLoading && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "5%",
              marginLeft: "5%",
            }}
          >
            <div
              style={{
                width: "97%",
                marginTop: "20px",
                direction: "rtl",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Swiper
                spaceBetween={0}
                slidesPerView={isMatch ? (width * (89 / 100) ) / 270:(width * (87 / 100) - 70) / 293}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
              >
                {articleinfo.map((info, index) => (
                  <SwiperSlide key={index}>
                    <Paper
                      key={index}
                      className="shownewarticlecro-Paper"
                      sx={{
                        direction: "rtl",
                      }}
                      style={{
                        marginTop: "10px",
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        marginBottom: "70px",
                      }}
                    >
                      <Link
                        to={{
                          pathname: `/articleinfo/${info.id}`,
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                          }}
                        >
                          <img
                            alt="img"
                            src={info.image}
                            style={{
                              width: "100%",
                              borderRadius: "5px 5px 0px 0px",
                            }}
                            className="shownewarticlecro-img"
                          />
                        </div>
                        <div
                        className="showar_title"
                          style={{
                            fontWeight: "bold",
                            marginTop: "20px",
                            marginRight: "10px",
                            color: "black",
                          }}
                        >
                          {info.title}
                        </div>
                      </Link>
                      <div
                      className="showar_sum"
                        style={{
                          marginRight: "10px",
                          marginLeft: "10px",
                          color: "#757C86",
                          overflow: "Hidden",
                          whiteSpace: "normal",
                          textOverflow: "ellipsis",
                          textJustify: "inter-word",
                          textAlign: "justify",
                          height:"100%"
                        }}
                      >
                        {articleinfo[index].summary.slice(0, 161) + "..."}
                      </div>
                      <Divider style={{ marginTop: "20px" }} />
                      <div
                        style={{
                          display: "flex",
                          marginTop: "15px",
                          marginLeft: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <div style={{ flex: 1, marginRight: "10px" }}></div>
                        <Link className="article_link" style={{ textDecoration:"none"}} to={`/ShowProfileuser/${info.owner_id}`}>
                          <Avatar
                            alt="Remy Sharp"
                            src={info.owner_image}
                            sx={{ width: 20, height: 20 }}
                          />
                          <p className="aricle_p" style={{color:"#0057D9" ,
                         marginRight: "5px", display:"inline-block"}}>{info.owner} </p>
                        </Link>
                        {/* <Link
                          style={{
                            marginRight: "5px",
                            fontSize: "13px",
                            color: "#0057D9",
                            textDecoration: "none",
                          }}
                          to={`/ShowProfileuser/${info.owner_id}`}
                        >
                          {info.owner}
                        </Link> */}
                      </div>
                    </Paper>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShownewArcrousel;
