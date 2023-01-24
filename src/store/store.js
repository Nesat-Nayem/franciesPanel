import { configureStore } from '@reduxjs/toolkit'
import serviceSlice from '../slice/serviceSlice'

export const store = configureStore({
  reducer: {
    service : serviceSlice
  },
})