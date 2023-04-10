import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface FetchBooksParams {
  searchBooks: string
  sort: string
  searchIndex?: number
}

interface IInitialState {
  allBooks: []
  status: 'loading' | 'seccess' | 'error'
  error: boolean
  totalItems: number
  searchIndex: number
  searchBooks: string
  sort: string
  category: string
}

enum Status {
  LOADING = 'loading',
  SECCESS = 'seccess',
  ERROR = 'error',
}

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (newObj: FetchBooksParams) => {
    const { searchBooks, sort } = newObj
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchBooks}&orderBy=${sort}&startIndex=0&maxResults=30&&key=AIzaSyC9gvAO9TMq5jn9NaEk0JZGdanIVn7XrLE`,
    )
    return res.data
  },
)

export const loadMoreBooks = createAsyncThunk(
  'books/loadMoreBooks',
  async (newObj: FetchBooksParams) => {
    const { searchBooks, sort, searchIndex } = newObj
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchBooks}&orderBy=${sort}&startIndex=${searchIndex}&maxResults=30&&key=AIzaSyC9gvAO9TMq5jn9NaEk0JZGdanIVn7XrLE`,
    )
    return res.data
  },
)

const initialState: IInitialState = {
  allBooks: [],
  status: Status.LOADING,
  error: false,
  totalItems: 0,
  searchIndex: 0,
  searchBooks: 'JavaScript',
  sort: 'relevance',
  category: 'all',
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    onChangeSearchBooks: (state, action) => {
      state.searchBooks = action.payload
    },
    onChangeSort: (state, action) => {
      state.sort = action.payload
    },
    onChangeCategory: (state, action) => {
      state.category = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = Status.SECCESS
      state.allBooks = action.payload.items
      state.totalItems = action.payload.totalItems
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = Status.ERROR
      state.error = true
    })
    builder.addCase(loadMoreBooks.fulfilled, (state, action) => {
      state.status = Status.SECCESS
      // @ts-ignore
      state.allBooks = [...state.allBooks, ...action.payload.items]
    })
    builder.addCase(loadMoreBooks.rejected, (state) => {
      state.status = Status.ERROR
      state.error = true
    })
  },
})

export const {
  onChangeSearchBooks,
  onChangeSort,
  onChangeCategory,
} = booksSlice.actions

export default booksSlice.reducer
