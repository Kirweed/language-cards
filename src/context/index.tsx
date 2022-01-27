import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getInitialData } from "../store";

interface ContextInterface {
  isAuthenticated: boolean;
  logIn: any;
  logOut: any;
  formError: boolean;
}

const TokenContext = React.createContext<ContextInterface>({
  isAuthenticated: false,
  logIn: () => {},
  logOut: () => {},
  formError: false
});

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, authenticate] = useState(false);
  const [formError, setFormError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    const refreshToken = localStorage.getItem("REFRESH_TOKEN");

    const getAccessTokenByRefreshToken = () => {
      if (refreshToken) {
        axios
          .post("http://127.0.0.1:8000/api/auth/token/refresh/", {
            refresh: refreshToken
          })
          .then((response) => {
            if (response.status === 200) {
              localStorage.setItem("ACCESS_TOKEN", response.data.access);
              authenticate(true);
            } else {
              authenticate(false);
            }
          })
          .catch(() => authenticate(false));
      } else {
        authenticate(false);
      }
    };

    if (token) {
      dispatch(
        getInitialData(token, authenticate, getAccessTokenByRefreshToken)
      );
    } else {
      getAccessTokenByRefreshToken();
    }
  }, []);

  const logIn = (username: string, password: string) => {
    axios
      .post("http://127.0.0.1:8000/api/auth/token/", {
        username,
        password
      })
      .then(({ data }) => {
        if (data.access && data.refresh) {
          localStorage.setItem("ACCESS_TOKEN", data.access);
          localStorage.setItem("REFRESH_TOKEN", data.refresh);
          authenticate(true);
          setFormError(false);
        }
      })
      .catch(() => {
        setFormError(true);
      });
  };

  const logOut = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    authenticate(false);
  };

  return (
    <TokenContext.Provider
      value={{ isAuthenticated, logIn, logOut, formError }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(TokenContext);

  return auth;
};

export default TokenContext;
