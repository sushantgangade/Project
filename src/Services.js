import React from "react";
import Mpic from "./Mpic.jpg";
import "./App.css";

function Services(){
    return(
        <>
        <div className="Aside">
            <div className="Aside_1">
                <h4>Innovative edge-to-cloud solutions</h4>
                <p>The spirit of innovation at HPE is stronger than ever with a technology portfolio that includes:</p>
                <img src={Mpic} />
            <div className="Aside_3">
                <li>the cloud that comes to you</li>
                <li>software that shortens ML deployments from months to minutes</li>
                <li>41 out of the top 100 fastest supercomputers</li>
                <li>the world’s most secure industry-standard servers</li>
                </div>
            </div>
        </div>
        </>
    )
}
export default Services;