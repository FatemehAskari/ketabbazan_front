import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import book from "../../assets/Image/book.jpg";
import { fontSize } from "@mui/system";
import { Link } from "react-router-dom";
const showbook = () => {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <div
      style={{
        direction: "rtl",
        display: "flex",
        marginRight: "50px",
        marginLeft: "30px",
        marginBottom: "50px",
      }}
    >
      <Grid
        item
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Paper
          to="/login"
          component={Link}
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            textDecoration:"none",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            direction: "rtl",
            p: 2,
            maxWidth: 180,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            marginTop: "50px",
            marginRight: "20px",
          }}
        >
          <Grid container spacing={2} sx={{ marginLeft: "40px" }}>
            <Grid item>
              <ButtonBase sx={{ width: 150, height: 150 }}>
                <Img alt="complex" src={book} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs sx={{ marginRight: "20px" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    کتاب با عشق کورت
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#757C86", fontSize: "13px" }}
                  >
                    کورت ونه گات
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: "#4DB200", fontSize: "17px" }}
                  >
                    310,000 ریال
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default showbook;