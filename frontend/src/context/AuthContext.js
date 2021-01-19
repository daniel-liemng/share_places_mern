import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

import reducer from "../reducer/AuthReducer";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
  USERS_GET_FAIL,
} from "./actionTypes";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  users: [],
  error: null,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //// LOGIN
  const login = async (formData) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // const formatData = { ...formData, name: formData.name || "default" };
      const { data } = await axios.post("/api/users/login", formData, config);
      console.log(data);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (err) {
      // Error: err.response.data.message
      console.log("ERR.MSG", err.response);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.response,
      });
    }
  };

  //// SIGN UP
  const register = async (formData) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const formatData = { ...formData, name: formData.name || "default" };
      const { data } = await axios.post(
        "/api/users/signup",
        formatData,
        config
      );

      console.log(data);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (err) {
      // Error: err.response.data.message
      console.log("ERR.MSG", err.response);
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.response,
      });
    }
  };

  //// LOGOUT
  const logout = () => {
    console.log("logout");
    dispatch({ type: USER_LOGOUT });
  };

  //// GET ALL USERS
  const getUsers = async () => {
    dispatch({ type: USERS_GET_REQUEST });
    try {
      const { data } = await axios.get("/api/users");
      console.log(data);
      dispatch({ type: USERS_GET_SUCCESS, payload: data });
    } catch (err) {
      // Error: err.response.data.message
      console.log("ERR.MSG", err.response);
      dispatch({
        type: USERS_GET_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.response,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ ...state, login, register, logout, getUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuthContext };
