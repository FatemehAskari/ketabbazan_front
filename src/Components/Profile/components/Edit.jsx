import  React,{ useState, useEffect } from "react";


import "../Profile.css";
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import axios from "axios";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import OutlinedInput from '@mui/material/OutlinedInput';
import { baseUrl } from './../../Variable';


const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});



const Edit = () => {

  const [profile, setProfile] = useState([]);
  const [nickName, setnickName] = useState("");
  const [bio, setBio] = useState("");
  const [fullName, setfullName] = useState("");
  const [day, setDay] = useState("");
  const [gendery, setGendery ] = useState("");
  const [month , setMonth] = useState("");
  const [year , setYear] = useState("");
  const [birthday , setBirthday]=useState("");
  



  useEffect(() => { intialize() }, []);


  let token = "Token " + localStorage.getItem('token');
  console.log(token);

  const intialize = () => {
    axios.get(`${baseUrl}/profile/info/`, {
      headers: {
        'Content-Type': 'application/json ',
        'Authorization': token
      }
    }).then((res) => {
     // console.log(res.data.username);
     console.log(res.status);
      setnickName(res.data.nickname);
      setProfile(res.data.profile);
      setfullName(profile.fullName);
      setBio(profile.bio);
    })
  }
  


  let showDays = [];
  for (let i = 1; i <= 31; i++) {
    showDays.push(<MenuItem value={i}>{i}</MenuItem>);
  }

  let showYears=[];
  
    for (let i = 1320; i <= 1395; i++) {
      showYears.push(<MenuItem value= {i}>{i}</MenuItem>);
    }
  

  let showMonth = [];
  showMonth.push(<MenuItem value={1}>??????????????</MenuItem>);
  showMonth.push(<MenuItem value={2}>????????????????</MenuItem>);
  showMonth.push(<MenuItem value={3}>??????????</MenuItem>);
  showMonth.push(<MenuItem value={4}>??????</MenuItem>);
  showMonth.push(<MenuItem value={5}>??????????</MenuItem>);
  showMonth.push(<MenuItem value={6}>????????????</MenuItem>);
  showMonth.push(<MenuItem value={7}>??????</MenuItem>);
  showMonth.push(<MenuItem value={8}>????????</MenuItem>);
  showMonth.push(<MenuItem value={9}>??????</MenuItem>);
  showMonth.push(<MenuItem value={10}>????</MenuItem>);
  showMonth.push(<MenuItem value={11}>????????</MenuItem>);
  showMonth.push(<MenuItem value={12}>??????????</MenuItem>);


 

const sethandlerNickName = (event) =>
{
setnickName(event.target.value);
}

const sethandlerFullName = (e) =>
{
  setfullName(e.target.value);
}

const sethandlerGendery = (e) =>
{
  setGendery(e.currentTarget.value);
}


const sethandlerDay = (event: SelectChangeEvent) => {
  setDay(event.target.value );
};

const sethandlerMonth = (event: SelectChangeEvent) =>
{

  setMonth(event.target.value);
  
  
}

const sethandlerYear = (event: SelectChangeEvent) =>
{

 
  setYear(event.target.value);
  setBirthday( year + "-" + month + "-" + day);
}



  

const sethandlerBio = (e) =>
{
  setBio(e.targer.value);
}


const user = {
  nickname : nickName ,
  fullname :fullName ,
  gender : gendery ,
  born_date : birthday ,
  bio : bio
}



   const handleSubmit = () =>
   {
      axios.put(
      `${baseUrl}/profile/info/`,
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json",
          'Authorization': token
        }
      }
    ) .then((res) => {
       console.log(res.status);
 
      
     })

    

   }


  return (

    <div>
      <div className="section edit">
        <div className="title">
          <p style={{ fontSize: "18px" }}>???????????? ???????? ????????????</p>
        </div>
        <CacheProvider value={cacheRtl}>
          <div className="content" style={{ paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "inherit" }}>

            <form>
              <div className="top" style={{ display: "flex", flexDirection: "row", justifyContent: "inherit" }} >



                <div className="right" style={{ width: "430px" }}>

                  < TextField  onChange={(e) => (sethandlerFullName(e))}  style={{
                    marginRight: "20px", marginTop: "10px", marginBottom: "20px", width: "390px",
                    directin: "rtl !important"
                  }}
                    id="outlined-basic" label=" ?????? ?? ?????? ????????????????" variant="outlined"
                   value={fullName}  />

                </div>
                
                <div className="left" style={{ width: "430px" }}>
                  <TextField   onChange={(e) => (sethandlerNickName(e))}  style={{
                    marginRight: "20px", marginTop: "10px", marginBottom: "20px", width: "390px"
                    , directin: "rtl !important"
                  }}
                    id="outlined-basic" label="?????? ????????????" variant="outlined"
                    value={nickName}   />
                </div>
              </div>







              <div className="birthdayAndGendery" style={{ display: "flex", flexDirection: "row", justifyContent: "inherit", marginTop: "10px" }}>

                <div className="gendery" style={{ marginRight: "20px", width: "430px" }}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">??????????</FormLabel>
                    <RadioGroup onChange={sethandlerGendery}
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="female" control={<Radio />} label="??????" />
                      <FormControlLabel value="male" control={<Radio />} label="????" />
                      <FormControlLabel value="other" control={<Radio />} label="??????????????" />

                    </RadioGroup>
                  </FormControl>
                </div>
                <div className="date" style={{ width: "430px" }}>
                  <p>?????????? ???????? </p>

                  <FormControl style={{ width: "110px", marginRight: "15px" , marginTop:"3px" }}>
                    <InputLabel id="demo-simple-select-label">??????</InputLabel>
                    <Select onChange={sethandlerDay}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                       value={day}
                      label="??????"
                    // onChange={handleChange}
                    >

                      {showDays}
                      
                    </Select>
                  </FormControl>


                  <FormControl style={{ width: "110px", marginRight: "15px"  , marginTop:"3px"}}>
                    <InputLabel id="demo-simple-select-label">??????</InputLabel>
                    <Select onChange={sethandlerMonth}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={month}
                      label="??????"
                    // onChange={handleChange}
                    >
                      {showMonth} 
                    </Select>
                  </FormControl>


                  <FormControl style={{ width: "110px", marginRight: "15px" , marginTop:"3px" }}>
                    <InputLabel id="demo-simple-select-label">??????</InputLabel>
                    <Select onChange={sethandlerYear}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={year}
                      label="??????"
                    // onChange={handleChange}
                    >
                      

                      {showYears}
                     
                    </Select>
                  </FormControl>


                </div>
              </div>


              <TextField onChange={sethandlerBio}
                variant="outlined"
                id="outlined-basic"
                label="????????????????"
                multiline
                rows={3}
                value={profile.bio}

                style={{
                  marginRight: "20px", marginTop: "30px", marginBottom: "20px", direction: "ltr", width: "820px"
                  , directin: "rtl !important"
                }}

              />

              <Button onClick={handleSubmit}  style={{ width: "160px", marginRight: "670px", marginTop: "55px" }} variant="contained">???????????? ???????? ????????????</Button>

            </form>









          </div>
        </CacheProvider>
      </div >

    </div >
  )



}

export default Edit;