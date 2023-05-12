// // import { configureStore } from '@reduxjs/toolkit'
// // import serviceSlice from '../slice/serviceSlice'



// // export const store = configureStore({
// //   reducer: {
// //     service : serviceSlice
// //   },
// // })


// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import serviceSlice from '../slice/serviceSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, {
//   service: serviceSlice.reducer,
// });

// // export const store = configureStore({
// //   reducer: persistedReducer,
// // });

// // export const persistor = persistStore(store);
// export default function () {
//   return configureStore({
//     reducer: persistedReducer,
//     // middleware: [...getDefaultMiddleware(), api, emailLocalStorageMiddleware, clearEmailLocalStorageMiddleware],
//   });
// }