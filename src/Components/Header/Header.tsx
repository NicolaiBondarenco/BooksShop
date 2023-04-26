import React from 'react'
import { useDispatch } from 'react-redux'
import { onChangeCategory, onChangeSort } from '../../Store/booksSlice'
import { MultiplySort } from '../MultiplySort/MultiplySort'
import { Search } from '../Search/Search'
import { useAuth } from '../../Hooks/useAuth'
import './Header.scss'

const categoryArr = [
  { name: 'all', value: 'all', id: 1 },
  { name: 'art', value: 'art', id: 2 },
  { name: 'biography', value: 'biography', id: 3 },
  { name: 'computers', value: 'computers', id: 4 },
  { name: 'history', value: 'history', id: 5 },
  { name: 'medical', value: 'medical', id: 6 },
  { name: 'poetry', value: 'poetry', id: 7 },
  { name: 'fiction', value: 'fiction', id: 8 },
]

const sortArr = [
  { name: 'Relevance', value: 'relevance', id: 1 },
  { name: 'Newest', value: 'newest', id: 2 },
]

export const Header: React.FC = () => {
  const { isAuth } = useAuth()
  const dispatch = useDispatch()

  const onHandleCategory = (value: string) => {
    dispatch(onChangeCategory(value))
  }
  const onHandleSort = (value: string) => {
    dispatch(onChangeSort(value))
  }

  return isAuth ? (
    <div className="header">
      <h1>Search for books</h1>
      <Search />
      <div className="header__inner">
        <MultiplySort
          data={categoryArr}
          title={'Categories'}
          idHtml={'cat-select'}
          onChangeValue={onHandleCategory}
        />
        <MultiplySort
          data={sortArr}
          title={'Sorting by'}
          idHtml={'sort-select'}
          onChangeValue={onHandleSort}
        />
      </div>
    </div>
  ) : null
}
