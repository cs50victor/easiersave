import React, {useRef, useState} from "react";
import {FiArrowDownCircle} from "react-icons/fi";
import { FaExclamation} from "react-icons/fa";
import { BsBoxArrowUp} from "react-icons/bs";
import {FcOk} from "react-icons/fc";
import {Container, InputGroup, FormControl, Button, Spinner} from "react-bootstrap";
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
        
        fetch(`https://serverless-easiersave-api.herokuapp.com/downloader?URL=${URL}`,{
            method: "GET"
        }).then(res=>res.json())
        .then(json=> {
            const validateUrl = Object.keys(json).length;
            if ( validateUrl === 1 ){
                setInvalidLink(true);
                setBadUrl(json.error);
            }
            setDownloadLink(json.url);
            setThumbnail(json.thumbnail);
            setTitle(json.title);
            setFetched(true);
        })     
    }

    return(
        <Container>
            <div className="downloadButtonArea">
                <h1 className="title">
                    EasierSave 
                </h1>
                <p className="m-0">easily save videos from</p>
                <div  className="d-inline-flex justify-content-center mb-2 noDrag">
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
                <div className="small mb-1 text-muted">Example:{" "} https://twitter.com/PassengersMovie/status/821025484150423557</div>
                <InputGroup className="mb-5">
                    <FormControl
                            placeholder="Paste video link here"
                            aria-label="Paste video link here"
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
                                <div className="card noAltBackground my-3">
                                    <img className="card-img-top" src={""} alt=""></img>
                                    <div className="card-img-overlay">
                                        <div className="card-body text-center">
                                            <div>
                                                <FaExclamation  size={35} color={"red"}/>
                                                <p>{badUrl}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                    <div className="my-2 textCutOff p-1">
                                            <strong>{title}</strong>
                                    </div>
                                    <div className="card altBackground mb-3">
                                        <img className="card-img-top" src={thumbnail} alt=""></img>
                                        
                                        <div className="card-img-overlay">
                                            <a href={downloadLink} className="stretched-link" aria-label="LongPress and click download Files (iPhones) Click">.</a> 
                                        </div>
                                    </div>
                                    <div className="my-2 quickInfo p-2">
                                        <ul>
                                            <li><strong>On Apple devices (Use Safari {" "}
                                                <img src="https://help.apple.com/assets/5E191630680CE2E07445B58A/5E191634680CE2E07445B591/en_US/4236b540374dd23e0ba9e00d84f328ac.png"
                                                 className="img-fluid" alt="" height="21" width="21" originalimagename="SharedGlobalArt/AppIconDefault_Safari.png">
                                                </img> 
                                                ) 
                                                : </strong>
                                                <ol className="ml-5">
                                                    <li >Long Press the above image.</li>
                                                    <li>Choose the "Download Linked File <FiArrowDownCircle/>" option.</li>
                                                    <li>Click the Show Downloads button <FiArrowDownCircle/> near the top-right corner of your Safari window.</li>
                                                    <li>Tap on the video you just downloaded and click on the <BsBoxArrowUp/> button.</li>
                                                    <li>Press the "Save Video" button and you're done!  <FcOk/></li>
                                                </ol>
                                            </li>
                                            <li><strong>On other devices  :</strong> 
                                                <ol className="ml-5">
                                                    <li>Click on the above image.</li>
                                                    <li>Click on the menu button located at the bottom right corner of the video.</li>
                                                    <li>Hit the download button and your video will begin downloading!<FcOk/></li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </>
                            }
                            </>
                            
                        :
                            <div className="card noAltBackground my-3">
                                <img className="card-img-top" src={""} alt=""></img>
                                <div className="card-img-overlay">
                                    <div className="card-body text-center">
                                        <div>
                                            <Spinner animation="border" />
                                            <p className="card-text">
                                                Loading...
                                            </p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        }
                        
                    </>
                : 
                <></>
                }
            </div>
        </Container>
    )
}

export default DownloadButtonArea;
