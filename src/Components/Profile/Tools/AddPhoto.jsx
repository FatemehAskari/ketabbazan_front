import React from "react";
import "../Profile.css";
import axios from "axios";
import Button from '@mui/material/Button';
 import { baseUrl } from "../../../Variable";
const AddPhoto = () => {

    const [selectedFile, setSelectedFile] = React.useState('');
    console.log('hellsdjfkljsdfksdklghisdjgklsdjgklsdhgjls');

    let token = "Token " + localStorage.getItem('token');

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
        console.log('event :', event.target.files[0]);

        console.log('pic ', selectedFile);
    }

    const onFileUpload = () => {

        const formData = new FormData();

        formData.append(
            "image",
            selectedFile,
           selectedFile.name
        );
        
      
        axios.post(`${baseUrl}/profile/image/`, formData,{
        headers: {
            'content-type': 'application/json ',
            'Authorization': token
         }}
        ).then(
            (res)  => {
                console.log(res.status);
            }
        );
    };

    return (
        <div className="profile_root">
            <div className="profile_section profile_addPhoto">
                <form>
                    <input type="file" onChange={onFileChange} />
                    
                    <Button onClick={onFileUpload}  style={{ width: "160px", marginRight: "600px", marginTop: "55px" }}
                     variant="contained">تغییر عکس</Button>
                </form>
            </div>
        </div>
    );
};

export default AddPhoto;