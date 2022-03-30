import React from "react";
import f from "./f.png";


import "./App.css";

const Data = () =>{

        let a ={
            name1:"",
            name2:"",
            name3:""

        }


    return(
        <>
        <div className="xyz">
            <h1>Our Clients</h1>
            <div className="xyz_2">
        <div className="abc1">
                <img src={f} />{a.name1}
                <img src={f} />{a.name2}
                <img src={f} />{a.name3}
                </div>
        <div className="abc2">
                <img src={f} />{a.name1}
                <img src={f} />{a.name2}
                <img src={f} />{a.name3}
                </div>
        <div className="abc3">
                <img src={f} />{a.name1}
                <img src={f} />{a.name2}
                <img src={f} />{a.name3}
            </div>
            </div>
            </div>
            
        </>
    )
}
export default Data;