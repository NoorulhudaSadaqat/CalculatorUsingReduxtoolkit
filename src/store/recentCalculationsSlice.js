import { createSlice } from '@reduxjs/toolkit'

const recentCalculationsSlice = createSlice({
  name: 'calculations',
  initialState: {
    value: [' '],
  },
  reducers: {
    addCalculations: (state, action) => {
      state.value.push(action.payload)
    },
  },
})
export default recentCalculationsSlice
export const { addCalculations } = recentCalculationsSlice.actions
