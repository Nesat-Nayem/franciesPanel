import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import api from "./middleware/api";
import reducer from "./reducer";


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authentication']
  
};

const persistedReducer = persistReducer(persistConfig, reducer);

// Add a middleware that listens for the `addauth` action and stores the email in local storage
// const emailLocalStorageMiddleware = (store) => (next) => (action) => {
//   if (action.type === "authentication/addauth") {
//     const email = action?.payload?.email;
//     localStorage?.setItem("email", email);
//   }
//   return next(action);
// };

const emailLocalStorageMiddleware = (store) => (next) => (action) => {
    if (action.type === "authentication/addauth") {
      const email = action?.payload?.email;
      if (localStorage) {
        localStorage.setItem("email", email);
      }
    }
    return next(action);
  };
  

// Add a middleware that listens for the `removeauth` action and clears the email from local storage
// const clearEmailLocalStorageMiddleware = (store) => (next) => (action) => {
//   if (action.type === "authentication/removeauth") {

//     if(localStorage){

//         localStorage?.removeItem("email");
//     }
//   }
//   return next(action);
// };

const clearEmailLocalStorageMiddleware = (store) => (next) => (action) => {
    if (action.type === "authentication/removeauth") {
      if (localStorage) {
        localStorage.removeItem("email");
      }
    }
    return next(action);
  };
  

export default function () {
  return configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware(), api, emailLocalStorageMiddleware, clearEmailLocalStorageMiddleware],
  });
}

