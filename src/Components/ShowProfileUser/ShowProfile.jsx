import React, { useState, useEffect } from "react";
import ChangeNav from "./../Navbar/changeNav";
import "./style.css";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Profileimg from "../../assets/Image/image.png";
import { useMediaQuery, useTheme } from "@mui/material";
import Showarticleuser from "./Writearticleuser/Showarticleuser";
import { Link, useParams } from "react-router-dom";
import { baseUrl } from "../../Variable";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactLoading from "react-loading";
import Readbook from "./ShowReadBook/ReadBook";
import './style.css'
import Footer from "../Footer/footer";

const theme = createTheme({
  direction: "rtl",
});

const ShowProfileuser = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(760));

  const params = useParams();
  const id = params.id;
  const [apiLoading, setApiLoading] = useState(false);
  const [infouser, setinfouser] = useState([]);
  const [articleuser, setarticleuser] = useState([]);
  const [bio, setbio] = useState();
  const[readbookuser,setreadbookuser]=useState([]);
  const[image,setimage]=useState();

  useEffect(() => {
    setApiLoading(true);
    axios.get(`${baseUrl}/showprofile/?id=${id}`).then((response) => {
      setbio(response.data.profile.profile.bio);
      setinfouser(response.data.profile);
      setimage(response.data.profile.profile.image);
      console.log("^^");
      setarticleuser(response.data.user_articles);
      setreadbookuser(response.data.read_books);
      console.log("@@@");
      console.log(response.data.user_articles);
      setApiLoading(false);
    });
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            marginTop: "120px",
          }}
        >
          <center style={{  }}>
            <Avatar
              alt="Remy Sharp"
              src={image}
              sx={{ width: 100, height: 100 }}
            />
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: "19px",
                width: "140px",
              }}
            >
              {infouser.nickname}
            </div>
            <div
              className="ShowProfile_bio"
              style={{ marginTop: "5px", color: "#626462",
              textOverflow: "ellipsis",
              textJustify: "inter-word",lineHeight:1.5 }}
            >
              {bio}
            </div>
          </center>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
              direction: "rtl",
            }}
          >
            <ThemeProvider theme={theme}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="مقالات"></Tab>
                <Tab label="کتاب های خوانده شده"></Tab>
              </Tabs>
            </ThemeProvider>
          </Box>

          {value === 0 && (
            <>
              <Showarticleuser articleuser={articleuser} image={image} />

            </>
          )}
          {value === 1 && (
            <>
              <Readbook  readbookuser={readbookuser}/>
            </>
          )}
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default ShowProfileuser;
