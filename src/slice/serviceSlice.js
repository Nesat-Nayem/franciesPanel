// // import { createSlice } from '@reduxjs/toolkit'

// // const initialState = {
// //   serviceName: [],
// // }

// // export const serviceSlice = createSlice({
// //   name: 'service',
// //   initialState,
// //   reducers: {
// //     serviceAdd: (state, action) => {
// //       state.serviceName.push(action)
// //     },
 
// //     removeService: (state) => {
// //       state.serviceName = []
// //     },
// //   },
// // })

// // // Action creators are generated for each case reducer function
// // export const { removeService, serviceAdd } = serviceSlice.actions

// // export default serviceSlice.reducer

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   serviceName: [],
// };

// export const serviceSlice = createSlice({
//   name: 'service', // change the name to 'service'
//   initialState,
//   reducers: {
//     serviceAdd: (state, action) => {
//       state.serviceName.push(action.payload); // use action.payload instead of action
//     },
//     removeService: (state) => {
//       state.serviceName = [];
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { removeService, serviceAdd } = serviceSlice.actions;

// export default serviceSlice.reducer;
