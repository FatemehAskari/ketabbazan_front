import React, { useState, useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { prefixer } from "stylis";
import Forgetimage from "../../assets/Image/forget-password.png";
import back from "../../assets/Image/background.jpg";
import { Link as routerLink, useHistory } from "react-router-dom";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import ReactLoading from "react-loading";
import { baseUrl } from "../../Variable";
import { withRouter } from "react-router-dom";
import showToast from "../../Service/toastservice";
import { InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Forgetpass = ({ history }) => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${back}')`;
    return () => {
      document.body.style.background = "white";
    };
  }, []);

  const [aftersubmit, setaftersubmit] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [flag, setflag] = useState(true);

  let errors = [];
  let check = true;

  const SetEmail = (event) => {
    setemail(event.target.value);
  };

  if (!email) {
    errors.email = "ایمیلت را وارد کن";
    check = false;
  } else if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    )
  ) {
    errors.email = " ایمیل نامعتبراست";
    check = false;
  }

  const reset = () => {
    setemail("");
    setpassword("");
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    setaftersubmit(true);
    const user = {
      email: email,
    };
    console.log(JSON.stringify(user));

    if (check) {
      setloading(true);
      try {
        const response = await axios.post(
          `${baseUrl}/resetpassword/`,
          user
        );
        console.log("***");
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          setloading(false);
          setflag(false);
        }
      } catch (ex) {
        if (
          (ex.payload !== null && ex.payload !== undefined) ||
          ex.response.status === 400
        ) {
          setloading(false);
          showToast("error", "چنین ایمیلی ثبت نشده است.");
        } else {
          setloading(false);
          console.log(ex);
          showToast("error", "مشکلی پیش آمده است");
        }
      }
    }
  };

  return (
    <div className="Loginform">
      {flag && (
        <Box
          className="Forgetform_form"
          component="form"
          noValidate
          style={{ fontFamily: "BYekan" }}
          onSubmit={handlesubmit}
        >
          <h3 style={{ textAlign: "center", color: "#1565C0" }}>
            ارسال ایمیل
          </h3>
          <img
            className="Loginform_img"
            src={Forgetimage}
            alt="Loginpicture"
            style={{}}
          />
          <CacheProvider value={cacheRtl}>
            <br />
            <TextField
              style={{ fontFamily: "BYekan" }}
              InputLabelProps={{
                style: { fontSize: 17, fontFamily: "BYekan" },
              }}
              size="small"
              dir="rtl !important"
              margin="normal"
              required
              fullWidth
              id="email"
              label="ایمیل"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={SetEmail}
              error={aftersubmit ? Boolean(errors.email) : false}
              helperText={aftersubmit ? errors.email : null}
            />
            <br />

            <Button
              style={{
                marginTop: "10px",
                fontFamily: "BYekan",
                fontSize: "15px",
              }}
              size="small"
              fullWidth
              variant="contained"
              type="submit"
            >
              {!loading && <span>ارسال</span>}
              {loading && (
                <ReactLoading
                  type="bubbles"
                  color="#fff"
                  className="loading-login"
                />
              )}
            </Button>
            <Grid item sx={{ mb: 2, ml: 1, mt: 1.3 }}>
              <Link
                to="/signup"
                component={routerLink}
                variant="body2"
                style={{
                  color: "#1565C0",
                  fontSize: "15px",
                  textDecorationLine: "none",
                }}
              >
                ثبت نام نکردی؟
              </Link>
            </Grid>
          </CacheProvider>
          <ToastContainer rtl={true} />
        </Box>
      )}
      {!flag && (
        <div
          style={{
            backgroundColor: "white",
            textJustify: "inter-word",
            textAlign: "justify",
            lineHeight: "2",
            width:"300px",
            height:"110px",
            padding:"15px",
            borderRadius:"10px"
          }}
        >
          ایمیل تغییر گذرواژه ارسال گردید. اگر ظرف چند دقیقه ایمیل را دریافت
          نکردید، پوشه اسپم خود را بررسی کنید.
        </div>
      )}
    </div>
  );
};
export default withRouter(Forgetpass);
