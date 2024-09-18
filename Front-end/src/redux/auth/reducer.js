import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
} from "./types.js";

const initState = {
  user: "",
  registered: false,
  loading: false,
  error: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        registered: true,
      };
    }
    case SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: payload.user,
        loading: false,
        error: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: "",
      };
    }
    default: {
      return state;
    }
  }
};
