import React, {useRef} from "react";
import {GrInstagram, GrTwitter } from "react-icons/gr"
import {Container, InputGroup, FormControl, Button} from "react-bootstrap";
import "../styles/components/_downloadButtonArea.scss";

//import * as l from 'ytdl-core';


const DownloadButtonArea =()=>{
    const textInput = useRef();

    const downloadVideo=()=>{
        sendURL(textInput.current.value);
    }

    const sendURL =(URL)=>{
        window.location.href = `http://localhost:4000/downloader?URL=${URL}`;
    }

    return(
        <Container>
            <div className="downloadButtonArea">
            <h1>
                Twitter Video Downloader 
                <br/>
                Download twitter videos & GIF from tweets
            </h1>
         <small>
             Example:{" "} https://twitter.com/PassengersMovie/status/821025484150423557
         </small>
         <InputGroup className="mb-3">
             <FormControl
                 placeholder="Your username"
                 aria-label="Your username"
                 type="url"
                 pattern="http?://.+" 
                 ref={textInput}
                 minLength="7"
                 required
             />
             <InputGroup.Append>
                 <Button variant="outline-secondary" onClick={downloadVideo}>Download</Button>
             </InputGroup.Append>
         </InputGroup>
         <p><strong>
             Share with others - 
             <GrInstagram className="mx-2"/> 
             <GrTwitter/> 
            </strong>
        </p>
     </div>
        </Container>
    )
}

export default DownloadButtonArea;
