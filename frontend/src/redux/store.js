import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './books/reducer'

const store = configureStore({
  reducer: { books: bookReducer },
})

export default store
