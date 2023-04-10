import { configureStore } from '@reduxjs/toolkit'
import books from './booksSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    books,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
