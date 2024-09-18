import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "./types";

export const registerUser = (data) => async (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  try {
    await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/api/auth/register`,
      data
    );
    dispatch({ type: SIGNUP_SUCCESS });
  } catch {
    dispatch({ type: SIGNUP_ERROR });
  }
};

export const loginUser = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let result = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/api/auth/login`,
      data,
      { withCredentials: true }
    );
    sessionStorage.setItem("user", result.data.user);
    dispatch({ type: LOGIN_SUCCESS, payload: { user: result.data.user } });
  } catch {
    dispatch({ type: LOGIN_ERROR });
  }
};

//! logout users

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_LOADING });
  try {
    await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/auth/logout`);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("item_id");
    sessionStorage.removeItem("prevItemId");
    dispatch({ type: LOGOUT_SUCCESS });
  } catch {
    dispatch({ type: LOGOUT_ERROR });
  }
};

//! setUserDetails

export const setUserDetails = (user) => (dispatch) => {
  dispatch({ type: LOGIN_SUCCESS, payload: { user } });
};
