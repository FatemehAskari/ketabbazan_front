import React, { useState, useEffect } from "react";
import ChangeNav from "./../Navbar/changeNav";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { InputAdornment } from "@mui/material";
import { Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";
import "./quiz.css";
import { baseUrl } from "../../Variable";
import axios from "axios";
import showToast from "../../Service/toastservice";
import { ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactLoading from "react-loading";
import Footer from "../Footer/footer";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme1 = createTheme({
  direction: "rtl",
});

const DesignQuiz = () => {
  const theme = useTheme();
  const checkpx = useMediaQuery(theme.breakpoints.down(900));
  const isMatch450 = useMediaQuery(theme.breakpoints.down(650));
  const [question, setquesion] = useState("");
  const [test1, settest1] = useState("");
  const [test2, settest2] = useState("");
  const [test3, settest3] = useState("");
  const [test4, settest4] = useState("");
  const [correctans, setcorrectans] = useState("1");
  const [aftersubmit, setaftersubmit] = useState(false);
  const [namebook, setnamebook] = useState("");
  const [namebook2, setnamebook2] = useState("");
  const [listbook, setlistbook] = useState([]);
  const [clickbtn, setclickbtn] = useState(false);
  const [pagenum2, setpagenum2] = useState(1);
  const [numpage2, setnumpage2] = useState(1);
  const [showboxsearch, setshowboxsearch] = useState(true);
  const [idbook, setidbook] = useState("");
  const [namebookquiz, setnamebookquiz] = useState("");
  const [imgbookquiz, setimgbookquiz] = useState("");
  const [authorbookquiz, setauthorbookquiz] = useState("");
  const [summarybookquiz, setsummarybookquiz] = useState("");
  const [clickbtnsearch, setclickbtnsearch] = useState(false);
  const [apiloadingbook, setapiloadingbook] = useState(false);
  const [apiloadingsubmit, setapiloadingsubmit] = useState(false);
  const [readbook, setreadbook] = useState(false);
  const [p, setp] = useState(false);

  const handlePagination2 = (e, p) => {
    setpagenum2(p);
    console.log("&&");
    console.log(p);
    setapiloadingbook(true);
    axios(`${baseUrl}/search/quizbook/?q=${namebook2}&page=${p}`).then(
      (response) => {
        console.log(response.data);
        setlistbook(response.data);
        console.log("---");
        setapiloadingbook(false);
      }
    );
  };

  const MouseOver = (event) => {
    event.target.style.color = "#1565C0";
  };
  const MouseOut = (event) => {
    event.target.style.color = "black";
  };

  let errors = [];
  let check = true;
  if (!question) {
    check = false;
    errors.question = " سوال نباید خالی باشد.";
  } else if (question.length < 10) {
    check = false;
    errors.question = "  نباید از 10 کاراکتر کمتر باشد.";
  }
  if (!test1) {
    check = false;
    errors.test1 = "  گزینه نباید خالی باشد.";
  }
  if (!test2) {
    check = false;
    errors.test2 = "  گزینه نباید خالی باشد.";
  }
  if (!test3) {
    check = false;
    errors.test3 = " گزینه نباید خالی باشد.";
  }
  if (!test4) {
    check = false;
    errors.test4 = "صورت سوال گزینه نباید خالی باشد.";
  }
  if (listbook.length === 0 && clickbtnsearch && !apiloadingbook) {
    errors.showbook = "این کتاب موجود نیست.";
  } else if (p === false && aftersubmit) {
    check = false;
    errors.showbook = "باید حتما یک کتاب را برای طرح سوال انتخاب کنی";
  }

  const SetCorrectans = (event) => {
    setcorrectans(event.currentTarget.value);
  };
  const SetQuestion = (event) => {
    setquesion(event.target.value);
  };

  const SetTest1 = (event) => {
    settest1(event.target.value);
  };

  const SetTest2 = (event) => {
    settest2(event.target.value);
  };

  const SetTest3 = (event) => {
    settest3(event.target.value);
  };

  const SetTest4 = (event) => {
    settest4(event.target.value);
  };

  const handlesentinfo = async () => {
    setaftersubmit(true);

    const info = {
      question: question,
      op1: test1,
      op2: test2,
      op3: test3,
      op4: test4,
      ans: correctans,
      book: idbook,
    };
    console.log(info);
    const token = "Token " + localStorage.getItem("token");
    if (check) {
      setapiloadingsubmit(true);
      try {
        const response = await axios.post(`${baseUrl}/quiz/propose/`, info, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        console.log(response.status);
        console.log(response);
        if (response.status === 201) {
          showToast("success", "با موفقیت سوالت را گذاشتی ");
          setapiloadingsubmit(false);
          setquesion("");
          settest1("");
          settest2("");
          settest3("");
          settest4("");
          setcorrectans("1");
          setaftersubmit(false);
          setnamebook("");
          setnamebook2("");
          setlistbook([]);
          setclickbtn(false);
          setpagenum2(1);
          setnumpage2(1);
          setshowboxsearch(true);
          setidbook("");
          setnamebookquiz("");
          setimgbookquiz("");
          setauthorbookquiz("");
          setsummarybookquiz("");
          setclickbtnsearch(false);
          setapiloadingbook(false);
        }
      } catch (ex) {
        showToast("error", "مشکلی پیش آمده است");
      }
    }
  };

  const handlesearchbook = () => {
    setclickbtnsearch(true);
    setpagenum2(1);
    console.log("**");
    console.log(pagenum2);
    setnamebook2(namebook);
    console.log("**");
    setapiloadingbook(true);
    axios({
      url: `${baseUrl}/search/quizbook/?q=${namebook}&page=page_count`,
    }).then((response) => {
      setnumpage2(response.data);
      console.log(response.data);
    });
    axios(`${baseUrl}/search/quizbook/?q=${namebook}&page=${1}`).then(
      (response) => {
        console.log(response.data);
        setlistbook(response.data);
        setapiloadingbook(false);
      }
    );

    setclickbtn(true);
  };

  const handleaddbookquiz = async (id, namebook3, img, author, summary) => {
    const token = "Token " + localStorage.getItem("token");
    setreadbook(true);
    let x = false;
    axios
      .get(`${baseUrl}/accounts/has_read/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        showToast("success", "کتاب با موفقیت ثبت شد.");
        x = true;
        setp(true);
        setshowboxsearch(false);
        setidbook(id);
        console.log("&&&");
        console.log(id);
        console.log("&&&");
        setnamebookquiz(namebook3);
        console.log(img);
        setimgbookquiz(img);
        setauthorbookquiz(author);
        setsummarybookquiz(summary);
        setnamebook(namebook3);
        // setpagenum2(1);
        // setnumpage2(1);
        setreadbook(false);
      })
      .catch((error) => {
        showToast("error", "وضعیت شما در این کتاب خواندن نیست");
        setreadbook(false);
      });
  };

  const handlechangebookquiz = () => {
    setp(false);
    setshowboxsearch(true);
    setidbook("");
  };

  return (
    <div style={{ direction: "rtl" }}>
      <ChangeNav />
      <CacheProvider value={cacheRtl}>
        <div style={{ marginTop: "90px" }}>
          <Grid container>
            <Grid item md={0.4} xs={0.2}></Grid>
            <Grid item md={5.3} xs={11.4} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "24px",
                }}
              >
                <AddIcon style={{ fontWeight: "bold", marginTop: "8px" }} />
                <span> {"    "}</span>
                <span>طرح سوال</span>
              </div>
              <Divider style={{ marginTop: "25px", width: "88vw" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                {showboxsearch && (
                  <div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <TextField
                        variant="outlined"
                        style={{ width: "50%" }}
                        size="small"
                        id="outlined-basic"
                        label="نام کتاب"
                        dir="rtl !important"
                        margin="normal"
                        value={namebook}
                        onChange={(e) => setnamebook(e.target.value)}
                        error={
                          clickbtnsearch || aftersubmit
                            ? Boolean(errors.showbook)
                            : false
                        }
                        helperText={
                          clickbtnsearch || aftersubmit ? errors.showbook : null
                        }
                      />
                      <Button
                        style={{
                          height: "38px",
                          marginTop: "16px",
                          marginRight: "10px",
                          width: "70px",
                        }}
                        size="small"
                        variant="contained"
                        type="submit"
                        onClick={handlesearchbook}
                      >
                        سرچ
                      </Button>
                    </div>
                    {apiloadingbook && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "auto",
                          marginTop: 96,
                          marginBottom: 96,
                        }}
                      >
                        <ReactLoading
                          type="spinningBubbles"
                          color={"#1565C0"}
                          height={50}
                          width={50}
                        />
                      </div>
                    )}
                    {!apiloadingbook && (
                      <>
                        {listbook.length > 0 && (
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {listbook.map((info, index) => (
                              <div style={{ width: "100%" }}>
                                <Grid
                                  style={{
                                    marginTop: "2%",
                                    display: "flex",
                                    textDecoration: "none",
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      height: "135px",
                                      width: "100%",
                                    }}
                                  >
                                    <Grid
                                      key={index}
                                      to={`/bookinfo/${info.id}`}
                                      component={Link}
                                    >
                                      <img
                                        src={info.image_url}
                                        alt="img"
                                        style={{
                                          width: "105px",
                                          height: "100%",
                                          borderRadius: "2px",
                                        }}
                                      />
                                    </Grid>
                                    <div style={{ width: "100%" }}>
                                      <div
                                        style={{
                                          display: "flex",
                                          width: "100%",
                                        }}
                                      >
                                        <Grid
                                          style={{
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                            marginRight: "10px",
                                            color: "black",
                                            width: "100%",
                                            textDecoration: "none",
                                          }}
                                          key={index}
                                          to={`/bookinfo/${info.id}`}
                                          component={Link}
                                          onMouseOver={MouseOver}
                                          onMouseOut={MouseOut}
                                        >
                                          {info.name}
                                        </Grid>
                                        <div style={{}}>
                                          <Button
                                            style={{
                                              height: "25px",
                                              marginRight: "10px",
                                              width: "50px",
                                              fontSize: "10px",
                                            }}
                                            size="small"
                                            variant="contained"
                                            type="submit"
                                            onClick={() =>
                                              handleaddbookquiz(
                                                info.id,
                                                info.name,
                                                info.image_url,
                                                info.author,
                                                info.summary
                                              )
                                            }
                                          >
                                            <span style={{ fontSize: "10px" }}>
                                              اضافه
                                            </span>
                                          </Button>
                                        </div>
                                      </div>

                                      <Grid
                                        style={{
                                          marginTop: "3px",
                                          fontSize: "13px",
                                          marginRight: "10px",
                                          color: "#757C86",
                                          textDecoration: "none",
                                        }}
                                      >
                                        {"نویسنده: " + info.author}
                                      </Grid>

                                      <div
                                        style={{
                                          marginTop: "6px",
                                          marginRight: "10px",
                                          color: "#757C86",
                                          overflow: "Hidden",
                                          whiteSpace: "normal",
                                          textOverflow: "ellipsis",
                                          height: "75px",
                                          lineHeight: 1.5,
                                        }}
                                        className="DesignQuiz_summarybook"
                                      >
                                        {isMatch450
                                          ? info.summary.slice(0, 89) + "..."
                                          : info.summary.slice(0, 120) + "..."}
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                                <Divider
                                  style={{
                                    color: "red",
                                    width: "100%",
                                    marginTop: "2%",
                                  }}
                                />
                              </div>
                            ))}
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "15px",
                                direction: "rtl",
                              }}
                            >
                              <ThemeProvider theme={theme1}>
                                {numpage2 > 1 && (
                                  <Pagination
                                    count={numpage2}
                                    onChange={handlePagination2}
                                    size="small"
                                    page={pagenum2}
                                  />
                                )}
                              </ThemeProvider>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
                {!showboxsearch && (
                  <div style={{ width: "100%" }}>
                    <Grid
                      style={{
                        marginTop: "2%",
                        display: "flex",
                        textDecoration: "none",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          height: "135px",
                          width: "100%",
                        }}
                      >
                        <Grid>
                          <img
                            src={imgbookquiz}
                            alt="img"
                            style={{
                              width: "105px",
                              height: "100%",
                              borderRadius: "2px",
                            }}
                          />
                        </Grid>
                        <div style={{ width: "100%" }}>
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <Grid
                              style={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                marginRight: "10px",
                                color: "black",
                                width: "100%",
                                textDecoration: "none",
                              }}
                              onMouseOver={MouseOver}
                              onMouseOut={MouseOut}
                            >
                              {namebookquiz}
                            </Grid>
                            <div style={{}}>
                              <Button
                                style={{
                                  height: "25px",
                                  marginRight: "10px",
                                  width: "50px",
                                  fontSize: "10px",
                                }}
                                size="small"
                                variant="contained"
                                type="submit"
                                onClick={handlechangebookquiz}
                              >
                                <span style={{ fontSize: "10px" }}>تغییر</span>
                              </Button>
                            </div>
                          </div>

                          <Grid
                            style={{
                              marginTop: "3px",
                              fontSize: "13px",
                              marginRight: "10px",
                              color: "#757C86",
                              textDecoration: "none",
                            }}
                          >
                            {"نویسنده: " + authorbookquiz}
                          </Grid>

                          <div
                            style={{
                              marginTop: "6px",
                              marginRight: "10px",
                              color: "#757C86",
                              overflow: "Hidden",
                              whiteSpace: "normal",
                              textOverflow: "ellipsis",
                              height: "75px",
                              lineHeight: 1.5,
                            }}
                            className="DesignQuiz_summarybook"
                          >
                            {isMatch450
                              ? summarybookquiz.slice(0, 100) + "..."
                              : summarybookquiz.slice(0, 130) + "..."}
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </div>
                )}
                <TextField
                  variant="outlined"
                  style={{ width: "100%", marginTop: "16px" }}
                  rows={3.2}
                  id="outlined-basic"
                  label="صورت سوال"
                  multiline
                  dir="rtl !important"
                  value={question}
                  onChange={SetQuestion}
                  error={aftersubmit ? Boolean(errors.question) : false}
                  helperText={aftersubmit ? errors.question : null}
                />

                <FormControl style={{ width: "100%" }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                    value={correctans}
                    onChange={SetCorrectans}
                  >
                    <TextField
                      id="outlined-basic"
                      placeholder="گزینه اول"
                      variant="outlined"
                      size="small"
                      style={{
                        width: "100%",
                        borderRadius: "20%",
                        marginTop: "16px",
                      }}
                      value={test1}
                      onChange={SetTest1}
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 10,
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControlLabel
                              value="1"
                              control={<Radio />}
                              label=""
                              style={{}}
                            />
                          </InputAdornment>
                        ),
                      }}
                      error={aftersubmit ? Boolean(errors.test1) : false}
                      helperText={aftersubmit ? errors.test1 : null}
                    />

                    <TextField
                      id="outlined-basic"
                      placeholder="گزینه دوم"
                      variant="outlined"
                      size="small"
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 100,
                        },
                      }}
                      value={test2}
                      onChange={SetTest2}
                      style={{
                        width: "100%",
                        borderRadius: "20%",
                        marginTop: "16px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControlLabel
                              value="2"
                              control={<Radio />}
                              label=""
                            />
                          </InputAdornment>
                        ),
                      }}
                      error={aftersubmit ? Boolean(errors.test2) : false}
                      helperText={aftersubmit ? errors.test2 : null}
                    />

                    <TextField
                      id="outlined-basic"
                      placeholder="گزینه سوم"
                      variant="outlined"
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 100,
                        },
                      }}
                      value={test3}
                      onChange={SetTest3}
                      size="small"
                      style={{
                        width: "100%",
                        borderRadius: "20%",
                        marginTop: "16px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControlLabel
                              value="3"
                              control={<Radio />}
                              label=""
                              //   style={{backgroundColor:"blue"}}
                            />
                          </InputAdornment>
                        ),
                      }}
                      error={aftersubmit ? Boolean(errors.test3) : false}
                      helperText={aftersubmit ? errors.test3 : null}
                    />

                    <TextField
                      id="outlined-basic"
                      placeholder="گزینه چهارم"
                      variant="outlined"
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 100,
                        },
                      }}
                      value={test4}
                      onChange={SetTest4}
                      size="small"
                      style={{
                        width: "100%",
                        borderRadius: "20%",
                        marginTop: "16px",
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControlLabel
                              value="4"
                              control={<Radio />}
                              label=""
                            />
                          </InputAdornment>
                        ),
                      }}
                      error={aftersubmit ? Boolean(errors.test4) : false}
                      helperText={aftersubmit ? errors.test3 : null}
                    />
                  </RadioGroup>
                </FormControl>
                <Button
                  style={{
                    height: "38px",
                    marginTop: "16px",
                    width: "85px",
                  }}
                  size="small"
                  variant="contained"
                  type="submit"
                  onClick={handlesentinfo}
                >
                  {!apiloadingsubmit && <span>ثبت</span>}
                  {apiloadingsubmit && (
                    <ReactLoading
                      type="bubbles"
                      color="#fff"
                      className="loading-login"
                    />
                  )}
                </Button>
              </div>
            </Grid>
            <Grid item md={0.4} xs={0}></Grid>
            <Grid item md={5} style={{}}>
              <div className="designquiz_des" style={{}}>
                <div style={{ height: "500px", width: "100%" }}>
                  <div style={{ fontSize: "20px" }}>سرچ کتاب</div>
                  <div
                    style={{
                      color: "#323232",
                      fontSize: "15.5px",
                      marginTop: "10px",
                    }}
                  >
                    لطفا کتابی را که میخواهید از آن سوال طرح کنید سرچ و انتحاب
                    کنید.
                  </div>

                  <div style={{ marginTop: "25px" }}>
                    <div style={{ fontSize: "20px" }}> اصول نگارشی</div>

                    <div
                      style={{
                        color: "#323232",
                        fontSize: "15.5px",
                        marginTop: "10px",
                        marginLeft: "10px",
                        textJustify: "inter-word",
                        textAlign: "justify",
                        lineHeight: "2",
                      }}
                    >
                      رعایت اصول نگارش یکی از کلیدی ترین و مهمترین مواردی است که
                      باید رعایت کنید. اگر اصول نگارش را رعایت نکنید سوال هرچقدر
                      قوی باشد، جذابیت خود را از دست میدهد زیرا بدون علائم
                      نگارشی خواننده درکی از متن نداشته و به نظرش نامفهوم می
                      آید.
                    </div>
                  </div>

                  <div style={{ marginTop: "25px" }}>
                    <div style={{ fontSize: "20px" }}> طرح سوال</div>

                    <div
                      style={{
                        color: "#323232",
                        fontSize: "15.5px",
                        marginTop: "10px",
                        marginLeft: "10px",
                        textJustify: "inter-word",
                        textAlign: "justify",
                        lineHeight: "2",
                      }}
                    >
                      دقت کنید حتما از کتابی که انتخاب می کنید سوال طرح کنید
                      سوال طرح شده توسط شما از طرف ادمین سایت چک میشود
                    </div>
                  </div>

                  <div style={{ marginTop: "25px" }}>
                    <div style={{ fontSize: "20px" }}> چگونگی طرح سوال </div>

                    <div
                      style={{
                        color: "#323232",
                        fontSize: "15.5px",
                        marginTop: "10px",
                        marginLeft: "10px",
                        textJustify: "inter-word",
                        textAlign: "justify",
                        lineHeight: "2",
                      }}
                    >
                      در ابتدا سوال مورد نظر را حتما به زبان فارسی تایپ کنید و
                      در ادامه گزینه های مربوط را نیز تایپ کنید و گزینه مناسب را
                      انتخاب کنید
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={0.4} xs={0.2}></Grid>
          </Grid>
        </div>
      </CacheProvider>
      <ToastContainer rtl={true} />
      <div style={{marginTop:"20px"}}>
        <Footer />
      </div>
    </div>
  );
};

export default DesignQuiz;
