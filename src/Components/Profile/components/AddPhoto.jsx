import React from "react";
import "../Profile.css";
import axios from "axios";
import Button from '@mui/material/Button';
import { SettingsApplicationsTwoTone } from "@mui/icons-material";
import { baseUrl } from './../../Variable';


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

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "image",
            selectedFile,
           selectedFile.name
        );
        // const res =  await apiFUnction(file);

        // Details of the uploaded file
        console.log(selectedFile);

        // Request made to the backend api
        // Send formData object
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
        <div className="root">
            <div className="section addPhoto">

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