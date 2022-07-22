import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../Variable";
import parse from "html-react-parser";
import ChangeNav from "./../Navbar/changeNav";
import image from "../../assets/Image/image.png";
import "./Articleinfo.css";
import Avatar from "@mui/material/Avatar";
import ReactLoading from "react-loading";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import EventIcon from "@mui/icons-material/Event";
import { useMediaQuery, useTheme } from "@mui/material";
import Footer from "../Footer/footer";

const ArticleInfo = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(780));
  const params = useParams();
  const parse = require("html-react-parser");
  const id = params.id;
  const [articleinfo, setarticleinfo] = useState([]);
  const [body, setbody] = useState("");
  const[summary,setsummary]=useState("");
  const [apiLoading, setApiLoading] = useState(false);

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/write_article/${id}`).then((response) => {
      console.log();
      setarticleinfo(response.data);
      setsummary(response.data.summary);
      if(response.data.summary.length>160)
      {
        setsummary(response.data.summary.slice(0,157)+"...")
      }    
      setbody(parse(response.data.body));
      console.log(response.data);
      setApiLoading(false);
    });
  }, []);
  useEffect(() => {
    document.body.style.background = "#F5F5F5";
    return () => {
      document.body.style.background = "white";
    };
  }, []);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <div style={{ direction: "rtl" }}>
      <ChangeNav />
      {apiLoading && (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactLoading
            type="bars"
            color="#1565C0"
            height={"20%"}
            width={"10%"}
          />
        </div>
      )}

      {!apiLoading && (
        <div
          style={{
            display: "flex",
            marginTop: "85px",
            marginBottom: "20px",
          }}
          className="Artcleinfo-head"
        >
          <div
            style={{
              marginTop: "1%",
              marginRight: "1.5%",
              marginLeft: "1.5%",
              marginBottom: "1.5%",
            }}
          >
            {!isMatch && (
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  height: "200px",
                  width: "100%",
                  backgroundColor: "#EFEFEF",
                }}
              >
                <div
                  style={{
                    p: 2,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <img
                    alt="img"
                    src={articleinfo.image}
                    style={{
                      height: "180px",
                      width: "200px",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    marginRight: "1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      color: "#262C7C",
                      fontSize: "22px",
                    }}
                  >
                    {articleinfo.title}
                  </h3>
                  <div
                    style={{
                      marginTop: "3%",
                      height: "30%",
                      marginLeft: "10px",
                      overflow: "Hidden",
                      whiteSpace: "normal",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {summary}
                  </div>
                  <div style={{ marginTop: "2%", display: "flex" }}>
                    <Link to={`/ShowProfileuser/${articleinfo.owner_id}`}>
                      <Avatar
                        alt="Remy Sharp"
                        src={articleinfo.owner_image}
                        sx={{ width: 20, height: 20 }}
                      />
                    </Link>
                    <Link
                      style={{
                        marginRight: "6px",
                        fontSize: "13px",
                        textDecoration: "none",
                        color: "#0057D9",
                      }}
                      to={`/ShowProfileuser/${articleinfo.owner_id}`}
                    >
                      {articleinfo.owner}
                    </Link>
                    <div style={{ display: "flex", marginRight: "6%" }}>
                      <EventIcon style={{ color: "gray", fontSize: "20px" }} />
                      <div style={{ fontSize: "13px", marginRight: "6px" }}>
                        {articleinfo.created_jalali}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isMatch && (
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  height: "500px",
                  width: "100%",
                  backgroundColor: "#EFEFEF",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "95%",
                  }}
                >
                  <img
                    alt="img"
                    src={articleinfo.image}
                    style={{
                      height: "250px",
                      width: "100%",
                      marginTop: "1%",
                    }}
                  />
                  <h3
                    style={{
                      color: "#262C7C",
                      fontSize: "20px",
                      marginTop: "10px",
                    }}
                  >
                    {articleinfo.title}
                  </h3>
                  <div
                    style={{
                      marginTop: "5px",
                      height: "30%",
                      marginLeft: "10px",
                      overflow: "Hidden",
                      whiteSpace: "normal",
                      textOverflow: "ellipsis",
                      fontSize: "15px",
                      textJustify: "inter-word",
                      textAlign: "justify",
                      lineHeight:"2"
                    }}
                  >
                    {summary}
                  </div>
                  <div style={{ marginTop: "0.7%", display: "flex", alignItems:"center" }}>
                    <Link to={`/ShowProfileuser/${articleinfo.owner_id}`}>
                      <Avatar
                        alt="Remy Sharp"
                        src={articleinfo.owner_image}
                        sx={{ width: 20, height: 20 }}
                      />
                    </Link>
                    <Link
                      style={{
                        marginRight: "6px",
                        fontSize: "12px",
                        textDecoration: "none",
                        color: "#0057D9",
                      }}
                      to={`/ShowProfileuser/${articleinfo.owner_id}`}
                    >
                      {articleinfo.owner}
                    </Link>
                    <div style={{ display: "flex", marginRight: "6%" }}>
                      <EventIcon style={{ color: "gray", fontSize: "20px" }} />
                      <div style={{ fontSize: "12px", marginRight: "6px" }}>
                        {articleinfo.created_jalali}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div
              style={{
                marginTop: "3%",
                textJustify: "inter-word",
                textAlign: "justify",
                lineHeight:"2"
              }}
            >
              {body}
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};
export default ArticleInfo;
