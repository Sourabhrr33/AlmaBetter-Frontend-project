import { configureStore } from '@reduxjs/toolkit'
import dataStoreReducer from './DataSlice'

export default configureStore({
  reducer: {
    dataStore: dataStoreReducer
  }
})