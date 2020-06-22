import React from "react";
import Layout from "../components/Layout"
import DownloadButtonArea from "../components/DownloadButtonArea";
//import {Button} from "react-bootstrap";
import { BsBoxArrowUp} from "react-icons/bs";
import {Helmet} from "react-helmet";
import {FcFilm, FcInspection, FcDownload} from "react-icons/fc"
import "../styles/pages/_index.scss";


/*
$ git add .
$ git commit -m "make it better"
$ git subtree push --prefix server heroku master

https://www.gatsbyjs.org/docs/deploying-to-heroku/
 Youtube: https://www.youtube.com/watch?v=Yd1wTE4dlKE
*/ 

const Home =()=>{

    return(
        <Layout>
            <Helmet>
                <title>Easier Save | Download videos from Twitter, Youtube + more.</title>
                <meta name="description" content="Download videos from Youtube, Twitter, Instagram, Facebook, TikTok and many other websites to your device (iPhone, iPads etc).Twitter, Youtube and other social media sites video downloader."/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="keywords" content="react,seo,helmet" />
                <link rel="canonical" href="https://easiersave.com/" />
            </Helmet>
            <DownloadButtonArea/>
            <br/>
            <div className="sect2">
                <div className="container howTo">
                    <div className="text-center my-5">
                        <h2>How to quickly and easily download videos</h2>
                        <hr/>
                        <p> <u>The most important step</u> is to add this page to your device's home screen for quicker access. </p>
                        Use the <BsBoxArrowUp/> button located at the bottom of your Safari Window to find the <br/> <strong><u>"Add to Home screen"</u></strong> <br/>option on iOS devices 
                        or
                        Use to the menu button on other devices to find this option.
                    </div>
                    <h3><FcFilm size={70}/>Copy the video URL</h3>
                    <p className="ml-4">
                        Copy the URL of the video you want to download 
                    </p>
                    <h3> <FcInspection size={70}/>Paste the URL in the input box</h3>
                    <p className="ml-4">
                        Paste the video URL in the input box and click the download button.
                    </p>
                    <h3> <FcDownload size={70}/>Download the Video</h3>
                    <p className="ml-4">
                        Follow the download instructions for your device listed under the image/thumbnail displayed after clicking the download button
                    </p>
                </div>
            </div>
        </Layout>
    )
}


export default Home;