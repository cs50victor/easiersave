import React , {useEffect} from "react";
import Layout from "./src/components/Layout";
import DownloadButtonArea from "./src/components/DownloadButtonArea";
import {Button} from "react-bootstrap";
import { AiFillApple, AiOutlineDesktop } from "react-icons/ai";
import "../styles/pages/_index.scss";


import * as ytdl from 'ytdl-core';
const fs = require('fs');

export default ()=>{

ytdl('http://www.youtube.com/watch?v=A02s8omM_hI', {quality: 'highest',  filter: format => format.container === 'mp4'})
  .pipe(fs.createWriteStream('video.flv'));
    useEffect(()=>{

    }, []);

    return(
        <Layout>
            <DownloadButtonArea/>
            <div className="container text-center my-5">
                <h2>Support</h2>
                <p>How to download <strong>Twitter</strong> and <strong>Instagram</strong> videos faster</p>
                <Button href="#iPhone" variant="dark" className="mb-2"> <strong>On iPhones</strong><AiFillApple size={`1.5em`} style={{paddingBottom: `2.9px`}}/> </Button>
                <br/>
                <Button href="#pc" variant="dark" className="mb-2">On PCs <AiOutlineDesktop/></Button>
                <br/>
            </div>
            <hr/>
            <div className="container mt-3">
                <h2>Example</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec 
                interdum metus. Aenean rutrum ligula sodales ex auctor, sed tempus dui mollis.
                 Curabitur ipsum dui, aliquet nec commodo at, tristique eget ante.
                </p>
                <h3>Houw</h3>
            </div>
        </Layout>
    )
}
