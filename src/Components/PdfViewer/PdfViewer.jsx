import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import ZoomOutRoundedIcon from '@mui/icons-material/ZoomOutRounded';
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, {useState,useEffect} from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './PdfViewer.css';
import axios from 'axios';
import { Paper } from "@mui/material";
import { pdfjs } from "react-pdf";
import { baseUrl } from "../../Variable";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const PdfViewer = (props) => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const [fiUrl, setfiUrl] = useState(null);

  let token = "Token " + localStorage.getItem("token");

  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
  const lastPageClass = isLastPage ? 'disabled' : 'clickable';

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    if (!isFirstPage) setPageNumber(pageNumber - 1);
  }

  function changePageNext(){
    if (!isLastPage) setPageNumber(pageNumber + 1);
  }

  function goToFirstPage(){
    if (!isFirstPage) setPageNumber(1);
  }

  function goToLastPage(){
    if (!isLastPage) setPageNumber(numPages);
  }

  const onPageChange = (e) => {
    const { value } = e.target;
    if(Number(value) === null || Number(value) <= 0 || Number(value) > numPages)
    {
      setPageNumber(pageNumber);
    }
    else{
      setPageNumber(Number(value));
    }
  };

  var currentUrl = window.location.href;
  const answer_array = currentUrl.split('/');

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? 'disabled' : 'clickable';
  const zoomInClass = isMaxZoom ? 'disabled' : 'clickable';

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  let paperstyle = {
    padding: 0,
    height: '40px',
    width: 430,
    margin: "20px auto 0px auto"
  }

  let searchstyle = {
    width : 100
  }

// async function status() {
//   const url = `${baseUrl}/read_book/pdf_file/${answer_array[4]}`
//   let response = await axios.get(url);
//   return response.data;
// }
// status().then((data) => setfiUrl(data));

useEffect(() => {
  axios
    .get(`${baseUrl}/read_book/pdf_file/${answer_array[4]}`, {
      headers: {
        "Content-Type": "application/json ",
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data)

      setfiUrl(res.data);
    });
}, []);

  return (
    <div className="Pdf">
      
      <center>
        <Paper elevation={10} style={paperstyle}>

          <IconButton title= "صفحه اول" color='primary' onClick={goToFirstPage}>
            <FirstPageRoundedIcon />
          </IconButton>
          
          <IconButton title= "صفحه قبل" color='primary' onClick={changePageBack}>
            <NavigateBeforeIcon />
          </IconButton>

          <input dir='rtl' style={searchstyle} type="number" min={1} max={numPages || 1} placeholder='صفحه' onChange={onPageChange}></input>

          <IconButton title= "صفحه بعد" color='primary' onClick={changePageNext}>
            <NavigateNextIcon />
          </IconButton>

          <IconButton title= "صفحه آخر" color='primary' onClick={goToLastPage}>
            <LastPageRoundedIcon />
          </IconButton>

          <IconButton color="success" onClick={zoomIn}>
            <ZoomInRoundedIcon/>
          </IconButton>

          <IconButton color="warning" onClick={zoomOut}>
            <ZoomOutRoundedIcon/>
          </IconButton>

        </Paper>
        
        <br></br>
        <Document file={fiUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber}  scale={scale} />
        </Document>

        <p>{pageNumber} صفحه</p>
        

      </center>
    </div>
  );
}
 
export default PdfViewer;