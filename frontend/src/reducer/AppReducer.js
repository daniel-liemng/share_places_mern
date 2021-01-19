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
} from "../context/actionTypes";

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        isAuthenticated: true,
        userId: payload._id,
        error: null,
      };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: payload };
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        isAuthenticated: true,
        userId: payload._id,
        error: null,
      };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: payload };
    case USER_LOGOUT:
      return { ...state, isAuthenticated: false, user: null, userId: null };
    case USERS_GET_REQUEST:
      return { ...state, loading: true };
    case USERS_GET_SUCCESS:
      return { ...state, loading: false, users: payload, error: null };
    case USERS_GET_FAIL:
      return { ...state, loading: false, error: payload };
    case PLACE_CREATE_REQUEST:
      return { ...state, loading: true };
    case PLACE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        place: payload,
        error: null,
      };
    case PLACE_CREATE_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default authReducer;
