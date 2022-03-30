import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Video from "./Video";
import Services from "./Services";
import Footer from "./Footer";

const Service =()=>{
    return(
    <>
    <Navbar/>
   
    <Video/>
    <div className="Service">
        <h1>OUR SERVICE</h1>
        <div className="ServiceS">
    <div className="Service_1">
    <h1>THE RIGHT EXPERIENCE</h1>
    <p>We’re focussed on delivering a superior customer experience. Our holistic approach to all your apps and data gives you the flexibility and choice you need – from how to consume to where to deploy, along with the ability to scale whenever you need.</p>
    </div>

    <div className="Service_2">
    <h1>THE RIGHT EXPERIENCE</h1>
    <p>HPE helps you to transform and run your digital business by enabling you to connect, protect, analyse and act on all your data, from edge to cloud. No matter where you are on your transformation journey, we’re here to help you solve your most pressing data and IT challenges.</p>   
    </div>

    <div className="Service_3">
    <h1>THE RIGHT ECONOMICS</h1>
    <p>Free up capital, maximise capacity and do more with your budget with HPE Financial Services. Our financial and asset lifecycle solutions enable you to invest in the innovation needed to stay ahead of what’s next.</p>
    </div>
    </div>
        <Services/>
    <Footer/>
    </div>
    </>
    )
}
export default Service;