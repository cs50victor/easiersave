import React, {useRef, useState} from "react";
import {GrInstagram, GrTwitter} from "react-icons/gr";
import { FaExclamation} from "react-icons/fa";
import {Container, InputGroup, FormControl, Button, Spinner, Form} from "react-bootstrap";
import "../styles/components/_downloadButtonArea.scss";

//import * as l from 'ytdl-core';

const DownloadButtonArea =()=>{
    const textInput = useRef();
    //const [input, setInput] = useState("");
    const [card, showCard] = useState(false);
    const [fetched, setFetched] = useState(false); 
    const [invalidLink, setInvalidLink ] = useState(false);
    const [downloadLink, setDownloadLink] = useState("");
    const [thumbnail, setThumbnail]= useState("");
    const [title, setTitle] = useState("");
    const [badUrl, setBadUrl] = useState("");

    const downloadVideo=()=>{
        showCard(true);
        setFetched(false);
        setInvalidLink(false);
        const noSpacesUrl = textInput.current.value;
        let str = noSpacesUrl.replace(/\s/g, '');
        const mobile1 = new RegExp("^(http|https):\/\/m\.");
        const mobile2 = new RegExp("^(http|https):\/\/mobile\.");
        if (mobile1.test(str) || mobile2.test(str) ){
            const protocol = str.substring(0, str.indexOf("/")+2);
            const antiMobile = str.substring(str.indexOf(".")+1);
            str= protocol + antiMobile;
        }
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
                setBadUrl(json.error);
            }
            setDownloadLink(json.url);
            setThumbnail(json.thumbnail);
            setTitle(json.title);
        })     
    }

    return(
        <Container>
            <div className="downloadButtonArea">
                <h1 className="title">
                    EasierSave 
                </h1>
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
                <small className="mb-1 mx-1 rounded text-muted p-1">
                    Example:{" "} https://twitter.com/PassengersMovie/status/821025484150423557
                </small>
                <InputGroup className="mb-5">
                    <FormControl
                            placeholder="Paste your link here"
                            aria-label="Paste your link here"
                            type="url"
                            ref={textInput}
                            minLength="7"
                            size="lg"
                            required
                        />
                        <InputGroup.Append>
                            <Button className="bg-success"
                                onClick={downloadVideo}>
                                    Download
                            </Button>
                        </InputGroup.Append>
                </InputGroup>
                
                {card ?
                    <>
                        {fetched ?
                            <>
                            {invalidLink ?
                                <div className="card">
                                    <img className="card-img-top" src={""} alt=""></img>
                                    <div className="card-img-overlay shiny">
                                        <div className="card-body text-center">
                                            <FaExclamation  size={35} color={"red"}/>
                                            <p>{badUrl}</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                    <div className="my-2 cutOff px-2 py-1">
                                        {title}
                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src={thumbnail} alt=""></img>
                                        <div className="card-img-overlay">
                                            <a href={downloadLink} className="stretched-link" aria-label="LongPress and click download Files (iPhones) Click">.</a> 
                                        </div>
                                    </div>
                                    
                                </>
                            }
                            </>
                            
                        :
                            <div className="card ">
                                <img className="card-img-top" src={""} alt=""></img>
                                <div className="card-img-overlay shiny">
                                    <div className="card-body text-center">
                                        <Spinner animation="border" />
                                        <p className="card-text">
                                            Loading...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                        
                    </>
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
