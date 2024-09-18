import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./types";

const initState = {
  products: [],
  product: null,
  loading: false,
  error: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        products: payload,
        loading: false,
        error: false,
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_SINGLE_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_SINGLE_PRODUCT_SUCCESS: {
      console.log(payload);
      return {
        ...state,
        product: payload,
        loading: false,
        error: false,
      };
    }
    case GET_SINGLE_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
