import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
// import  configureStore  from "./store/store";
import configureStore from "./store/configureStore";

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
// import { configureStore } from "@reduxjs/toolkit";

const store = configureStore();

let persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>

    </Provider>,
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
