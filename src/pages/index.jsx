import React from "react";
import Layout from "../components/Layout"
import DownloadButtonArea from "../components/DownloadButtonArea";
import {Button} from "react-bootstrap";
import { AiFillApple, AiOutlineDesktop } from "react-icons/ai";
import "../styles/pages/_index.scss";


/*
$ git add .
$ git commit -m "make it better"
$ git push heroku master

https://www.gatsbyjs.org/docs/deploying-to-heroku/
 Youtube: https://www.youtube.com/watch?v=Yd1wTE4dlKE
*/ 

export default ()=>{

    return(
        <Layout>
            <DownloadButtonArea/>
            <div className="container text-center my-5">
                <h2>Support</h2>
                <p>How to download <strong>Twitter</strong> and <strong>Instagram</strong> videos faster</p>
                <Button href="#iPhone" variant="dark" className="mb-2"> <strong>On iPhones</strong><AiFillApple size={`1.5em`} style={{paddingBottom: `2.9px`}}/> </Button>
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
