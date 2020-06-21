import React from "react";
import {Link} from "gatsby"
import Layout from "../components/Layout";

export default function (){
    return(
        <Layout>
            <div className="text-center d-flex flex-column">
                <h1>404 Page not Found</h1>
                <Link to="/">Back To Homepage</Link>
            </div>
        </Layout>
    )
}
