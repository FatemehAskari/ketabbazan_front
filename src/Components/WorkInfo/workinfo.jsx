import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./workinfo.css";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Readbookimage from "../../assets/Image/readbook.jpg";
import Makequestion from "../../assets/Image/makequesion.jpg";
import Makearticle from "../../assets/Image/makearticle.jpg";

const Workinfo = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div
      className="why-section"
      style={{
        direction: "rtl",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontWeight: 800,
          color: "#1565C0",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        چرا کتاب بازان؟
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          container
          rowSpacing={3}
          columnSpacing={{ xs: 0, sm: 2, md: 3 }}
        >
          <Grid item sm={0.75} xs={0}></Grid>
            <Grid className="workinfo_grid" item sm={3.5} xs={12}>
              <Paper
                className="Work_Paper"
                style={{ boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px" }}
              >
                <img
                  className="workinfo_img"
                  src={Readbookimage}
                  alt="Readbook"
                />
                <div className="workinfo_title">
                  <div
                    className="workinfo-onvan"
                    style={{ color: "#1565C0", marginTop: "10px" }}
                  >
                    مطالعه کتاب
                  </div>
                  <div
                    className="workinfo_descibe"
                    style={{ marginTop: "20px" }}
                  >
                    می تونی با استفاده از پی دی اف ویوور کتاب مورد علاقه ات را
                    مطالعه کنی{" "}
                  </div>
                </div>
              </Paper>
            </Grid>

          <Grid className="workinfo_grid" item sm={3.5} xs={12}>
            <Paper
              className="Work_Paper"
              style={{ boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px" }}
            >
              <img
                className="workinfo_img"
                src={Makequestion}
                alt="Loginpicture"
              />
              <div className="workinfo_title">
                <div
                  className="workinfo-onvan"
                  style={{ color: "#1565C0", marginTop: "10px" }}
                >
                  طراحی کوییز
                </div>
                <div className="workinfo_descibe" style={{ marginTop: "20px" }}>
                  میتونی از کتابی که مطالعه کردی سوال طرح کنی و تو کوییز شرکت
                  کنی
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid className="workinfo_grid" item sm={3.5} xs={12}>
            <Paper
              className="Work_Paper"
              style={{ boxShadow: "rgba(0, 0, 0, 0.445) 0px 2px 10px" }}
            >
              <img
                className="workinfo_img"
                src={Makearticle}
                alt="Loginpicture"
              />
              <div className="workinfo_title">
                <div
                  className="workinfo-onvan"
                  style={{ color: "#1565C0", marginTop: "10px" }}
                >
                  مقاله گذاشتن
                </div>
                <div className="workinfo_descibe" style={{ marginTop: "20px" }}>
                  می تونی درباره کتابی که دوست داری مقاله بذاری
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid item sm={0.75} xs={0}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Workinfo;
