import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './books/reducer'
import filterReducer from './slices/filterSlice'

const store = configureStore({
  reducer: { books: bookReducer, filter: filterReducer },
})

export default store
