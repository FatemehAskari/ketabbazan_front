import React,{useEffect} from "react";
import Navbar from "../Navbar/Nav";
import Navbar2 from "../Navbar/Nav2";
import Header from "../Header/Header";
import Showbook from "../Shownewbook/showbook";
import Workinfo from "../WorkInfo/workinfo";
import ChangeNav from "../Navbar/changeNav";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ShownewArcrousel from "../shownewarticle-crousel/shownewarcrousel";
import SimpleSlider from "../emtehani/emtehani";
import Login from "../Login/Login";
import BestRate from "../Bestratebook/Bestrate";
 import Categories from "../Categorybook/Category";
import Footer from "../Footer/footer";


const Homepage = () => {
  useEffect(() => {
    document.body.style.background="#F5F5F5";
    return()=>{
      document.body.style.background="white";
    };
  },[]);
  return (
    <div>
      <ChangeNav />
      <Header />
      <Workinfo />
      <Categories/>
      <SimpleSlider />
      <BestRate/>
      <ShownewArcrousel />
      <Footer/>
    </div>
  );
};

export default Homepage;
