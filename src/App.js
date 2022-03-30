
import React,{useState , useEffect} from 'react';
import "./App.css"
import PropagateLoader from "react-spinners/PropagateLoader";
import Home from './Home';
import Service from './Service';
import Contact from './Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const  App = () =>{
// const [Loading, setLoading] = useState(false);

// useEffect(() =>{
//     setLoading(true)
//     setTimeout(()=>{
//         setLoading(false)
//     },5000)
// },[]);

//         const Load={
//             marginLeft:"700px",
//             // color:"#1E6BCE",
//             marginTop:"500px",
//         };
  
     

    return(
        <>
      {/* <div className="App">
        {
            Loading ?

            <PropagateLoader 
          
            color={"#1E6BCE"}
             loading={Loading} 
             size={20} 
             css={Load}
                
             /> */}

            : 

            {/* <Home/>
            <Service/>
            <Contact/> */}
    <Router>
       <Switch>
		      <Route exact path="/" component={Home}/>
				<Route exact path="/Service" component={Service }/>
                <Route exact path="/Contact" component={Contact }/>
	    </Switch>
    </Router>
            
        
{/*    
        }
        </div>
         */}
        </>
    )
}

export default App;