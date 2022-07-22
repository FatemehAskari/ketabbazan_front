import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import { baseUrl } from "../../Variable";
import axios from "axios";
import "./showbook.css";
import SimpleSlider from "../emtehani/emtehani";

const Showbook = () => {
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
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      >
        <h2 style={{ textAlign: "center", color: "#1565C0" }}>
          جدیدترین کتاب ها
        </h2>
        <Link
          to={`/Book`}
          style={{ textAlign: "center", textDecoration: "none", marginTop:"5px" }}
        >
          مشاهده همه{" "}
        </Link>
      </div>
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
      {!apiLoading && (
        <div
          style={{
            direction: "rtl",
            marginBottom: "50px",
          }}
        >
          <Grid
            container
            item
            sx={{
              marginTop:"10px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",

            }}
          >
            {bookinfo.map((info, index) => (
              <Grid
                className="showbook_paper"
                key={index}
                to={`/bookinfo/${info.id}`}
                component={Link}
                sx={{
                  direction: "rtl",
                }}
                style={{
                  marginTop: "10px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="complex1"
                    className="showbook_img"
                    src={info.image_url}
                    style={{
                      marginTop: "20px",
                    }}
                  />
                </div>

                <div
                  className="showbook_name"
                  variant="subtitle1"
                  component="div"
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
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Showbook;
