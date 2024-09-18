import axios from "axios";
import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./types";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });
  try {
    let products = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/api/product`,
      { withCredentials: true }
    );
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: products.data });
  } catch {
    dispatch({ type: GET_PRODUCT_ERROR });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_PRODUCT_LOADING });
  try {
    let product = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/api/product/${id}`,
      { withCredentials: true }
    );

    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product.data });
  } catch {
    dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
  }
};
