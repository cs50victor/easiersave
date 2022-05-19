import React from "react";
import {Container, Navbar} from "react-bootstrap";
import {Link} from "gatsby";
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
                            <Link to="/about/" className="about-button">
                                <strong>
                                    About
                                    {" "}
                                </strong> 
                           </Link>
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
