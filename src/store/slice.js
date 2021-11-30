import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'store',
  initialState: {
    token: null,
  },
  reducers: {
    storeJwt: (state, action) => {
      state.token = action.payload
    },
    clearJwt: (state) => {
      state.token = null
      state.budget = null
    },
  },
})

export const { storeJwt, clearJwt, storeBudget } = slice.actions
export default slice.reducer
