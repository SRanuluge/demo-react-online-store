import { combineReducers } from "redux";
import { productsReducer } from "./products";

const Reducers = combineReducers({ productsReducer });
export default Reducers;
