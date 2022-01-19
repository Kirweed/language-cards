import React, { useContext, useEffect, useState } from "react";
import axios from "axios"

interface ContextInterface {
  isAuthenticated: boolean,
  logIn: any,
  logOut: any
}

const TokenContext = React.createContext<ContextInterface>({isAuthenticated: false, logIn: () => {}, logOut: () => {}});

export const TokenProvider = ({children} : {children: React.ReactNode}) => {
  const [isAuthenticated, authenticate] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    
    if(token) {
      authenticate(true);
    } else {
      authenticate(false);
    }
  })

  const logIn = (username: string, password: string) => {
    axios
      .post("http://127.0.0.1:8000/api/auth/token/", {
        username,
        password,
      })
      .then(({ data }) => {
        if (data.access && data.refresh) {
          localStorage.setItem('ACCESS_TOKEN', data.access);
          localStorage.setItem('REFRESH_TOKEN', data.refresh);
          authenticate(true);
        }
      })
      .catch((err) => console.log(err));
  }

  const logOut = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    authenticate(false);
  }


  return <TokenContext.Provider value={{isAuthenticated, logIn, logOut}}>
    {children}
  </TokenContext.Provider>

}

export const useAuth = () => {
  const auth = useContext(TokenContext);

  return auth;
}

export default TokenContext;
