import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const SmurfsContext = createContext();


export const SmurfsProvider = props => {
    const [smurfs, setSmurfs] = useState([])
    useEffect(() => {
          axios
          .get('http//localhost:3333/smurfs')
          .then(res => {
            console.log(res)
            setSmurfs(res.data)
          })
          
        }, [])
        return (
            <SmurfsContext.Provider value={[ smurfs, setSmurfs ]}>
                {props.children}
            </SmurfsContext.Provider>
        )
}

// manage provider here?  useEffect and get?  can't inject it into class component app otherwise 


// const AuthProvider = props => {
//     const [token, setToken] = useState({
//       token: ""
//     });
//     const addToken = UserToken => {
//       setToken({ token: UserToken });
//     };
  
//     return (
//       <AuthContext.Provider value={{ token, addToken, setToken }}>
//         {props.children}
//       </AuthContext.Provider>
//     );
//   };

// https://stackoverflow.com/questions/60780692/how-to-make-a-context-api-inside-an-axios-call



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