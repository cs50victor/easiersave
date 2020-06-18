import React, {useRef, useState} from "react";
import {GrInstagram, GrTwitter } from "react-icons/gr";
import {Container, InputGroup, FormControl, Button, Spinner, Form} from "react-bootstrap";
import "../styles/components/_downloadButtonArea.scss";

//import * as l from 'ytdl-core';

let downloadLink;
let thumbnail;
let title;
let badUrl;
const DownloadButtonArea =()=>{
    const textInput = useRef();
    //const [input, setInput] = useState("");
    const [card, showCard] = useState(false);
    const [fetched, setFetched] = useState(false); 
    const [invalidLink, setInvalidLink ] = useState(false);

    const downloadVideo=()=>{
        if(textInput.current.value < 6){
            return "Invalid input"
        }
        const noSpacesUrl = textInput.current.value;
        const str = noSpacesUrl.replace(/\s/g, '');
        console.log(str);
        showCard(true);
        setFetched(false);
        setInvalidLink(false);
        sendURL(str);
        
    }

    const sendURL =(URL)=>{
        //window.location.href =`/downloader?URL=${URL}`;
        fetch(`http://localhost:4000/downloader?URL=${URL}`,{
            method: "GET"
        }).then(res=>res.json())
        .then(json=> {
            setFetched(true);
            const validateUrl = Object.keys(json).length;
            if ( validateUrl === 1 ){
                setInvalidLink(true);
                badUrl = json.error;
            }
            downloadLink = json.url;
            thumbnail = json.thumbnail;
            title = json.title;
        })     
    }

    return(
        <Container>
            <div className="downloadButtonArea">
                <h1>
                    EasierSave 
                </h1>
                <br/>
                <div  className="d-inline-flex justify-content-center mb-2">
                    <div>
                        <img className="img-fluid" width="70px"
                        alt="Twitter logo from Icons8"
                        src="https://img.icons8.com/color/144/000000/twitter-squared.png"/>
                    </div>
                    <div>
                        <img className="img-fluid" width="70px"
                         alt="TikTok logo from Icons8"
                         src="https://img.icons8.com/color/240/000000/tiktok.png"/>
                    </div>
                    <div>
                        <img className="img-fluid" width="70px"
                        alt="Youtube logo from Icons8"
                        src="https://img.icons8.com/fluent/144/000000/youtube-play.png"/>
                    </div>
                    <div>
                        <img className="img-fluid" width="70px"
                        alt="Instagram logo from Icons8"
                        src="https://img.icons8.com/fluent/144/000000/instagram-new.png"/>
                    </div>
                    <div>
                        <img className="img-fluid" width="70px"
                        alt="Facebook logo from Icons8"
                        src="https://img.icons8.com/color/240/000000/facebook.png"/>
                    </div>
                    <div className=" align-self-end">
                        <p><strong>+ more</strong></p>
                    </div>
            </div>
                <small className="mb-1 rounded text-muted p-1">
                    Example:{" "} https://twitter.com/PassengersMovie/status/821025484150423557
                </small>
                <InputGroup className="mb-5">
                    <FormControl
                            placeholder="Your username"
                            aria-label="Your username"
                            type="url"
                            pattern="http?://.+" 
                            ref={textInput}
                            minLength="7"
                            size="lg"
                            required
                        />
                        <InputGroup.Append className="mr-2">
                            <Form.Control as="select" custom size="lg">
                                <option >video</option>
                                <option >audio</option>
                            </Form.Control>
                        </InputGroup.Append>
                    <Button variant="outline-secondary" className="rounded-lg"
                        onClick={downloadVideo}>
                            Download
                    </Button>
                </InputGroup>
                
                {card ?
                    <div className="card ">
                        {fetched ?
                            <>
                            {invalidLink ?
                                <>
                                    <img className="card-img-top" src={""} alt=""></img>
                                    <div className="card-img-overlay">
                                        <div className="card-body text-center">
                                            <p>{badUrl}</p>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <img className="card-img-top" src={thumbnail} alt=""></img>
                                    <div className="card-img-overlay">
                                        <div className="card-body text-center">
                                            <p>{title}</p>
                                        </div>
                                        <a href={downloadLink} className="stretched-link" aria-label="LongPress and click download Files (iPhones) Click">wow</a> 
                                    </div>
                                </>

                            }
                            </>
                            
                        :
                            <>
                                <img className="card-img-top" src={""} alt=""></img>
                                <div className="card-img-overlay">
                                    <div className="card-body text-center">
                                        <Spinner animation="border" />
                                        <p className="card-text">
                                            Loading...
                                        </p>
                                    </div>
                                </div>
                            </>
                        }
                        
                    </div>
                : 
                <></>
                }
                <div className="my-3">
                    <p><strong>Share <GrInstagram/> <GrTwitter/></strong></p>
                </div>
            </div>
        </Container>
    )
}

export default DownloadButtonArea;



/*<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>*/