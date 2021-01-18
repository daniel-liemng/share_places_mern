import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

import reducer from "../reducer/AuthReducer";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // const formatData = { ...formData, name: formData.name || "default" };
    const { data } = await axios.post("/api/users/login", formData, config);
    console.log(data);
  };

  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const formatData = { ...formData, name: formData.name || "default" };

    const { data } = await axios.post("/api/users/signup", formatData, config);
    console.log(data);
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
