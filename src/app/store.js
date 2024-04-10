import { configureStore } from '@reduxjs/toolkit'
import DummyDataReducer from './slices/DummyData'

export default configureStore({
  reducer: {DummyData: DummyDataReducer}
})