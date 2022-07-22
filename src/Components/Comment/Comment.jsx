import React, { useEffect, useState, useContext } from "react";
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./AddNewComment";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { ShowerSharp } from "@mui/icons-material";
import axios from "axios";
import { baseUrl } from "../../Variable";
import SimpleContext from "./SimpleContext";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import {Link,useParams,} from "react-router-dom";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const Comment = ({ comment_text, user, comment_id, replys ,created_on }) => {
    let token = "Token " + localStorage.getItem('token');
    const [reply, setReply] = useState("");
    const [id, setId] = useState("");
    const [flag1, setFlag1] = useState("0");
    const [getComments, setComments] = useState("");
    const context = useContext(SimpleContext);
    const params = useParams();
    const idid = params.id;
    useEffect(() => {
        Show();  console.log(context.refresh);
    }, [context.refresh,flag1]);




    const handleSetReply = (e) => {
        setFlag1(1);

        setReply(e.target.value);



    }

    
    const intialize = () => {
   
    

        axios.get(`${baseUrl}/comment/?id=${idid}`, {
            headers: {
               'Content-Type': 'application/json ',
               "Authorization": token
             }
          }).then((res) => {
            
           console.log(res.status);
           setComments(res.data.all_comments);
           
           
          
      
          })
      
        //   axios.get(`${baseUrl}/profile/image/`, {
        //     headers: {
        //        'Content-Type': 'application/json ',
        //        "Authorization": token
        //      }
        //   }).then((res) => {
        //     setImg(res);
           
        //   })
      
      
           
      
        }
        





    const addNewReply = () => {




        const Reply = {
            comment: comment_id,
            reply_text: reply,
        }


        axios.post(
            `${baseUrl}/comment/reply/`,
            JSON.stringify(Reply),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        ).then((res) => {
            console.log(res.status);


        })
        setReply("");
        setFlag1(0);
        context.setFlag(context.flag+1);
        intialize();
        //context.setRefresh((Math.rnpmandom() * 9999999) + 1);
       
    }
    const sethandler = () => {
        setFlag1(0);
        context.setRefresh((Math.random() * 9999999) + 1);

    }

    const Show = () => {
        let show = null;

        if (flag1 == 1) {
            show = (<div>
                <Button variant="contained" onClick={addNewReply}
                    style={{ marginTop: "12px", marginLeft: "82%", backgroundColor: "transparent", color: "blue" }}>ریپلای </Button>
            </div>)
        }
        return show;
    }


    //const replyShow = (<div>salam</div>) ;





    //onClick={context.handleCreateNewComment}

    return (
        // <SimpleContext.Provider
        //     value={{

        //         refresh: refreshl
        //     }}
        // >
        <SimpleContext.Provider
        value={{
          
          
          
          comments: getComments,
          
          
         
         
         //setComments : setComments,
        }}
      >
        <div>
            <Grid container >
                <Grid  item md={0.2} xs={0.2} ></Grid>
                <Grid item md={11.6}  xs={11.6} style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }}>


                    <Avatar style={{ marginTop: "15px" }} alt="Remy Sharp" src={`${baseUrl}/profile/getimage/?username=${user}`} />
                    
                    <a style={{ position: "relative", top: "-45px", right: "47px" }}>{user}</a>

                    <p  style={{ position: "relative", top: "-48px", right: "43px" }}>{(new Date(created_on).toLocaleDateString('fa-IR'))}</p>
                    <p style={{ position: "relative", top: "-25px", right: "5px" }}>{comment_text}</p>

                    <Grid container>
                        <Grid item xs={0.5} ></Grid>

                        <Grid item xs={11.0} style={{ marginRight: "5px" }}>
                            <TextareaAutosize onChange={handleSetReply}
                                style={{
                                    fontFamily: "Byekan ", fontSize: "15px", resize: "vertical", width: "100%   ", height: "35px"
                                    , lineHeight: "35px",
                                    padding: "0px 10px", marginTop: "5px"
                                }}
                                aria-label="minimum height"
                                value={reply}
                                placeholder="ریپلای"

                            />
                            {Show()}


                            <Grid container >


                                <Grid item xs={12} >

                                    {replys.map(replyexa => (
                                        <div>



                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    //width: 'fit-content',
                                                    borderRight: (theme) => `3px solid blue`,
                                                    // borderRadius: 1,
                                                    // bgcolor: 'background.paper',
                                                    // color: 'text.secondary',
                                                    '& svg': {
                                                        m: 1.5,
                                                    },
                                                    '& hr': {
                                                        mx: 0.5,
                                                    },
                                                }}
                                                style={{ marginTop: "7px" }}
                                            >
                                                <div style={{ marginRight: "5px" }}>

                                                    <Divider orientation="vertical" variant="middle" flexItem />


                                                    <Avatar style={{ marginTop: "15px" }} alt="Remy Sharp" 
                                                    src={`${baseUrl}/profile/getimage/?username=${replyexa.user}`} />
                                                    <a style={{ position: "relative", top: "-45px", right: "47px" }}>{replyexa.user}</a>

                                                    <p  style={{ position: "relative", top: "-48px", right: "43px" }}>{(new Date(created_on).toLocaleDateString('fa-IR'))}</p>
                                                    <p style={{ position: "relative", top: "-30px", right: "5px" }}>{replyexa.reply_text}</p>


                                                </div>
                                            </Box>


                                        </div>
                                    ))}
                                </Grid>
                            </Grid>



                        </Grid>
                        <Grid item xs={0.5} ></Grid>
                    </Grid>


                </Grid>
                <Grid  item md={0.2} xs={0.2}></Grid>
            </Grid>
        </div>
         </SimpleContext.Provider >



    )


}
export default Comment;