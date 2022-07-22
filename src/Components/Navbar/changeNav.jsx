import React, { useState } from "react";
import Nav from "./Nav";
import Nav2 from "./Nav2"


const ChangeNav = () => {

    let temp = null;
    let flag = localStorage.getItem('token');
    if (flag === null) {
        temp = (
            <Nav/>
        );
    }
    else{
        console.log(flag)
        temp = (
            <Nav2/>
        );
    }

    return ( 
        <div>
            {temp}
        </div>
     );
}
 
export default ChangeNav;