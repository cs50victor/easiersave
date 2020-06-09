import React, {useEffect, useRef} from "react";
import {GrInstagram, GrTwitter } from "react-icons/gr"
import {Container, InputGroup, FormControl, Button} from "react-bootstrap";
import "../styles/components/_downloadButtonArea.scss";

import * as ytdl from 'ytdl-core';

const DownloadButtonArea =()=>{
    const textInput = useRef();
    
    const download =()=>{
        ytdl(`https://www.youtube.com/watch?v=gpLJKNPtKB8`, {quality: 'highest',  filter: format => format.container === 'mp4'});
    }

    useEffect(()=>{
        console.log(textInput.value);
        
    }, [])
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
         <InputGroup className="mb-3" ref={textInput}>
             <FormControl
                 placeholder="Your username"
                 aria-label="Your username"
                 type="url"
             />
             <InputGroup.Append>
                 <Button variant="outline-secondary" onClick={download}>Download</Button>
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
