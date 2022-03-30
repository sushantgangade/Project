
import React,{useState} from "react";
import Navbar from "./Navbar";
import Video from "./Video";
import Footer from "./Footer";
const Contact =()=>{
    const[Data ,setData]=useState();
    const[Last ,setLast]=useState();
    const[Email ,setEmail]=useState();
    const[Number ,setNumber]=useState();

    const[Button , setButton]=useState("");

         const ClickButton=()=>{
               
               setButton(!Data)
               setButton(!Last)
               setButton(!Email)
               setButton(!Number)

               setButton("Thank You, Our Team Will Reach Soon" );
                   
                
        }
    return(
    <>
    <Navbar/>
    <Video/>

    <div className="Contact">
    <h1 >CONTACT US</h1>
    <div className="Contact_1">
    <label>First Name</label>
    <input type="text" value={Data} onChange={e=>setData(e.target.value)} />
            <br/> <br/>
    <label>Last Name</label>
    <input type="text" value={Last} onChange={e=>setLast(e.target.value)}/>
            <br/> <br/>
    <label>Email ID</label>
    <input type="text" value={Email} onChange={e=>setEmail(e.target.value)}/>
            <br/> <br/>
    <label>Number</label>
    <input type="text" value={Number} onChange={e=>setNumber(e.target.value)}/>
             <br/> <br/>
    <label>Message</label>
    <input type="text" />
         <br/> <br/>

    <input type="Submit" value={"Connect"} onClick={ClickButton}/>
    
    </div>
    <div className="Contact_2">
        <li><h3>CONNECT</h3></li>
        <li><p>151, Near Airport, New Delhi -00001</p></li>
        <li><p>9999955555 ,  +011 252443238</p></li>
        <li><p>abc@gmail.com</p></li>
        <hr/>
       
    </div>
    </div>
    <div className="side_bar">
       <h3>{Data}</h3>
        <br/>  <br/>
       <h3>{Last}</h3>
       <br/>  <br/>
       <h3>{Email}</h3>
       <br/>  <br/>
       <h3>{Number}</h3>
       <br/>  <br/>
        <hr/>
       <h3>{ Button }</h3>
    </div>
    <Footer/>
    </>
    )
}
export default Contact;