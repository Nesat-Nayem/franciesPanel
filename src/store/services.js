import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
// import { getToken } from "./token";
// console.log("token check", getToken)

let initialState = {
  servicesData: [],
  dataLoading: false,
  reportServices: [],
  Sservice:[],
  reload: false,
  error: "",
  apiResponse: {},
};

const services = createSlice({
  name: "services",
  initialState,
  reducers: {
    // reprot section

    reportLoadServicesRequested: (state, action) => {
      state.dataLoading = true;
    },
    reportLoadServicesSucceeded: (state, action) => {
      state.reportServices = action.payload;
      state.dataLoading = false;
    },
    reportLoadServicesFailed: (state, action) => {
      state.error = action.payload.error;
      state.dataLoading = false;
    },

    // spacific

    spacificServicesRequested: (state, action) => {
      state.dataLoading = true;
    },
    spacificServicesSucceeded: (state, action) => {
      state.Sservice = action.payload;
      state.dataLoading = false;
    },
    spacificServicesFailed: (state, action) => {
      state.error = action.payload.error;
      state.dataLoading = false;
    },

    // reprot section

    servicesRequested: (state, action) => {
      state.dataLoading = true;
    },
    servicesRequestedFailed: (state, action) => {
      state.dataLoading = false;
    },
    servicesReceived: (state, action) => {
      state.servicesData = action.payload;
      state.reportServices = action.payload;
      state.dataLoading = false;
    },




    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    setSingleservices: (state, action) => {
      state.singleservices = state.servicesData.find(
        (services) => services._id === action.payload._id
      );
    },

    setReload: (state, action) => {
      state.reload = action.payload.reload;
    },
  },
});

export const {
  servicesRequested,
  servicesRequestedFailed,
  servicesReceived,

  setAuthError,
  setSingleservices,
  setReload,

  reportLoadServicesRequested,
  reportLoadServicesSucceeded,
  reportLoadServicesFailed,

  spacificServicesRequested,
  spacificServicesSucceeded,
  spacificServicesFailed

} = services.actions;

export default services.reducer;

// Load services form Database

export const loadservicess = () => 
// const token = getToken(); // retrieve token from local storage
  apiCallBegan({
    url: "/api/orders",
    onStart: servicesRequested.type,
    onSuccess: servicesReceived.type,
    onFailed: servicesRequestedFailed.type,
    // headers: {
    //   Authorization: `Bearer ${token}` // pass token as a header
    // }
  });

export const spacificService = (data) =>
  apiCallBegan({
    url: `/api/orders?${data}`,
    onStart: spacificServicesRequested.type,
    onSuccess: spacificServicesSucceeded.type,
    onFailed: spacificServicesFailed.type,
  });

export const loadeportServices = () =>
  apiCallBegan({
    url: "/api/report-orders",
    onStart: reportLoadServicesRequested.type,
    onSuccess: reportLoadServicesSucceeded.type,
    onFailed: reportLoadServicesFailed.type,
  });
