import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Nav";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import TextField from "@mui/material/TextField";
import {
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./article.css";
import article from "../../assets/Image/article.png";
import "@ckeditor/ckeditor5-build-classic/build/translations/fa";
import SendIcon from "@mui/icons-material/Send";
//  import TextPartLanguage from "@ckeditor/ckeditor5-language/src/textpartlanguage";
import Box from "@mui/material/Box";
import showToast from "../../Service/toastservice";
import { baseUrl } from "../../Variable";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import parse from "html-react-parser";
import { Link, useParams, useHistory } from "react-router-dom";
import ChangeNav from "./../Navbar/changeNav";
import ReactLoading from "react-loading";
import Stack from "@mui/material/Stack";
import Footer from "../Footer/footer";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Article = () => {
  const parse = require("html-react-parser");
  const theme = useTheme();
  const [writearticle, setwritearticle] = useState("");
  const [file, setFile] = useState(article);
  const [changeImage, setChangeImage] = useState(false);
  const [postimage, setpostimage] = useState(null);
  const [titlearticle, settitlearticle] = useState("");
  const [summary, setsummary] = useState("");
  const [aftersubmit, setaftersubmit] = useState(false);
  const [addwritearticle, setaddwritearticle] = useState("");
  const [loading, setloading] = useState(false);
  const [bookname, setbookname] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios.get(`${baseUrl}/read_book/info/${id}`).then((response) => {
      setbookname(response.data.book_info.name);
      console.log(response.data.book_info.name);
    });
  }, []);

  const params = useParams();
  const id = params.id;

  let errors = [];
  let check = true;

  if (!titlearticle) {
    errors.titlearticle = "عنوان مقاله را حتما باید وارد کنی";
    check = false;
  }
  if (!summary) {
    errors.summary = "باید یک پیش نمایش از مقاله را وارد کنی";
    check = false;
  } else if (summary.length < 30) {
    errors.summary = "پیش نمایش باید حداقل 30 کلمه باشد.";
    check = false;
  } 
  if (writearticle.length < 100) {
    errors.writearticle = "مقدار نوشته شده بسیار کم است.";
    check = false;
  }
  console.log(summary.length);

  const handlesubmit = async (event) => {
    event.preventDefault();
    setaftersubmit(true);
    const formdata = new FormData();
    formdata.append("title", titlearticle);
    formdata.append("summary", summary);
    formdata.append("book", id);
    if (postimage !== null) {
      formdata.append("image", postimage.image[0]);
    }
    formdata.append("body", writearticle);
    const articlefield = {
      title: titlearticle,
      summary: summary,
      book: id,
    };
    console.log(JSON.stringify(formdata));
    const token = "Token " + localStorage.getItem("token");
    console.log(token);
    if (check) {
      setloading(true);
      try {
        const response = await axios.post(
          `${baseUrl}/write_article/create_article/`,
          formdata,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        console.log(response.status + "*");
        console.log(response.data);
        if (response.status === 200) {
          setloading(false);
          showToast("success", "با موفقیت مقاله را گذاشتی");
          console.log(response.data);
          setTimeout(() => {
            history.replace(`/bookinfo/${id}`);
          }, 2000);
        }
      } catch (ex) {
        setloading(false);
        console.log(ex);
        showToast("error", "مشکلی پیش آمده است");
      }
    }
  };
  const SetTitleArticle = (event) => {
    settitlearticle(event.target.value);
  };
  const SetSummary = (event) => {
    setsummary(event.target.value);
  };
  const isMatch = useMediaQuery(theme.breakpoints.down(1100));
  const checkpx = useMediaQuery(theme.breakpoints.down(900));

  console.log(isMatch);

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setChangeImage(true);
    console.log(e.target.files[0]);
    setpostimage({
      image: e.target.files,
    });
    // console.log(postimage.image[0]);
  };
  const SetwriteArticle = (event, editor) => {
    const data = editor.getData();
    setwritearticle(data);
    console.log(writearticle);
    console.log(writearticle.length);
  };

  return (
    <div style={{ direction: "rtl" }}>
      <ChangeNav />
      <Grid
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CacheProvider value={cacheRtl}>
          <Grid style={{ marginRight: "7vw", marginLeft: "7vw" }}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              ارسال مقاله جدید
            </Typography>
            <Typography style={{ color: "#949494" }}>
              از طریق تکمیل این فرم میتوانید مقاله ای درباره کتاب{" "}
              <span style={{ fontWeight: "bold" }}>{bookname}</span> بنویسید.
            </Typography>
            <Box
              component="form"
              noValidate
              style={{ fontFamily: "BYekan" }}
              onSubmit={handlesubmit}
            >
              <Grid
                container
                columnSpacing={isMatch && !checkpx ? 6 : checkpx ? 2 : 9}
                rowSpacing={1}
              >
                <Grid
                  style={{
                    marginTop: "5vh",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  item
                  md={8}
                  xs={12}
                >
                  <TextField
                    InputLabelProps={{
                      style: {
                        fontSize: 17,
                        fontFamily: "BYekan",
                        width: "50vw",
                      },
                    }}
                    size="small"
                    dir="rtl !important"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="عنوان مقاله"
                    name="titlearticle"
                    autoFocus
                    value={titlearticle}
                    onChange={SetTitleArticle}
                    error={aftersubmit ? Boolean(errors.titlearticle) : false}
                    helperText={aftersubmit ? errors.titlearticle : null}
                  />
                  <TextField
                    variant="outlined"
                    InputLabelProps={{
                      style: { width: "50vw" },
                    }}
                    rows={3}
                    id="outlined-basic"
                    label="پیش نمایش مقاله"
                    multiline
                    dir="rtl !important"
                    margin="normal"
                    value={summary}
                    onChange={SetSummary}
                    error={aftersubmit ? Boolean(errors.summary) : false}
                    helperText={aftersubmit ? errors.summary : null}
                  />
                  <div
                    style={{
                      marginTop: "18px",
                      marginBottom: "20px",
                      direction: "rtl",
                    }}
                  >
                    <CKEditor
                      editor={ClassicEditor}
                      onChange={SetwriteArticle}
                      data={addwritearticle}
                      config={{ language: "fa" }}
                    />
                    {aftersubmit ? (
                      <p style={{ color: "rgb(211,47,47)", fontSize: "12.5px", marginRight:"15px" }}>
                        {errors.writearticle}
                      </p>
                    ) : null}
                  </div>
                </Grid>
                {!checkpx ? (
                  <Grid
                    style={{
                      marginTop: "8vh",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    item
                    md={4}
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Button
                        variant="contained"
                        style={{
                          color: "#1565C0",
                          border: "2px solid #1565C0",
                          backgroundColor: "#fff",
                          fontWeight: 800,
                          width: "118px",
                          marginRight: "calc(100% - 118px)",
                          marginTop: "-13vh",
                          marginBottom: "4vh",
                        }}
                        type="submit"
                      >
                        {!loading && (
                          <Stack direction="row" alignItems="center" gap={1}>
                            <SendIcon style={{ fontSize: "small" }} />
                            ارسال مقاله
                          </Stack>
                        )}
                        {loading && (
                          <ReactLoading
                            type="bubbles"
                            color="#1565C0"
                            className="loading-login"
                          />
                        )}
                      </Button>
                      <Typography
                        style={{ color: "#949494", marginBottom: "1vh" }}
                      >
                        تصویر مقاله
                      </Typography>
                      <img
                        src={file}
                        alt="imgarticle"
                        style={{
                          height: "30vh",
                          width: "100%",
                          borderRadius: "5px",
                        }}
                      />
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <Button
                          variant="contained"
                          component="label"
                          sx={{
                            color: "white",
                            width: "100px",
                            mt: 2,
                          }}
                        >
                          <p style={{ fontSize: "0.8rem" }}>انتخاب عکس</p>
                          <input
                            type="file"
                            hidden
                            onChange={handleChange}
                            accept=".jpg,.jpeg,.png"
                          />
                        </Button>
                      </div>
                    </div>
                  </Grid>
                ) : (
                  <>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                      item
                      xs={12}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={file}
                            alt="imgarticle"
                            style={{
                              height: "30vh",
                              width: "300px",
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            component="label"
                            sx={{
                              color: "white",
                              width: "100px",
                              mt: 1,
                            }}
                          >
                            <p style={{ fontSize: "0.8rem" }}>انتخاب عکس</p>
                            <input
                              type="file"
                              hidden
                              onChange={handleChange}
                              accept=".jpg,.jpeg,.png"
                            />
                          </Button>
                        </div>
                        <Button
                          variant="contained"
                          style={{
                            color: "#1565C0",
                            border: "2px solid #1565C0",
                            backgroundColor: "#fff",
                            fontWeight: 800,
                            marginBottom: "4vh",
                            marginTop: "4vh",
                          }}
                          fullWidth
                          type="submit"
                        >
                          {!loading && (
                            <Stack direction="row" alignItems="center" gap={1}>
                              <SendIcon style={{ fontSize: "small" }} />
                              ارسال مقاله
                            </Stack>
                          )}
                          {loading && (
                            <ReactLoading
                              type="bubbles"
                              color="#1565C0"
                              className="loading-login"
                            />
                          )}
                        </Button>
                      </div>
                    </Grid>
                  </>
                )}
              </Grid>
            </Box>
          </Grid>
        </CacheProvider>
      </Grid>
      <ToastContainer rtl={true} />
      <Footer/>
    </div>
  );
};

export default Article;
