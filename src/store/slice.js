import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'store',
  initialState: {
    token: null,
    budget: null,
  },
  reducers: {
    storeJwt: (state, action) => {
      state.token = action.payload
    },
    clearJwt: (state) => {
      state.token = null
      state.budget = null
    },
    storeBudget: (state, action) => {
      state.budget = action.payload
    },
  },
})

export const { storeJwt, clearJwt, storeBudget } = slice.actions
export default slice.reducer
