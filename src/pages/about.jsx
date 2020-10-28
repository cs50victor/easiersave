import React from "react";
import {Link} from "gatsby";
import {Container} from "react-bootstrap";
import Layout from "../components/Layout";

export default function (){
    return(
        <Layout>
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
                    <Link to="/">Back To Homepage</Link>
                </Container>   
            </div> 
        </Layout>
    )
}