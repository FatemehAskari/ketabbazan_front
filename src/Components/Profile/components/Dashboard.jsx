import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Profile.css";
import Box from "@mui/material/Box";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import AbcIcon from "@mui/icons-material/Abc";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { baseUrl } from "./../../Variable";

const Dashboard = () => {
  //const [username, setusername] = useState("");
  const [user, setuser] = useState([]);
  const [profile, setprofile] = useState([]);
  useEffect(() => {
    intialize();
  }, []);

  let token = "Token " + localStorage.getItem("token");
  console.log(token);
  const intialize = () => {
    axios
      .get(`${baseUrl}/profile/info/`, {
        headers: {
          "Content-Type": "application/json ",
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.username);
        //setusername(res.data.username);
        setuser(res.data);
        setprofile(res.data.profile);
        // setprofile(user.profile);
      });
  };

  return (
    <div>
      <div className="section">
        <div className="title">
          <p style={{ fontSize: "18px" }}>اطلاعات حساب کاربری</p>
        </div>
        <div
          className="content"
          style={{
            paddingTop: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "inherit",
          }}
        >
          <div className="right" style={{ width: "430px" }}>
            <div style={{ direction: "rtl", paddingRight: "20px" }}>
              <AccountBoxIcon style={{ float: "right" }} />
              <p
                style={{
                  float: "right",
                  marginRight: "7px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                نام مستعار : {user.nickname}{" "}
              </p>
            </div>

            <br />
            <br />

            <div style={{ direction: "rtl", paddingRight: "20px" }}>
              <EmailIcon style={{ float: "right" }} />
              <p
                style={{
                  float: "right",
                  marginRight: "7px",
                  fontWeight: "bold",
                }}
              >
                ایمیل : {user.email}{" "}
              </p>
            </div>

            <br />
            <br />

            <div style={{ direction: "rtl", paddingRight: "20px" }}>
              <AbcIcon style={{ float: "right" }} />
              <p
                style={{
                  float: "right",
                  marginRight: "7px",
                  fontWeight: "bold",
                }}
              >
                بیوگرافی : {profile.bio}{" "}
              </p>
            </div>
          </div>

          <div className="left" style={{ width: "430px" }}>
            <div style={{ direction: "rtl", paddingRight: "20px" }}>
              <CakeIcon style={{ float: "right" }} />
              <p
                style={{
                  float: "right",
                  marginRight: "7px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                تاریخ تولد : {profile.born_date}
              </p>
            </div>

            <br />
            <br />

            <div style={{ direction: "rtl", paddingRight: "20px" }}>
              <AccountCircleIcon style={{ float: "right" }} />
              <p
                style={{
                  float: "right",
                  marginRight: "7px",
                  fontWeight: "bold",
                }}
              >
                نام کاربری : {user.username}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
