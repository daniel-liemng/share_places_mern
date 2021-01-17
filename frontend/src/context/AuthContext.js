import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

import reducer from "../reducer/AuthReducer";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = () => {
    console.log("login");
  };
  const logout = () => {
    console.log("logout");
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
