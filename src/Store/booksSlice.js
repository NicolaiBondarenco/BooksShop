import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (newObj) => {
    const { searchBooks, sort } = newObj
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchBooks}&orderBy=${sort}&startIndex=0&maxResults=30&&key=AIzaSyC9gvAO9TMq5jn9NaEk0JZGdanIVn7XrLE`,
    )
    return res.data
  },
)

export const loadMoreBooks = createAsyncThunk(
  'books/loadMoreBooks',
  async (newObj) => {
    const { searchBooks, sort, searchIndex } = newObj
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchBooks}&orderBy=${sort}&startIndex=${searchIndex}&maxResults=30&&key=AIzaSyC9gvAO9TMq5jn9NaEk0JZGdanIVn7XrLE`,
    )
    return res.data
  },
)

const initialState = {
  allBooks: [],
  status: null,
  error: false,
  totalItems: null,
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
      state.status = null
      state.allBooks = action.payload.items
      state.totalItems = action.payload.totalItems
    })
    builder.addCase(fetchBooks.rejected, (state) => {
      state.status = null
      state.error = true
    })
    builder.addCase(loadMoreBooks.fulfilled, (state, action) => {
      state.status = null
      state.allBooks = state.allBooks.concat(action.payload.items)
    })
    builder.addCase(loadMoreBooks.rejected, (state) => {
      state.status = null
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
