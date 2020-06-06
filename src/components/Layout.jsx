import React from "react";
import {Link} from "gatsby";
import {Container, Navbar} from "react-bootstrap";
import "../styles/components/_layout.scss";

const Layout =({children})=>{
    return(
        <React.Fragment>
            <header className="mb-5">
                <Container>
                    <Navbar className="d-flex">
                        <div className="mr-auto">
                            <Link to="./">
                                <strong>Twitter</strong>
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
                © {new Date().getFullYear()} Footer
                All rights reserved.
                <br/>
                <small className="text-muted">
                All the videos that you download are downloaded to your 
                system directly from their respective CDN servers.
                </small>
            </footer>
        </React.Fragment>
    )
}

export default Layout;
