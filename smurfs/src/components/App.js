import React, { Component } from "react";
import "./App.css";
import {SmurfsContext} from '../contexts/SmurfsContext'

const smurfData = () =>{
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios
    .get('http//localhost:3333/smurfs')
    .then(res => {
      setSmurfs(res.data)
    })
    .catch(err => console.log(err))
  }, [])
}

const smurfPost = (new) => {
  axios
  .post('http//localhost:3333/smurfs', new)
  .then (res => {
    console.log(res)
  })
  .catch(err => console.log(err.res))
}  
class App extends Component {
  render() {
    return (
      //<SmurfsContext.provider 
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;




//Need template/card for smurfs.
// Need Axios call ... on App or context .  const [smurfs, setSmurfs] = useState([])  and use effect 
//<ProductContext.Provider value={{ products, addItem }}> where products had useState(data) ... a set DB 
//post request that renders a form for the smurfs

// The Provider method accepts a single prop called value, the value prop is used to provide our data across our app.

// Copy
// <ContextObject.Provider value={dataToPassDown}>
//   <NestedComponent />
//   <OtherNestedComponent />
// </ContextObject.Provider>

// The useState hook holds and sets user state. The useEffect hook performs a pseudo API call that sets “my user” to state.





// [ ] Retrieve an array all the Smurfs in the Smurf DB by writing a `GET` to the endpoint `/smurfs`.
// - [ ] Double check that your response from the server is an array of smurfs.

// const formSubmit = e => {
//   e.preventDefault();

//   axios
//       .post("https://reqres.in/api/users", formState)
//       .then(res => {
//           setPost(res.data); // get just the form data from the REST api
//           console.log("success", post);
//           setFormState({
//               name: "",
//               email: "",
//               password: "",
//               terms: ""
//           });
//       })
//       .catch(err => console.log(err.response));
// };

// return (
//   <div>
//       <form onSubmit={formSubmit}>
//           <label htmlFor="name">
//               Name
//                 <input id="name" type="text" name="name" value={formState.name} onChange={inputChange} />
//               {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}