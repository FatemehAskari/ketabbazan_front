import  React,{ useState, useEffect } from "react";


import "../Profile.css";
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
import { baseUrl } from "../../../Variable";

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

     console.log(res.data);
      setnickName(res.data.nickname);
      setfullName(res.data.profile.fullname);
      setBio(res.data.profile.bio);
      setGendery(res.data.profile.gender);
      console.log("data",res.data.profile.born_date);
      setMonth(res.data.profile.born_date.split("-")[1]);
      setDay(res.data.profile.born_date.split("-")[2]);
      setYear(res.data.profile.born_date.split("-")[0]);
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
  showMonth.push(<MenuItem value={0o02}>????????????????</MenuItem>);
  showMonth.push(<MenuItem value={0o03}>??????????</MenuItem>);
  showMonth.push(<MenuItem value={0o04}>??????</MenuItem>);
  showMonth.push(<MenuItem value={0o05}>??????????</MenuItem>);
  showMonth.push(<MenuItem value={0o06}>????????????</MenuItem>);
  showMonth.push(<MenuItem value={0o07}>??????</MenuItem>);
  showMonth.push(<MenuItem value={0O10}>????????</MenuItem>);
  showMonth.push(<MenuItem value={0O11}>??????</MenuItem>);
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

const sethandlerDay = (event) => {
  setDay(event.target.value );
};

const sethandlerMonth = (event) =>
{
  setMonth(event.target.value);
}

const sethandlerYear = (event ) =>
{
  setYear(event.target.value);
}

const sethandlerBio = (e) =>
{
  setBio(e.target.value);
}

const user = {
  nickname : nickName ,
  fullname :fullName,
  gender : gendery ,
  born_date : year + "-" + month + "-" + day ,
  bio : bio
}

   const handleSubmit = () =>
   {
     if(nickName!==""){
      localStorage.setItem("nickname", nickName); 
     }
      console.log(month);
      console.log(day);    
      axios.post(
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
      <div className="profile_section profile_edit">
        <div className="profile_section_title">
          <p style={{ fontSize: "18px" }}>???????????? ???????? ????????????</p>
        </div>
        <CacheProvider value={cacheRtl}>
          <div className="profile_section_content" style={{ paddingTop: "10px", display: "flex", flexDirection: "row", justifyContent: "inherit" }}>
            <form>
              <div className="profile_content_top" style={{ display: "flex", flexDirection: "row", justifyContent: "inherit" }} >
                <div className="profile_content_top_right" style={{ width: "430px" }}>
                  < TextField  onChange={(e) => (sethandlerFullName(e))}  style={{
                    marginRight: "20px", marginTop: "10px", marginBottom: "20px", width: "390px",
                    directin: "rtl !important"
                  }}
                    id="outlined-basic" label=" ?????? ?? ?????? ????????????????" variant="outlined"
                   value={fullName}  />
                </div>
                <div className="profile_content_top_left" style={{ width: "430px" }}>
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
                    <RadioGroup  value={gendery} onChange={sethandlerGendery}
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel  value="M" control={<Radio />} label="??????" />
                      <FormControlLabel value="F" control={<Radio />} label="????" />
                      <FormControlLabel value="N" control={<Radio />} label="??????????????" />
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
                    >
                      {showMonth} 
                    </Select>
                  </FormControl>
                  <FormControl style={{ width: "110px", marginRight: "15px" , marginTop:"3px" }}>
                    <InputLabel id="demo-simple-select-label">??????</InputLabel>
                    <Select onChange={sethandlerYear }
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={year}
                      label="??????"
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
                value={bio}

                style={{
                  marginRight: "20px", marginTop: "30px", marginBottom: "20px",  width: "820px"
                  , directin: "rtl "
                }}
              />
              <Button onClick={handleSubmit }  style={{ width: "160px", marginRight: "670px", marginTop: "55px" }} variant="contained">???????????? ???????? ????????????</Button>
            </form>
          </div>
        </CacheProvider>
      </div >
    </div >
  )
}

export default Edit;