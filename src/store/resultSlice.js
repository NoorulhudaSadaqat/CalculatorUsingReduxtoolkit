import { createSlice } from '@reduxjs/toolkit'

const resultSlice = createSlice({
  name: 'result',
  initialState: {
    value: '0',
  },
  reducers: {
    setResult: (state, action) => {
      state.value = action.payload
    },
  },
})
export default resultSlice
export const { setResult } = resultSlice.actions
