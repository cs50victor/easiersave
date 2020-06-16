import React from "react";
import Layout from "../components/Layout"
import DownloadButtonArea from "../components/DownloadButtonArea";
//import {Button} from "react-bootstrap";
//import { AiFillApple, AiOutlineDesktop } from "react-icons/ai";
import "../styles/pages/_index.scss";


/*
$ git add .
$ git commit -m "make it better"
$ git push heroku master

https://www.gatsbyjs.org/docs/deploying-to-heroku/
 Youtube: https://www.youtube.com/watch?v=Yd1wTE4dlKE
*/ 

const Home =()=>{

    return(
        <Layout>
            <DownloadButtonArea/>
            <br/>
            <div className="sect2">
                <div className="container howTo">
                    <div className="text-center my-5">
                        <h2>How to download videos faster</h2>
                        <p>The most important step </p>
                    </div>
                    <h3>Copy video URL</h3>
                    <p className="ml-4">
                        Copy the URL of the video you want to download 
                    </p>
                    <h3>Paste video URL in the search field and pick a format</h3>
                    <p className="ml-4">
                        Paste the video URL in the search field and pick a format.
                    </p>
                    <h3>Download Video</h3>
                    <p className="ml-4">
                        Click the "Download" button and wait for your video to be automatically downloaded.
                        <em>On IOS devices, click on the downloads button , then click on the doownloaded file. Click on the share button and scroll down to the save video option. That's it, you're done!</em>
                    </p>
                </div>
            </div>
        </Layout>
    )
}


export default Home;