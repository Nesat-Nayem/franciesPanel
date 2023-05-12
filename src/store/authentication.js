import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import Swal from "sweetalert2";

let initialState = {
  authData: [],
  dataLoading: false,
  reload: false,
  redirect:false,
  error: "",
  apiResponse: {},
  // email: null // add an email field to the initial state
  token: null // add an email field to the initial state
};
  
  
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    addauth: (state, action) => {
      state.apiResponse = action.payload;

      state.apiResponse = action.payload;
      if (state.apiResponse.status !== "InActive") {
        state.redirect = true;
      } else {
        Swal.fire({
          title: 'Account Pending!',
          text: "Please Contract Here: support@trans23.net",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Got It!'
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("done")
          }
        })
      }

    },

    setSingleauth: (state, action) => {
      state.singleauth = state.authData.find(
        (auth) => auth._id === action.payload._id
        
      );
    },
    setReload: (state, action) => {
      state.redirect = false;
      state.reload = action.payload.reload;
    },
    // logout: (state, action) => {
    //   state.token = null; // clear the email from state
    // }
    logout: (state, action) => {
      return { ...initialState }; // reset state to initial state
    }
  },
});

export const {
  setAuthError,
  addauth,
  setSingleauth,
  setReload,
  logout
} = auth.actions;

export default auth.reducer;

export const postauth = (data) =>
  apiCallBegan({
    url: "/api/franciesSingIn",
    data,
    method: "post",
    onSuccess: addauth.type,
  })

// when the user logs out, dispatch the logout action to clear the email from state and local storage
export const logoutUser = () => (dispatch) => {
  dispatch(logout());
  // console.log("hi this is logout")
  // localStorage?.removeItem("email"); // remove the email from local storage
};
