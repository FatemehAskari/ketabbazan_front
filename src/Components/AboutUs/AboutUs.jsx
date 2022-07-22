import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Link, useParams } from "react-router-dom";
import ChangeNav from "./../Navbar/changeNav";
import Stack from '@mui/material/Stack';
import askari from '../../assets/Image/askari.jpg'
import samadi from '../../assets/Image/samadi.jpg'
import izadi from '../../assets/Image/izadi.jpg'
import amiri from '../../assets/Image/amiri.jpg'
import shahi from '../../assets/Image/shahi.jpg'
import yasin from '../../assets/Image/yasin.jpg'
import derakhshan from '../../assets/Image/derakhshan.jpg'
import Footer from "../Footer/footer";


const AboutUs = () => {

    return ( 
        <div>
            <ChangeNav/>
        
            <center>
                <Grid style={{margin:"100px auto 40px auto"}} container item lg={10} xs={10} >

                    <Grid item lg={12} xs={12} >
                        <Typography style={{fontSize: 23, fontWeight:"bold", color: "#0D9ECF"}}>درباره ما و هدف ما</Typography>
                        <br />
                        <Typography>
                            گروه کتاب بازان در جهت ارتقای فرهنگ کتاب و کتاب خوانی و همچنین ایجاد یک ارتباط مؤثر مابین خوانندگان محترم ساخته شده است. این گروه تلاش می کند تا خدماتی همچون ارائه محصول باکیفیت و همچنین ایجاد یک ارتباط قوی مابین خوانندگان را فراهم سازد. محیطی که خوانندگان بتوانند به راحتی درباره کتاب هایی که خوانده اند نقد بنویسند، درباره کتاب ها سوال طرح کنند و همچنین نقدهای دیگران را بخوانند و سوال هایی که دیگران طرح کرده اند را پاسخ دهند. نوشتن نقد باعث ایجاد یک ارتباط بسیار نزدیکی بین خواننده و کتاب می شود. و از این رو خواننده اشتیاق خود را برای خواندن کتاب های بیشتر بدست می آورد
                        </Typography>

                    </Grid >

                </Grid>
            </center>

            <center>
            <Grid container lg={10} md={10} xs={10} >
            <Paper elevation={3} style={{width:"100%", margin:"auto auto 30px auto"}}>
                <Grid dir="rtl" style={{margin:"20px auto auto auto"}} container lg={10} md={10} xs={10} >
                        
                    <Grid item lg={12} md={12} xs={12}>
                        <Typography style={{margin:"auto auto 25px auto",fontSize: 20, fontWeight:"bold", color: "#0D9ECF"}}>گروه فرانت اند</Typography>
                    </Grid>

                    <br />
                        
                            <Grid item lg={4} md={4} xs={12}>
                                <Avatar 
                                alt="Remy Sharp"
                                src={askari}
                                sx={{ height: 100, width: 100 }} 
                                />
                                <Grid dir="rtl">
                                    <Typography style={{fontSize: 20,fontWeight:"bold",margin:"5px auto 15px auto"}}  dir="rtl">فاطمه عسکری</Typography>
                                </Grid>
                            </Grid>

                            <Grid item lg={4} md={4} xs={12}>
                                <Avatar 
                                alt="Remy Sharp" 
                                src={samadi}
                                sx={{ height: 100, width: 100 }} 
                                />
                                <Grid dir="rtl">
                                    <Typography style={{fontSize: 20,fontWeight:"bold",margin:"5px auto 15px auto"}}  dir="rtl">محمدعلی صمدی</Typography>
                                </Grid>
                            </Grid>

                            <Grid item lg={4} md={4} xs={12}>
                                <Avatar 
                                alt="Remy Sharp" 
                                src={izadi}
                                sx={{ height: 100, width: 100 }} 
                                />
                                <Grid dir="rtl">
                                    <Typography style={{fontSize: 20,fontWeight:"bold",margin:"5px auto 15px auto"}}  dir="rtl">امیرحسین ایزدی</Typography>
                                </Grid>
                            </Grid>
                        
                    <br/>
                </Grid>
                </Paper> 
            </Grid>
            </center>


            <center>
            <Grid container lg={10} md={10} xs={10} >
            <Paper elevation={3} style={{width:"100%",margin:"auto auto 30px auto"}}>
                <Grid dir="rtl" style={{margin:"20px auto auto auto"}} container lg={10} md={10} xs={10} >
                     
                    <Grid item lg={12} md={12} xs={12}>
                        <Typography style={{margin:"auto auto 25px auto",fontSize: 20, fontWeight:"bold", color: "#0D9ECF"}}>گروه بک اند</Typography>
                    </Grid>

                    <br />
                        
                            <Grid item lg={6} md={6} xs={12}>
                                <Avatar 
                                alt="Remy Sharp"
                                src={amiri} 
                                sx={{ height: 100, width: 100 }} 
                                />
                                <Grid dir="rtl">
                                    <Typography style={{fontSize: 20,fontWeight:"bold",margin:"5px auto 15px auto"}}  dir="rtl">مهدی امیری</Typography>
                                </Grid>
                            </Grid>

                            <Grid item lg={6} md={6} xs={12}>
                                <Avatar 
                                alt="Remy Sharp" 
                                src={derakhshan}
                                sx={{ height: 100, width: 100 }} 
                                />
                                <Grid dir="rtl">
                                    <Typography style={{fontSize: 20,fontWeight:"bold",margin:"5px auto 15px auto"}}  dir="rtl">امیرحسین درخشان</Typography>
                                </Grid>
                            </Grid>
                        
                    <br/>
                    
                </Grid>
            </Paper> 
            </Grid>
            </center>

            <center>
            <Grid container lg={10} md={10} xs={10} >
            <Paper elevation={3} style={{width:"100%",margin:"auto auto auto auto"}}>
                <Grid dir="rtl" style={{margin:"20px auto auto auto"}} container lg={10} md={10} xs={10} >
                     
                    <Grid item lg={12} md={12} xs={12}>
                        <Typography style={{margin:"auto auto 25px auto",fontSize: 20, fontWeight:"bold", color: "#0D9ECF"}}>منتور ها</Typography>
                    </Grid>

                    <br />
                        
                            <Grid item lg={6} md={6} xs={12}>
                                <Avatar 
                                alt="Remy Sharp" 
                                src={yasin}
                                sx={{ height: 100, width: 100 }} 
                                />
                                <Grid dir="rtl">
                                    <Typography style={{fontSize: 20,fontWeight:"bold",margin:"5px auto 8px auto"}}  dir="rtl">یاسین عسکری</Typography>
                                    <Typography style={{fontSize: 15,fontWeight:"bold",margin:"5px auto 15px auto"}}>اسکرام مستر</Typography>
                                </Grid>
                            </Grid>

                            <Grid item lg={6} md={6} xs={12}>
                                <Avatar 
                                alt="Remy Sharp" 
                                src={shahi}
                                sx={{ height: 100, width: 100 }} 
                                />
                                <Grid dir="rtl">
                                    <Typography style={{fontSize: 20,fontWeight:"bold",margin:"5px auto 8px auto"}}  dir="rtl">علی اکبر شاهی</Typography>
                                    <Typography style={{fontSize: 15,fontWeight:"bold",margin:"5px auto 15px auto"}}>مدیر محصول</Typography>
                                </Grid>
                            </Grid>
                        
                    <br/>
                    
                </Grid>
            </Paper> 
            </Grid>
            </center>

            <Footer/>
        
        </div>
     );
}
 
export default AboutUs;