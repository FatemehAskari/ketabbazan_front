import axios from "axios";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Variable";
import ReactLoading from "react-loading";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";

export default function SimpleSlider() {
  const [apiLoading, setApiLoading] = useState(false);
  const [bookinfo, setbookinfo] = useState([]);

  useEffect(() => {
    setApiLoading(true);
    axios({
      url: `${baseUrl}/read_book/newest_books`,
    }).then((response) => {
      console.log(response.data);
      setbookinfo(response.data);
      setApiLoading(false);
    });
  }, []);

  const MouseOver = (event) => {
    event.target.style.color = "#1565C0";
  };
  const MouseOut = (event) => {
    event.target.style.color = "black";
  };

  SwiperCore.use([Navigation, Pagination]);
  return (
    <div>
      <div
        style={{
          direction: "rtl",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#1565C0" }}>
          جدیدترین کتاب ها
        </h2>
        <Link
          to={`/Book`}
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
              marginBottom: 26,
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight:"5%",
            marginLeft:"5%"
          }}
        >
          <div style={{ width: "100%", direction:"rtl" }}>
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                1500: {
                  slidesPerView: 10,
                  spaceBetween: 0,
                },
                // when window width is >= 768px
                1200: {
                  slidesPerView: 8,
                  spaceBetween: 0,
                },
                1000: {
                  slidesPerView: 6,
                  spaceBetween: 0,
                },
                800: {
                  slidesPerView: 5,
                  spaceBetween: 0,
                },

                600: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },

                560: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                400: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                470: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              {bookinfo.map((info, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={{
                      pathname: `/bookinfo/${info.id}`,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Grid
                      key={index}
                      className="showbook_paper"
                      sx={{
                        direction: "rtl",
                      }}
                      style={{
                        marginRight: "0px",
                        marginTop: "30px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "300px",
                      }}
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          alt="complex1"
                          className="showbook_img"
                          src={info.image_url}
                          style={{
                            marginTop: "20px",
                            height: "150px",
                            width: "120px",
                            boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px",
                            borderRadius: "2px",
                          }}
                        />
                      </div>

                      <div
                        className="showbook_name"
                        variant="subtitle1"
                        component="div"
                        onMouseOver={MouseOver}
                        onMouseOut={MouseOut}
                      >
                        {info.name}
                      </div>
                      <div
                        variant="body2"
                        style={{ color: "#757C86", fontSize: "13px" }}
                        className="showbook_author"
                      >
                        {info.author}
                      </div>
                    </Grid>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
