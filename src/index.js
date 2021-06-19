/**
 * @author [Sanjeewa Ranuluge]
 * @email [sbandra725@gmail.com]
 * @create date 2021-06-16 00:41:48
 * @modify date 2021-06-16 00:41:48
 * @desc [description]
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
