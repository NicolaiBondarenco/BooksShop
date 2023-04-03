import { configureStore } from '@reduxjs/toolkit'
import books from './booksSlice'

export const store = configureStore({
  reducer: {
    books,
  },
})
