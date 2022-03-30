import React from 'react';
import VDO1 from "./video/VDO1.mp4";
import "./App.css"; 

function Video (){
    return(
    <>
      <div className="videos_1">
      <video autoPlay loop muted>
        <source src={VDO1} type="video/mp4"/>
       
      </video>
      </div>
    </>
    )
}
export default Video;