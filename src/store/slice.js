import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'jwt',
  initialState: {
    token: null,
  },
  reducers: {
    storeJwt: (state, action) => {
      state.token = action.payload
    },
    clearJwt: (state) => {
      state.token = null
    },
  },
})

export const { storeJwt, clearJwt } = slice.actions
export default slice.reducer
