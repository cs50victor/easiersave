import React from "react";
import Layout from "../components/Layout"
import DownloadButtonArea from "../components/DownloadButtonArea";
import {Container} from "react-bootstrap";
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
                <meta name="keywords" content="twitter video downloader, iPhone Twitter Download, Youtube downloader, video downloader, download youtube videos, iPhone download videos, Instagram video downloader, Download TikTok Videos, Download Facebook videos, twitter, easiersave" />
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
                            <p><strong className="red">The most important step </strong>is to add this page to your device's home screen.</p>
                            <p><u>Using Safari</u>: {" "}
                            Use the <BsBoxArrowUp/> button located at the bottom of your Safari Window to find the <br/> <strong>"Add to Home screen"</strong> option on iOS devices </p>
                            <p><u>Using Other Browsers:</u> Use to the menu button on other devices to find this option.</p>
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
            <div className="sect3">
                <Container className="my-5">
                    <h2>EasierSave</h2>
                    <hr/>
                    <p>EasierSave is a web app made to help you easily download videos and GIFs from various websites
                        <br/>
                        (e.g 
                        Twitch, Giphy, Reddit, TMZ, Twitter, TikTok, Facebook, Instagram, Tumblr, WWE, 9gag, KhanAcademy,
                        Patreon, Udemy, PopcornTV, ABCnews, Adobetv, AlJazeera, BleacherReport, BusinessInsider,
                        BuzzFeed, CNN, CNBC, CNBCVideo, ComedyCentral, CNBC, CNBCVideo, CNN, CNNArticle, CNNBlogs, ComedyCentral, ComedyCentralFullEpisodes, ComedyCentralShortname, 
                        ComedyCentralTV, DailyMail, dailymotion, Discovery, DiscoveryGo, Disney, Dropbox, ESPN, ESPNArticle, FOX, FOX9, 
                        FOX9News, GameSpot, GoogleDrive, HBO, HotNewHipHop, hotstar, Howcast, HowStuffWorks, ign.com
                        ,  imdb- Internet Movie Database trailers, Imgur, Ina, Inc, IndavideoEmbed, InfoQ, ITTF, ITV, ITVBTCC, LEGO, Lemonde
                        , Linkedin-Learning, Lynda, MLB, Motosport, MySpace, natgeo-video, NationalGeographicTV, Naver, NBA, NBC, NBCNews, NBColympics
                        , NBCSports, NFL.com, Nintendo, NYTimes, Pandora.tv, ParamountNetwork, Parliamentlive.tv, PCmag, Periscope, Pokemon, RedBullTV
                        , RockstarGames, RottenTomatoes, SkyNews, SkyPorts, Sport5, SportBox, Stanfordoc, Steam, techtv.mit.edu, TheScene, TheStar, TheSun, TheWeatherChannel
                        , ThisAmericanLife, ThisAV, ThisOldHouse, Unity, USAToday, Vevo, vh1, VICE, Vine, Walla, WalyTV, washingtonpost, XboxClips)<br/><br/>
                        
                        
                        By copying, pasting any video's link from any supported website, and following the download instructions provided when
                        the mp4 video link has been extracted, you can download videos to your iPhone, iPad, Laptop and any other device in some seconds.
                        <br/>
                        easiersave.com does not host any copyrighted material or support 
                        unauthorized file sharing, all the videos are saved directly from their respective CDN.
                    </p>
                    <br/>
                    <br/>
                    <h2>Terms and Conditions of Use</h2>  
                    <hr/>
                    <p>
                        By accessing this Website, accessible from Website.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
                        <br/>
                        <br/>
                        By using EasierSave you agree to the following statements:
                        <br/>
                        <br/>
                        Respect copyrights:
                        It is the end user’s responsibility to credit the rightful owner of the content. EasierSave is not created to violate the copyright at all.
                        <br/>
                        <br/>
                        Don’t abuse this service:
                        The downloaded content is only for personal use and cannot be used for any commercial purposes unless the author gives you permission.
                        <br/>
                        EasierSave can not be held responsible for any misuse.
                        <br/>
                        <br/>
                        Disclaimer:
                        EasierSave is not affiliated or connected with any other website displayed or listed anywhere on its site.
                        <br/>
                    </p> 
                </Container>   
            </div> 
        </Layout>
    )
}


export default Home;