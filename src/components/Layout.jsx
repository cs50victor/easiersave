import React from "react";
import {Container, Navbar} from "react-bootstrap";
import {FaTwitter} from "react-icons/fa"
//import {TwitterShareButton} from "react-twitter-embed"
import "../styles/components/_layout.scss";

const Layout =({children})=>{

    return(
        <React.Fragment>
            <header className="mb-5">
                <Container>
                    <Navbar className="d-flex pt-4">
                        <div className="mr-auto">
                            <a href="https://easiersave.com">
                                 <strong>EasierSave</strong>
                            </a>
                        </div>
                        <div>
                            <a
                            href="http://twitter.com/intent/tweet?text=If%20you%20are%20having%20a%20hard%20time%20downloading%20videos%2C
                            %20use%20easiersave%2Ecom%20to%20save%20videos
                            from%20Twitter%2C%20Instagram%2C%20TikTok%20and%20other%20websites
                            to%20your device%2E%20Save%20it%20to%20your%20home%20screen%20to%20speed
                            up%20future%20video%20downloads%2E
                            %20%40easiersave" 
                            className="twitter-mention-button"
                            >
                                <strong>
                                    Share
                                    {" "}
                                    <FaTwitter/>
                                </strong>
                            
                            </a>
                        </div>
                    </Navbar>
                    <hr/>
                </Container>
            </header>
            <main className="py-5">{children}</main>
            <footer className="my-3">
                <Container>
                    <hr/>
                    <br/>
                    © {new Date().getFullYear()} EasierSave 
                    <br/>
                    <small className="text-muted">
                        All videos are downloaded from their respective CDN servers directly to your device.
                        <br/>
                        easiersave.com doesn't store/host any pirated or copyright content on its server. 
                    </small>
                </Container>
            </footer>
        </React.Fragment>
    )
}

export default Layout;
