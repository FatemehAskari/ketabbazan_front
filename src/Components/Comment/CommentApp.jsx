import React, { useState, useEffect, useContext } from "react";
import Box from '@mui/material/Box';
import AddNewComment from "./AddNewComment.jsx";
import Comment from "./Comment";
import SimpleContext from "./SimpleContext";
import Comments from "./Comments";
import axios from "axios";
import SimilarBooks from "../similarBooks/similarBooks.jsx";
import {Link,useParams,} from "react-router-dom";
import { baseUrl } from "../../Variable";


const CommentApp = () => {
  const [getComments, setComments] = useState([]);
  const [getComment, setComment] = useState("");
  const [bookId, setBookid] = useState(0);
  const [replys,setReplys] = useState([]);
  const [reply, setReply] = useState("");
  const [refresh , setRefresh] = useState("");
  const [flag , setFlag] = useState(0);
 const params = useParams();
 const idid = params.id;
 const [reload, setReload] = useState("0");
 const [img , setImg] = useState("");
  const context = useContext(SimpleContext);

  

  useEffect(() => { intialize(); console.log(refresh)   } , [reload, refresh ,idid , flag]);

  
 
  
 
  
  let token ="Token " + localStorage.getItem('token');

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

     //axios.get(`${baseUrl}/profile/getimage/?username=${user}`, {
    //   headers: {
    //      'Content-Type': 'application/json ',
    //      "Authorization": token
    //    }
    // }).then((res) => {
    //   setImg(res);
     
    // })


     

  }
  
  

  

  const handleCreateNewComment = () => {
    
     
    context.setClick(0);
    console.log(context.click);

    const comments = [...getComments];
    setReload(Math.floor(Math.random() * 9999999) + 1);
    console.log(reload);

    const comment = {

      comment_text: getComment,
      book: idid


    };
   
      

    axios.post(
      `${baseUrl}/comment/`,
      JSON.stringify(comment),
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      }
    ).then((res) => {
      console.log(res.status);


    })
    setComment("");
   setFlag(flag+1);
   intialize();
  }

  const handleSetComment = event => {
    setComment(event.target.value);

  }


  return (
    <SimpleContext.Provider
      value={{
        flag : flag,
        img: img ,
        refresh : refresh , 
        comments: getComments,
        comment: getComment,
        setRefresh : setRefresh ,
        handleCreateNewComment: handleCreateNewComment,
        handleSetComment: handleSetComment,
        setFlag :  setFlag,
        intialize : intialize,
       // setComments : setComments,
      }}
    >
      <div>
        

        <SimilarBooks/>
        <br />
        
        <Comments />


        <br />

        <AddNewComment />
        <br />
      </div>

    </SimpleContext.Provider>

  )
}
export default CommentApp;