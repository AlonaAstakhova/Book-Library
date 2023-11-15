import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './slices/booksSlice'
import filterReducer from './slices/filterSlice'

const store = configureStore({
  reducer: { books: bookReducer, filter: filterReducer },
})

export default store
