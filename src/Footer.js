import React from "react";
import "./App.css";

function Footer(){
    return(

        <>
        <div className="footer">
            <h1>CN</h1>
            <p>Let's Connect !</p>
            {/* <input type={"text"}/><input type={"submit"}/> */}
            <div className="footer_1">

                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Service</li>
                <li>Management</li>
                <li>Contact</li>

            </div>
        <div className="footer_2">
                <li>Webinar</li>
                <li>Project</li>
                <li>Cloud</li>
                <li>Business</li>
                <li>Stores</li>
               
            </div>
            <div className="footer_3">
                <li>Product Support</li>
                <li>Software & Drivers</li>
                <li>Customer Stories</li>
                <li>Public Policy</li>
                <li>Events</li>
                <li>Careers</li>
               
            </div>
        </div>
        </>
    )
}
export default Footer;