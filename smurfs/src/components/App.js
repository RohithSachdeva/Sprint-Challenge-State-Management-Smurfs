import React, { useState, useEffect } from "react";
import "./App.css";
import { SmurfsContext, SmurfsProvider } from '../contexts/SmurfsContext'
import SmurfForm from '../components/SmurfForm'
import Smurfs  from './Smurf';
import axios from 'axios';


 //Change class component to function ... set up state here and utilize hooks here; useEffect -> get -> post 

    
  

function App() {
  const [smurfs, setSmurfs] = useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      setSmurfs(res.data);
    })
    .catch(err => {
      console.log("error",err);
    })
  }, []);

  const addedSmurf = smurf => {
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log('postresponse', res);
      setSmurfs(res.data);
    })
    .catch(err => {
      console.error(err);
    });
  }

    return (
      <SmurfsContext.Provider value={{ smurfs }}>
      <div className="App">
      <SmurfForm addedSmurf={addedSmurf}/>
      <Smurfs />
      </div>
      
      </SmurfsContext.Provider>
      
    );
  
}

export default App;



// const [smurfs, setSmurfs] = useState([])
  
    // useEffect(() => {
    //   axios
    //   .get('http//localhost:3333/smurfs')
    //   .then(res => {
    //     console.log(res)
    //     setSmurfs(res.data)
    //   })
    //   .catch(err => console.log(err))
    // }, [])

    
  


//Use axios get on 


// const smurfData = () =>{
//   const [smurfs, setSmurfs] = useState([])

//   useEffect(() => {
//     axios
//     .get('http//localhost:3333/smurfs')
//     .then(res => {
//       setSmurfs(res.data)
//     })
//     .catch(err => console.log(err))
//   }, [])
// }




