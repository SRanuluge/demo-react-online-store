/**
 * @author [Sanjeewa Ranuluge]
 * @email [sbandra725@gmail.com]
 * @create date 2021-06-16 00:38:00
 * @modify date 2021-06-16 00:38:00
 * @desc [used a middlweare as a thunk]
 */

import {
  FETCH_PRODUCT_LIST,
  FETCH_SELECTED_PRODUCT_DETAIL,
  REMOVE_PRODUCTS,
} from "./types";
import { httpClient } from "../../service";

export const fetchProductList = () => {
  return async (dispatch) => {
    const res = await httpClient
      .get("/products")
      .catch((err) => console.log(err));
    dispatch({
      type: FETCH_PRODUCT_LIST,
      payload: res.data,
    });
  };
};

export const fetchSelectedProductDetail = (id) => {
  return async (dispatch) => {
    const res = await httpClient.get(`/products/${id}`);
    dispatch({
      type: FETCH_SELECTED_PRODUCT_DETAIL,
      payload: res.data,
    });
  };
};

export const removeProducts = () => ({ type: REMOVE_PRODUCTS });
