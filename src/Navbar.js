
import React, { Component }  from "react";
import { Link } from "react-router-dom";
import "./App.css"; 
// import Video from "./Video";
// import Let from "./Let";
// import Modal from "./Modal";
import HomeIcon from '@mui/icons-material/Home';




function Navbar (){

  
    return(
        <>
      <div className="Navbar">
         <div className="Navbar_1">
          <h3>CONNECTS</h3>
        <div className="Navbar_3">
            <ul>
           
            <Link to="/"><li>MENU</li></Link> 
               <Link to="/service"><li>SERVICE</li></Link> 
               <Link to="/contact"><li>CONTACT</li></Link> 
            </ul>
        </div>
          </div>
      </div>
      {/* <Video/>
      <Let/>
      <Modal/> */}
    
        </>
    )
}
export default Navbar;