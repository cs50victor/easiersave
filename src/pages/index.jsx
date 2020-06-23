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
            <Helmet htmlAttributes={{ lang : 'en' }}>
                <title>Easier Save | Download videos from Twitter, Youtube + more.</title>
                <meta name="description" content="Download videos from Youtube, Twitter, Instagram, Facebook, TikTok and many other websites to your device (iPhone, iPads etc).Twitter, Youtube and other social media sites video downloader."/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="keywords" content="Twitter Video Downloader, iPhone Twitter Download, Youtube downloader, video downloader, download youtube videos, iPhone download videos, Instagram video downloader, Download TikTok Videos, Download Facebook videos, Twitter" />
                <meta name="theme-color" content="#FFFFFF"/>
                <link rel="canonical" href="https://easiersave.com/" />
                <script data-ad-client="ca-pub-6031765331775495" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <noscript>You need to enable JavaScript to run this app.</noscript>
            </Helmet>
            <DownloadButtonArea/>
            <br/>
            <div className="sect2">
                <div className="container howTo">
                    <div className="text-center my-5">
                        <h2>How to easily download videos</h2>
                        <div className="my-5 importantInfo p-3">
                            <p><strong className="red">The most important step </strong>is to add this page to your device's home screen.
                            Use the <BsBoxArrowUp/> button located at the bottom of your Safari Window to find the <br/> <strong><u>"Add to Home screen"</u></strong> <br/>option on iOS devices 
                            or
                            Use to the menu button on other devices to find this option.</p>
                        </div>
                    </div>
                    <h3><FcFilm size={70}/> Copy the video URL</h3>
                    <p className="ml-4">
                        Copy the URL of the video you want to download 
                    </p>
                    <h3> <FcInspection size={70}/>Paste the URL in the input box</h3>
                    <p className="ml-4">
                        Paste the video URL in the input box and click the download button.
                    </p>
                    <h3> <FcDownload size={70}/> Download the Video</h3>
                    <p className="ml-4">
                        Follow the download instructions for your device listed under the image/thumbnail displayed after clicking the download button
                    </p>
                </div>
            </div>
        </Layout>
    )
}


export default Home;