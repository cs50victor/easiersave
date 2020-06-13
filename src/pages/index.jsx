import React , {useEffect} from "react";
import Layout from "../components/Layout"
import DownloadButtonArea from "../components/DownloadButtonArea";
import {Button} from "react-bootstrap";
import { AiFillApple, AiOutlineDesktop } from "react-icons/ai";
import "../styles/pages/_index.scss";




export default ()=>{

    useEffect(()=>{
        const convertBtn = document.getElementById("convertButton");
        const URLinput = document.getElementById("linkTextInput");

        const convertLinkButton=()=>{
            sendURL(URLinput.value);
        }

        const sendURL =(URL)=>{
            window.location.href = `http://localhost:4000/downloader?URL=${URL}`;
        }
    }, []);

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
