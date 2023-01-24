import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  serviceName: [],
}

export const serviceSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    serviceAdd: (state, action) => {
      state.serviceName.push(action)
    },
 
    removeService: (state) => {
      state.serviceName = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeService, serviceAdd } = serviceSlice.actions

export default serviceSlice.reducer