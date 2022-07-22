import React, { useState, useEffect, useContext } from "react";
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import SimpleContext from "./SimpleContext";
import Comment from "./Comment.jsx";
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Comments = () => {
    const context = useContext(SimpleContext);

   



    const nullShow = () => {
        let show = null;
        return show;
    }

   


    let showHeader = () => {
        let show = null;
        if (context.comments.length > 0) {
            show = (<Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <h3>دیدگاه کاربران</h3>
                </Grid>

                <Grid item xs={3}></Grid>
            </Grid>
            );

        }
        else {
            show = null;
        }
        return show;
    }
    return (
        <div>

            {showHeader()}






            <Box sx={{ flexGrow: 1 }}>
                <Grid container  style={{ marginTop: "4px" }}>
                    <Grid  item md={2.5} xs={1}></Grid>
                    <Grid item md={7}  xs={10} style={{
                        height: " auto", marginTop: "15px",
                        backgroundColor: "rgb(251,251,251)", paddingTop: "1px"
                    }}>

                        {context.comments.length > 0 ? (
                            context.comments.map(comment => (
                            
                                
                           
                                   
                                    
                                      
                              
                            


                                < Comment
                                    comment_text = { comment.comment_text }
                                    user = { comment.user }
                                    comment_id = { comment.id }
                                    replys = { comment.reply }
                                    created_on = { comment.created_on }
                                    img = { comment.user}
                                />







                            ))

                        ) : (
                        nullShow()
                        )}

                    </Grid>
                    <Grid  item md={2.5} xs={1}></Grid>
                </Grid>
            </Box>

        </div >
    );
}

export default Comments;