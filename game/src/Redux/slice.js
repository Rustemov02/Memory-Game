import { configureStore } from '@reduxjs/toolkit'
import memoryGameReducer from '../Redux/store'

export const store = configureStore({
  reducer: {
    game : memoryGameReducer
  },
})