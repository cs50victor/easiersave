import React from "react";
import Layout from "../components/Layout";
import DownloadButtonArea from "../components/DownloadButtonArea";
import {Button} from "react-bootstrap";
import { AiFillApple, AiFillAndroid, AiOutlineDesktop } from "react-icons/ai";
import "../styles/pages/_index.scss";

export default ()=>{
    return(
        <Layout>
            <DownloadButtonArea/>
            <div className="container text-center my-5">
                <p>How to download <strong>Twitter</strong> and <strong>Instagram</strong> videos faster</p>
                <Button href="#iphone" variant="dark" className="mb-2"> On Iphones <AiFillApple/> </Button>
                <br/>
                <Button href="#andriod" variant="dark" className="mb-2"> On Andriod phones <AiFillAndroid/> </Button>
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
