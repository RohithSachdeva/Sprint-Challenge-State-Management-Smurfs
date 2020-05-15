import { createContext } from 'react';

export const SmurfsContext = createContext();






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