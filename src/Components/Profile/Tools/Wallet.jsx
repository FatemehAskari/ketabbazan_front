import React, { useState, useEffect } from "react";

import Grid from '@mui/material/Grid';
import { Button, Paper, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TextField from '@mui/material/TextField';
import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import Box from '@mui/material/Box';
import axios from "axios";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import "./Wallet.css";
//import { ToastContainer } from "react-toastify";
import showToast from "../../../Service/toastservice";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { ToastContainer } from "react-toastify";
import { baseUrl } from "../../../Variable";


const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});



const Wallet = () => {

    const token = "Token " + localStorage.getItem("token");

    const [value, setValue] = useState("");
    const [balance, setBalance] = useState("");
    const [flag, setFlag] = useState(0);

    const sethandler = (e) => {
        setValue(e.target.value);

    }

    const handleb1 = () => {
        setValue(10000);

    }

    const handleb2 = () => {
        setValue(20000);

    }

    const handleb3 = () => {
        setValue(50000);

    }

    useEffect(() => {
        axios
            .get(
                `${baseUrl}/accounts/balance/`,
                //JSON.stringify(user),
                {
                    headers: {

                        "Content-Type": "application/json",
                        Authorization: token
                    },
                }
            )
        .then((res) => {
            // console.log(res.status);
            setBalance(res.data.balance);




        })
    }, [flag]);


    // const intialize = () => {
    //     axios
    //         .get(
    //             `http://94.101.185.252/accounts/balance/`,
    //             //JSON.stringify(user),
    //             {
    //                 headers: {

    //                     "Content-Type": "application/json",
    //                     Authorization: token
    //                 },
    //             }
    //         )
    //         .then((res) => {
    //             console.log(res.status);
    //             setBalance(res.data.balance);




    //         });

    // }


    const handleDeposit = () => {
        let amount = value;
        const user = {
            amount: value,
        }
        //  console.log(token);
        axios
            .post(
                `${baseUrl}/accounts/deposit/`,
                JSON.stringify(user),
                {
                    headers: {

                        "Content-Type": "application/json",
                        'Authorization': token
                    },
                }
            )
            .then((res) => {
                console.log(res.status);
                console.log(token);
                if (res.status === 200) {
                    showToast("success", "شارژ کیف پول با موفقیت صورت گرفت");

                }
                //   else if(res.status === 400)
                //   {
                //     showToast("success", "مشکلی پیش امده");
                //   }
            });

        // var axios = require('axios');
        // var FormData = require('form-data');
        // var data = new FormData();
        // data.append('amount', value);

        // var config = {
        //   method: 'post',
        //   url: 'http://94.101.185.252/accounts/deposit/',
        //   headers: { 
        //     'Authorization': token, 
        //     ...data.getHeaders()
        //   },
        //   data : data
        // };

        // axios(config)
        // .then(function (response) {
        //   console.log(JSON.stringify(response.data));
        //   console.log(response.status);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        //  setFlag(Math.floor(Math.random() * 9999999) + 1);
        setValue("");
        axios
        .get(
            `${baseUrl}/accounts/balance/`,
            //JSON.stringify(user),
            {
                headers: {

                    "Content-Type": "application/json",
                    Authorization: token
                },
            }
        )
    .then((res) => {
        // console.log(res.status);
        setBalance(res.data.balance);




    })
        setFlag(flag + 1);

    }




    return (


        <center>
            <CacheProvider value={cacheRtl}>
                <Grid container>
                    <Grid item md={2.5} xs={0} ></Grid>
                    <Grid item md={6.5} xs={12} >
                        <Paper elevation={3} style={{ height: "500px", borderRadius: "30px" }}>

                            <h3 style={{ position: "relative", top: "70px" }}>اعتبار شما</h3>
                            <h2 style={{ position: "relative", top: "75px" }}>{balance} تومان</h2>

                            <TextField onChange={sethandler} value={value}
                                style={{
                                    position: "relative", top: "150px", width: "212px",
                                    borderRadius: "8px"
                                }}
                                id="outlined-basic" label="مبلغ مورد نظر" variant="outlined" placeholder="مبلغ رو به تومان وارد کن" />

                            <Grid container>

                                <Grid item md={1} xs={0.1} ></Grid>
                                <Grid item md={10} xs={11.8} style={{ height: "70px", position: "relative", top: "175px"}}>
                                   
                                   
                                    <button onClick={handleb1} style={{
                                       // float: "right",
                                       
                                        width: "100px",
                                        height: "42px",
                                        borderRadius: " 8px",
                                        fontSize: "14px",
                                        lineHeight: "1.71",
                                        letterSpacing: "normal",
                                        color: " #000000",
                                        outline: " none",
                                        backgroundColor: " #ebebeb",
                                        border: "0px solid transparent",
                                        padding: "6px 12px",
                                        marginTop: "5px",
                                          marginLeft: "9px"
                                    }}>10,000 تومان</button>
                                       

                                   

                                   
                                    <button onClick={handleb2} style={{
                                        //float: "right",
                                        width: "100px",
                                        height: "42px",
                                        borderRadius: " 8px",
                                        fontSize: "14px",
                                        lineHeight: "1.71",
                                        letterSpacing: "normal",
                                        color: " #000000",
                                        outline: " none",
                                        backgroundColor: " #ebebeb",
                                        border: "0px solid transparent",
                                        padding: "6px 12px",
                                        marginTop: "5px",
                                    }}>20,000 تومان</button>
                                       

                                  
                                  
                                   
                                    <button onClick={handleb3} className="hoverb" style={{
                                        width: "100px",
                                        height: "42px",
                                        borderRadius: " 8px",
                                        fontSize: "14px",
                                        lineHeight: "1.71",
                                        letterSpacing: "normal",
                                        color: " #000000",
                                        outline: " none",
                                        backgroundColor: " #ebebeb",
                                        border: "0px solid transparent",
                                        padding: "6px 12px",
                                         marginRight: "9px",
                                        marginTop: "5px",

                                    }}>50,000 تومان</button>
                                   
                                  

                                </Grid>

                                <Grid item md={1} xs={0.1} ></Grid>
                            </Grid>
                            <Grid container>
                                <Grid item md={2} xs={1}></Grid>
                                <Grid item md={8} xs={10}>
                                    <Button onClick={handleDeposit} style={{ position: "relative", top: "215px", width: "93%" }} variant="contained">افزایش موجودی</Button>
                                </Grid>
                                <Grid item md={2} xs={1}></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item md={7} xs={1} ></Grid>
                </Grid >
            </CacheProvider>
            < ToastContainer rtl={true} />
        </center >

    )


}


export default Wallet;