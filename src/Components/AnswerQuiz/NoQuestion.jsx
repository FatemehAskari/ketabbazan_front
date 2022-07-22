import React, { useState, useEffect } from "react";
import {TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ChangeNav from "../Navbar/changeNav";
import { baseUrl } from "../../Variable";
import { ListItemButton } from '@mui/material/ListItemButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const NoQuestion = () => {
    return ( 
        <center>
            <Typography style={{margin: "100px auto auto auto", fontSize: 22}}>هیچ سوالی برای این کتاب ثبت نشده است</Typography>
        </center>
     );
}
 
export default NoQuestion;