import React, {useState, useEffect} from "react";
import { Navigate } from "react-router";
import axios from "axios";

const LoadingTemplate = () => {
    const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
    const [isAuthorized, setAuthorized] = useState(false)
 
    const getUserByToken = (token : string | null) => {
     axios
       .get("http://127.0.0.1:8000/language-cards/", {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       })
       .then((res) => {
         if(res.status === 200) {
           setAuthorized(true);
           localStorage.setItem('IS_AUTHORIZED', 'true');
         }
     })
       .catch((err) => console.log(err));
   };
 
    useEffect(() => getUserByToken(ACCESS_TOKEN), []);
 
    return isAuthorized ? <Navigate replace to="/dashboard" /> : <p>loading</p>
}

export default LoadingTemplate;