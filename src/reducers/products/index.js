/**
 * @author [Sanjeewa Ranuluge]
 * @email [sbandra725@gmail.com]
 * @create date 2021-06-16 00:41:33
 * @modify date 2021-06-16 00:41:33
 * @desc [description]
 */

import {
  FETCH_PRODUCT_LIST,
  FETCH_SELECTED_PRODUCT_DETAIL,
  REMOVE_PRODUCTS,
  LOADING,
  FETCH_PRODUCT_LIST_ERROR,
} from "../../actions";
const initialSatate = {
  error: false,
  loading: false,
  productList: [],
  selectedProductDetail: "",
};
export const productsReducer = (state = initialSatate, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_PRODUCT_LIST:
      return { ...state, productList: payload, loading: false };
    case FETCH_SELECTED_PRODUCT_DETAIL:
      return { ...state, selectedProductDetail: payload };
    case FETCH_PRODUCT_LIST_ERROR:
      return { ...state, loading: false, error: true };
    case REMOVE_PRODUCTS:
      return { ...state, selectedProductDetail: "" };
    default:
      return state;
  }
};
