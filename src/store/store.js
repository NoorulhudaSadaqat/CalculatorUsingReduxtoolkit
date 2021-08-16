import { configureStore, combineReducers } from '@reduxjs/toolkit'
import resultSlice from './resultSlice'
import recentCalculationsSlice from './recentCalculationsSlice'

const rootReducer = combineReducers({
  result: resultSlice.reducer,
  calculations: recentCalculationsSlice.reducer,
})
const store = configureStore({
  reducer: rootReducer,
})
export default store
