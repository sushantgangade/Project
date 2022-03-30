
import { Message } from "@mui/icons-material";
import React, {  useState } from "react";
import Let from "./Let";
import "./App.css";



function Modal(){
    


            const [modal , setModal] = useState(false);

              const toggleModal=()=>{
              
                
                setModal(!modal)
               
                alert(" Please Update On Form And We reach soon");
            }
            
         
            
            const[Data ,setData]=useState();
           
            const ChangeBut=()=>{

                       alert("Thank You " +" "+ Data);
                       setModal(!modal)
                
            };
        return(
            <>
           
            <div className="bg_btn">
               
                    <button
                    
                    onClick={toggleModal }
                    className="btn_m"
                    >JOIN</button></div>

            {modal &&(
                    <div className="modal">
                        <div className="modal_1"
                        onClick={toggleModal}></div>
                        <div className=" modal_2">
                            <h2 >Update Here </h2>
                            <lable>Name</lable>
                            <input type={"text"} value={Data} onChange={e=>setData(e.target.value)} required/>
                                <br/> <br/>
                            <lable>Number</lable>
                            <input type={"text"} required/>
                            <br/> <br/>
                            <lable>Email ID</lable>
                            <input type={"text"} required/>
                            <br/> <br/>
                            <input type={"submit"} onClick={ChangeBut} className="sub"/>
                        </div>
                    </div>
            )}

                <div className="Section_1">
                    <h1>About Us</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
               
                 </div>

                 <div className="Section_2">
                    <h1>Service</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                 </div>
            </>
        )
    }

export default Modal;