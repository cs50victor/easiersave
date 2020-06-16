import React from "react";
import {Link} from "gatsby";
import {Container, Navbar} from "react-bootstrap";
import "../styles/components/_layout.scss";

const Layout =({children})=>{
    return(
        <React.Fragment>
            <header className="mb-5">
                <Container>
                    <Navbar className="d-flex pt-4">
                        <div className="mr-auto">
                            <Link to="./">
                                <strong>EasierSave</strong>
                            </Link>
                        </div>
                        <div >
                            DarkMode
                        </div>
                    </Navbar>
                    <hr/>
                </Container>
            </header>
            <main className="py-5">{children}</main>
            <small>
            </small>
            <footer>
                © {new Date().getFullYear()} EasierSave 
                <br/>
                <small className="text-muted">
                    All videos are downloaded from their respective CDN servers directly to your device.
                    <br/>
                    easiersave.com doesn't store/host any pirated or copyright content on its server. 
                </small>
            </footer>
        </React.Fragment>
    )
}

export default Layout;
