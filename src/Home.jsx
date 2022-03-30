import react from "react";
import "./App.css"; 
import Navbar from "./Navbar";
import Video from "./Video";
import Let from "./Let";
import Modal from "./Modal";
import Data from "./Data";
import Footer from "./Footer";


const Home =()=>{
  
    return(
        <>
            <Navbar/>
            <Video/>
            <Let/>
            <Modal/>
            <Data/>
            <Footer/>
          
           

        </>
    )
}
export default Home;