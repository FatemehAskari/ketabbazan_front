import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ChangeNav from "./../Navbar/changeNav";
import { baseUrl } from "../../Variable";
import { ListItemButton } from "@mui/material/ListItemButton";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";

const With2Question = (props) => {
  const [quizNum, setquizNum] = useState("");

  const [quizInfo1_q, setquizInfo1_q] = useState("");
  const [quizInfo1_1, setquizInfo1_1] = useState("");
  const [quizInfo1_2, setquizInfo1_2] = useState("");
  const [quizInfo1_3, setquizInfo1_3] = useState("");
  const [quizInfo1_4, setquizInfo1_4] = useState("");

  const [quizInfo2_q, setquizInfo2_q] = useState("");
  const [quizInfo2_1, setquizInfo2_1] = useState("");
  const [quizInfo2_2, setquizInfo2_2] = useState("");
  const [quizInfo2_3, setquizInfo2_3] = useState("");
  const [quizInfo2_4, setquizInfo2_4] = useState("");

  const [answer1, setanswer1] = useState("");
  const [answer2, setanswer2] = useState("");

  const [flag, setflag] = useState(false);

  const [value, setValue] = React.useState();
  const handleChange = (event) => {
    setValue(event.currentTarget.value);
  };

  const [value2, setValue2] = React.useState();
  const handleChange2 = (event) => {
    //debugger
    setValue2(event.currentTarget.value);
  };

  let token = "Token " + localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${baseUrl}/quiz/generate/${props.id}`, {
        headers: {
          "Content-Type": "application/json ",
          Authorization: token,
        },
      })
      .then((res) => {
        setquizNum(res.data[0].id);

        setquizInfo1_q(res.data[1].question);
        setquizInfo1_1(res.data[1].op1);
        setquizInfo1_2(res.data[1].op2);
        setquizInfo1_3(res.data[1].op3);
        setquizInfo1_4(res.data[1].op4);

        setquizInfo2_q(res.data[2].question);
        setquizInfo2_1(res.data[2].op1);
        setquizInfo2_2(res.data[2].op2);
        setquizInfo2_3(res.data[2].op3);
        setquizInfo2_4(res.data[2].op4);
      });
  }, []);

  const handleSubmit = () => {
    axios
      .get(`${baseUrl}/quiz/submit/${quizNum}`, {
        headers: {
          "Content-Type": "application/json ",
          Authorization: token,
        },
      })
      .then((res) => {
        //console.log(res.data)

        setanswer1(res.data.ans1);
        setanswer2(res.data.ans2);
      });
    setflag(true);
  };

  let show = null;
  let show2 = null;
  if (flag === false) {
    show = null;
    show2 = null;
  } else if (flag === true) {
    let icon = null;
    let icon2 = null;
    if (parseInt(value) === answer1) {
      icon = <CheckCircleOutlineIcon style={{ color: "green" }} />;
    } else {
      icon = <CancelIcon style={{ color: "red" }} />;
    }
    show = (
      <div>
        <Grid container spacing={2}>
          <Grid item>{icon}</Grid>
          <Grid item>
            <Typography style={{ fontSize: "17px" }}>
              جواب درست گزینه {answer1} است
            </Typography>
          </Grid>
        </Grid>
      </div>
    );

    if (parseInt(value2) === answer2) {
      icon2 = <CheckCircleOutlineIcon style={{ color: "green" }} />;
    } else {
      icon2 = <CancelIcon style={{ color: "red" }} />;
    }
    show2 = (
      <div>
        <Grid container spacing={2}>
          <Grid item>{icon2}</Grid>
          <Grid item>
            <Typography style={{ fontSize: "17px" }}>
              جواب درست گزینه {answer2} است
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }

  // let show2 = null;
  // if (flag === false) {
  //   show2 = null;
  // } else if(flag === true) {
  // let icon2 = null;
  // debugger
  // if (parseInt(value2) === answer2) {
  //   icon2 = <CheckCircleOutlineIcon style={{color:"green"}}/>
  // } else {
  //   icon2 = <CancelIcon style={{color:"red"}}/>
  // }
  //   show2 = (
  //     <div>
  //       <Grid container spacing={2}>
  //         <Grid item>
  //           {icon2}
  //         </Grid>
  //         <Grid item>
  //           <Typography style={{fontSize:"17px"}}>
  //             جواب درست گزینه {answer2} است
  //           </Typography>
  //         </Grid>
  //       </Grid>
  //     </div>
  //   )
  // }

  return (
    <Paper style={{ height: "700px" }} elevation={0}>
      <Grid>
        <Divider>
          <Chip
            style={{ backgroundColor: "#a8c3f0", color: "black" }}
            label="سوال 1"
          />
        </Divider>

        <Grid style={{ margin: "10px 15px auto auto" }}>
          <Typography style={{ fontSize: 20 }}>{quizInfo1_q}</Typography>
        </Grid>

        <Grid>
          <FormControl>
            <RadioGroup value={value} onChange={handleChange}>
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={quizInfo1_1}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label={quizInfo1_2}
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label={quizInfo1_3}
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label={quizInfo1_4}
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid style={{ margin: "20px 26px auto auto" }}>{show}</Grid>
      </Grid>

      <Grid>
        <Divider>
          <Chip
            style={{ backgroundColor: "#a8c3f0", color: "black" }}
            label="سوال 2"
          />
        </Divider>

        <Grid style={{ margin: "10px 15px auto auto" }}>
          <Typography style={{ fontSize: 20 }}>{quizInfo2_q}</Typography>
        </Grid>

        <Grid>
          <FormControl>
            <RadioGroup value={value2} onChange={handleChange2} name="salam">
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={quizInfo2_1}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label={quizInfo2_2}
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label={quizInfo2_3}
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label={quizInfo2_4}
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid style={{ margin: "20px 26px auto auto" }}>{show2}</Grid>
      </Grid>

      <Grid dir="ltr">
        <Button
          dir="ltr"
          variant="contained"
          onClick={handleSubmit}
          style={{ margin: "50px auto auto 30px" }}
        >
          دیدن نتیجه
        </Button>
      </Grid>
    </Paper>
  );
};

export default With2Question;
