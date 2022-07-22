import React, { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import "../Profile.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import showToast from "../../../Service/toastservice";
import axios, { post } from 'axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography, Grid, Stack, Paper, Divider } from "@mui/material";
import ChangePasswordimg from "../../../assets/Image/changePassword.jpg";
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { baseUrl } from "../../../Variable";
import CreateIcon from "@mui/icons-material/Create";
import { borderRadius } from "@mui/system";
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import { ToastContainer } from "react-toastify";


const ChangePassword = () => {

    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });

    let token = "Token " + localStorage.getItem('token');

    const [old_password, setold_password] = useState("");
    const [new_password, setnew_password] = useState("");

    const change = {
        old_password : old_password,
        new_password : new_password
    }

    const sethandlerold = (e) => {
        setold_password(e.target.value);
    }

    const sethandlernew = (event) => {
        setnew_password(event.target.value);
    }

    const handleSubmit = async () => {
        axios.post(
            `${baseUrl}/profile/changepassword/`,
            JSON.stringify(change),
            {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': token
                }
            }
        ).then((res) => {

            console.log(res.status);
            if (res.status === 200) {
                showToast("success", "تغییر رمز با موفقیت انجام شد");
            }
        });
    };

    return ( 

        <Paper style={{ height: "500px" }} elevation={0}>
            
            <CacheProvider value={cacheRtl}>

                <center>
                    <Grid container lg={8} xs={12}>

                        <Grid item lg={12} xs={12}>
                            <Typography style={{fontSize:"20px"}}>
                                جهت تغییر رمز عبور لطفا موارد زیر را کامل کنید
                            </Typography>
                        </Grid>

                        <Grid item lg={12} xs={12}>
                            <img
                            style={{
                                margin: "25px auto auto auto",
                                height: "90px",
                                width: "50%",
                            }}
                            src={ChangePasswordimg}>
                            </img>
                        </Grid>

                        <Grid  item lg={12} xs={12}>
                            <TextField
                                onChange={(e) => (sethandlerold(e))}
                                style={{margin: "50px auto auto auto", width: "60%"}}
                                size="small"
                                id="outlined-basic"
                                label="رمز عبور قدیمی"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid  item lg={12} xs={12}>
                            <TextField
                                onChange={(e) => (sethandlernew(e))}
                                style={{margin: "20px auto auto auto", width: "60%"}}
                                size="small"
                                id="outlined-basic"
                                label="رمز عبور جدید"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item lg={12} xs={12}>
                            <Button 
                            onClick={handleSubmit} 
                            variant="contained" 
                            style={{ margin: "30px auto 30px auto" }}>تغییر رمز</Button>
                        </Grid>

                    </Grid>            
                </center>

            </CacheProvider>

            <ToastContainer rtl={true} />
        </Paper>
    );
}
 
export default ChangePassword;