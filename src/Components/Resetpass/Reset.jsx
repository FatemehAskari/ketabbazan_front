import React, { useState, useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { prefixer } from "stylis";
import resetpass from "../../assets/Image/resetpass (2).jpg";
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
import { useLocation, useParams } from "react-router-dom";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Resetpass = ({ history }) => {
  const location = useLocation();
  const search = location.search;
  const token = new URLSearchParams(search).get("token");
  console.log(token);
  useEffect(() => {
    document.body.style.backgroundImage = `url('${back}')`;
    return () => {
      document.body.style.background = "white";
    };
  }, []);

  const [aftersubmit, setaftersubmit] = useState(false);
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [loading, setloading] = useState(false);

  let errors = [];
  let check = true;

  const SetPassword = (event) => {
    setpassword(event.target.value);
  };

  const SetConfirmpassword = (event) => {
    setconfirmpassword(event.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);
  const handleMouseDownPassword1 = () => setShowPassword1(!showPassword1);

  if (!password) {
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
    setpassword("");
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    setaftersubmit(true);
    const user = {
      password: password,
      token:token
    };
    console.log(JSON.stringify(user));

    if (check) {
      setloading(true);
      try {
        const response = await axios.post(
          `${baseUrl}/resetpassword/confirm/`,
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
          showToast("success", "با موفقیت تغییر رمز تغییر دادی ");
          history.push('/login');
          console.log(response.data);
        }
      } catch (ex) {
        showToast('error',"مشکلی پیش امده");
        setloading(false); 
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
        <h3
          style={{ textAlign: "center", color: "#1565C0", marginBottom: "5px" }}
        >
          {" "}
          تغییر رمز عبور
        </h3>
        <img
          className="Loginform_img"
          src={resetpass}
          alt="Loginpicture"
          style={{}}
        />
        <CacheProvider value={cacheRtl}>
          <br />

          <TextField
            style={{ fontFamily: "BYekan", marginTop: "18px" }}
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
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
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
                    {showPassword1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />

          <Button
            style={{
              marginTop: "10px",
              fontFamily: "BYekan",
              fontSize: "15px",
              marginBottom: "30px",
            }}
            size="small"
            fullWidth
            variant="contained"
            type="submit"
          >
            {!loading && <span>تغییر رمز</span>}
            {loading && (
              <ReactLoading
                type="bubbles"
                color="#fff"
                className="loading-login"
              />
            )}
          </Button>
        </CacheProvider>
        <ToastContainer rtl={true} />
      </Box>
    </div>
  );
};
export default withRouter(Resetpass);
