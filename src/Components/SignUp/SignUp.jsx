import React, { useState, useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { prefixer } from "stylis";
import SignUpimg from "../../assets/Image/signup2.jpg";
import { Link as routerLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import { baseUrl } from "../../Variable";
import axios from "axios";
import { withRouter } from "react-router-dom";
import ReactLoading from "react-loading";
import showToast from "../../Service/toastservice";
import { InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import back from "../../assets/Image/background.jpg";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const SignUp = ({ history }) => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${back}')`;
    return () => {
      document.body.style.background = "white";
    };
  }, []);
  const [aftersubmit, setaftersubmit] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [loading, setloading] = useState(false);
  let errors = [];
  let check = true;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [showPassword1, setShowPassword1] = useState(false);
  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
  const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);

  const Setname = (event) => {
    setname(event.target.value);
  };
  const SetEmail = (event) => {
    setemail(event.target.value);
  };
  const SetPassword = (event) => {
    setpassword(event.target.value);
  };
  const SetConfirmpassword = (event) => {
    setconfirmpassword(event.target.value);
  };
  
  if (!email) {
    errors.email = "ایمیلت را وارد کن";
    check = false;
  } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
    errors.email = " ایمیل نامعتبراست";
    check = false;
  } else if (!password) {
    errors.password = "رمزت را وارد کن";
    check = false;
  } else if (password.length < 4) {
    errors.password = "رمز عبور نباید کمتر از 4 حرف باشد";
    check = false;
  } else if (!confirmpassword) {
    errors.confirmpassword = "تکرار رمز عبور را وارد کن.";
    check = false;
  } else if (confirmpassword !== password) {
    errors.confirmpassword = "تکرار رمز عبور و رمز عبور یکی نیستند.";
    check = false;
  }

  const reset = () => {
    setname("");
    setemail("");
    setpassword("");
    setconfirmpassword("");
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    setaftersubmit(true);
    let user = "";
    if (name !== "") {
      user = {
        email: email,
        password: password,
        nickname: name,
      };
    } else {
      user = {
        email: email,
        password: password,
      };
    }
    console.log(user);

    if (check) {
      setloading(true);
      try {
        const response = await axios.post(
          `${baseUrl}/accounts/signup/`,
          JSON.stringify(user),
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        console.log(response.data);
        if (response.status === 201) {
          setloading(false);
          showToast("success", "با موفقیت ثبت نام کردی.");
          setTimeout(() => {
            history.replace("/login");
          }, 2000);
        }
      } catch (ex) {
        if (ex.response.status === 400) {
          setloading(false);
          showToast("error", "این ایمیل قبلا ثبت شده است.");
        } else {
          setloading(false);
          console.log(ex);
          showToast("error", "مشکلی پیش امده است.");
        }
      }
    }
  };

  return (
    <div className="SignUpform">
      <Box
        className="SignUpform_form"
        component="form"
        noValidate
        style={{ fontFamily: "BYekan" }}
        onSubmit={handlesubmit}
      >
        <h3 style={{ textAlign: "center", color: "#1565C0", marginTop: "0px" }}>
          ثبت نام در سایت
        </h3>
        <img
          className="SignUpform_img"
          src={SignUpimg}
          alt="Signuppicture"
          style={{
          }}
        />
        <CacheProvider value={cacheRtl}>
          <br />
          <TextField
            style={{ fontFamily: "BYekan", marginTop: "19px" }}
            InputLabelProps={{
              style: { fontSize: 17, fontFamily: "BYekan" },
            }}
            size="small"
            dir="rtl !important"
            margin="normal"
            fullWidth
            id="name"
            label="نام مستعار"
            name="name"
            value={name}
            onChange={Setname}
            autoComplete="name"
            autoFocus
            error={aftersubmit ? Boolean(errors.name) : false}
            helperText={aftersubmit ? errors.name : null}
          />
          <br />

          <TextField
            style={{ fontFamily: "BYekan", marginTop: "6px" }}
            InputLabelProps={{
              style: { fontSize: 17 },
            }}
            size="small"
            dir="rtl !important"
            margin="normal"
            name="email"
            required
            fullWidth
            id="email"
            label="ایمیل"
            value={email}
            onChange={SetEmail}
            autoComplete="email"
            error={aftersubmit ? Boolean(errors.email) : false}
            helperText={aftersubmit ? errors.email : null}
          />
          <br />
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
              label=" رمز عبور"
              value={password}
              onChange={SetPassword}
              autoComplete="password"
              error={aftersubmit ? Boolean(errors.password) : false}
              helperText={aftersubmit ? errors.password : null}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextField
              style={{
                fontFamily: "BYekan",
                marginTop: "6px",
                marginRight: "2px",
              }}
              size="small"
              InputLabelProps={{
                style: { fontSize: 17 },
              }}
              dir="rtl !important"
              margin="normal"
              type={showPassword1 ? "text" : "password"}
              name="password2"
              required
              fullWidth
              id="password2"
              label="تکرار رمز عبور"
              value={confirmpassword}
              onChange={SetConfirmpassword}
              autoComplete="password2"
              error={aftersubmit ? Boolean(errors.confirmpassword) : false}
              helperText={aftersubmit ? errors.confirmpassword : null}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword1}
                    >
                      {showPassword1 ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br/>
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
            {!loading && <span>ثبت نام</span>}
            {loading && (
              <ReactLoading
                type="bubbles"
                color="#fff"
                className="loading-signup"
              />
            )}
          </Button>
          <Grid item sx={{ mt: 2.2, mb: 1.6, ml: 1 }}>
            <Link
              to="/login"
              component={routerLink}
              variant="body2"
              style={{
                color: "#1565C0",
                fontSize: "15px",
                textDecorationLine: "none",
              }}
            >
              ثبت نام کردی؟
            </Link>
          </Grid>
        </CacheProvider>
        <ToastContainer rtl={true}/>
      </Box>
    </div>
  );
};
export default withRouter(SignUp);
