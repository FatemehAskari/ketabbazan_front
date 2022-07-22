import "./Login.css";
import React, { useState, useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { prefixer } from "stylis";
import Loginimage from "../../assets/Image/Login3.webp";
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

const Login = ({ history }) => {
  const login = true;

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

  let errors = [];
  let check = true;

  const SetEmail = (event) => {
    setemail(event.target.value);
  };
  const SetPassword = (event) => {
    setpassword(event.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  if (!email) {
    errors.email = "ایمیلت را وارد کن";
    check = false;
  }
  if (!password) {
    errors.password = "رمزت را وارد کن";
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
      email_or_username: email,
      password: password,
    };
    console.log(JSON.stringify(user));

    if (check) {
      setloading(true);
      try {
        const response = await axios.post(
          `${baseUrl}/accounts/login/`,
          JSON.stringify(user),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        console.log("***");
        console.log(response.status);
        if (response.status === 200) {
          setloading(false);
          showToast("success", "با موفقیت وارد شدی");
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          if (response.data.nickname !== null) {
            localStorage.setItem("nickname", response.data.nickname);
          }
          setTimeout(() => {
            history.replace("/");
          }, 2000);
        }
      } catch (ex) {
        if (
          (ex.payload !== null && ex.payload !== undefined) ||
          ex.response.status === 400
        ) {
          setloading(false);
          showToast("error", "ایمیل یا رمز عبور اشتباه است.");
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
      <Box
        className="Loginform_form"
        component="form"
        noValidate
        style={{ fontFamily: "BYekan" }}
        onSubmit={handlesubmit}
      >
        <h3 style={{ textAlign: "center", color: "#1565C0" }}>ورود به سایت</h3>
        <img
          className="Loginform_img"
          src={Loginimage}
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

          <TextField
            style={{ fontFamily: "BYekan", marginTop: "6px" }}
            InputLabelProps={{
              style: { fontSize: 17 },
            }}
            size="small"
            dir="rtl !important"
            margin="normal"
            type={showPassword ? "text" : "password"}
            name="password"
            required
            fullWidth
            id="password"
            label="رمز عبور"
            autoComplete="password"
            value={password}
            onChange={SetPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={aftersubmit ? Boolean(errors.password) : false}
            helperText={aftersubmit ? errors.password : null}
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
            {!loading && <span>ورود</span>}
            {loading && (
              <ReactLoading
                type="bubbles"
                color="#fff"
                className="loading-login"
              />
            )}
          </Button>
          <Grid disabled item sx={{ mt: 2, mb: 1, ml: 1 }}>
            <Link
              to="/forgetpass"
              component={routerLink}
              variant="body2"
              style={{
                color: "#1565C0",
                fontSize: "15px",
                textDecorationLine: "none",
              }}
            >
              رمزت را فراموش کرده ای؟
            </Link>
          </Grid>
          <Grid item sx={{ mb: 2, ml: 1 }}>
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
              عضویت در سایت
            </Link>
          </Grid>
        </CacheProvider>
        <ToastContainer rtl={true} />
      </Box>
    </div>
  );
};
export default withRouter(Login);
