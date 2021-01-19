import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";

import reducer from "../reducer/AppReducer";
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
  PLACE_CREATE_REQUEST,
  PLACE_CREATE_SUCCESS,
  PLACE_CREATE_FAIL,
  PLACES_BY_USER_GET_REQUEST,
  PLACES_BY_USER_GET_SUCCESS,
  PLACES_BY_USER_GET_FAIL,
  PLACE_GET_REQUEST,
  PLACE_GET_SUCCESS,
  PLACE_GET_FAIL,
  PLACE_UPDATE_REQUEST,
  PLACE_UPDATE_SUCCESS,
  PLACE_UPDATE_FAIL,
  PLACE_DELETE_REQUEST,
  PLACE_DELETE_SUCCESS,
  PLACE_DELETE_FAIL,
  CLEAR_ERROR,
} from "./actionTypes";

const AppContext = createContext();

const initialState = {
  isAuthenticated: false,
  userId: null,
  loading: false,
  user: null,
  users: [],
  place: null,
  places: [],
  error: null,
};

const AppProvider = ({ children }) => {
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

      const { data } = await axios.post("/api/users/login", formData, config);

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

      // If there is no name input -> set it tod default
      const formatData = { ...formData, name: formData.name || "default" };
      const { data } = await axios.post(
        "/api/users/signup",
        formatData,
        config
      );

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

  //// ADD PLACE
  const createPlace = async (formData, history) => {
    dispatch({ type: PLACE_CREATE_REQUEST });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post("/api/places", formData, config);

      dispatch({ type: PLACE_CREATE_SUCCESS, payload: data });

      // Redirect to Home
      history.push("/");
    } catch (err) {
      // Error: err.response.data.message
      console.log("ERR.MSG", err.response);
      dispatch({
        type: PLACE_CREATE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.response,
      });
    }
  };

  //// GET PLACES OF CURRENT USER
  const getPlacesByUser = async (userId) => {
    dispatch({ type: PLACES_BY_USER_GET_REQUEST });
    try {
      const { data } = await axios.get(`/api/places/user/${userId}`);

      dispatch({ type: PLACES_BY_USER_GET_SUCCESS, payload: data });
    } catch (err) {
      // Error: err.response.data.message
      console.log("ERR.MSG", err.response);
      dispatch({
        type: PLACES_BY_USER_GET_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.response,
      });
    }
  };

  //// GET PLACE BY PLACE ID
  const getPlaceById = async (placeId) => {
    dispatch({ type: PLACE_GET_REQUEST });
    try {
      const { data } = await axios.get(`/api/places/${placeId}`);

      dispatch({ type: PLACE_GET_SUCCESS, payload: data });
    } catch (err) {
      // Error: err.response.data.message
      console.log("ERR.MSG", err.response);
      dispatch({
        type: PLACE_GET_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.response,
      });
    }
  };

  //// UPDATE PLACE
  const updatePlace = async (formData, placeId, userId, history) => {
    dispatch({ type: PLACE_UPDATE_REQUEST });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.patch(
        `/api/places/${placeId}`,
        formData,
        config
      );

      dispatch({ type: PLACE_UPDATE_SUCCESS, payload: data });

      // Redirect to User Places
      history.push(`/${userId}/places`);
    } catch (err) {
      // Error: err.response.data.message
      console.log("ERR.MSG", err.response);
      dispatch({
        type: PLACE_UPDATE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.response,
      });
    }
  };

  //// DELETE PLACE
  const deletePlace = async (placeId) => {
    dispatch({ type: PLACE_DELETE_REQUEST });
    try {
      await axios.delete(`/api/places/${placeId}`);

      dispatch({ type: PLACE_DELETE_SUCCESS, payload: placeId });
    } catch (err) {
      // Error: err.response.data.message
      console.log("ERR.MSG", err.response);
      dispatch({
        type: PLACE_DELETE_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.response,
      });
    }
  };

  //// CLEAR ERROR
  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        getUsers,
        createPlace,
        getPlacesByUser,
        getPlaceById,
        updatePlace,
        deletePlace,
        clearError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
