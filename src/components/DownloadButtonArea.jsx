import React from "react";
import {GrInstagram, GrTwitter } from "react-icons/gr"
import {Container, InputGroup, FormControl, Button} from "react-bootstrap";
import "../styles/components/_downloadButtonArea.scss"

const DownloadButtonArea =()=>{
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
             />
             <InputGroup.Append>
                 <Button variant="outline-secondary">Download</Button>
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
