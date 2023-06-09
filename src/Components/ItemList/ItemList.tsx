import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadMoreBooks, fetchBooks } from '../../Store/booksSlice'
import { RootState, AppDispatch } from '../../Store'
import { Item } from '../Item/Item'
import { Error } from '../Error/Error'
import { Loader } from '../Loader/Loader'

import { IDataObj } from '../../../Types'

import uuid from 'react-uuid'
import './ItemList.scss'
import { Share } from '../Share/Share'

export const ItemList: React.FC = () => {
  const {
    allBooks,
    totalItems,
    searchBooks,
    sort,
    category,
    status,
    error,
  } = useSelector((state: RootState) => state.books)
  const dispatch = useDispatch<AppDispatch>()
  const [searchIndex, setSearchindex] = useState(0)
  const isUser = localStorage.getItem('userName')

  useEffect(() => {
    const newObjForSearch = { searchBooks, sort, searchIndex }
    dispatch(fetchBooks(newObjForSearch))
  }, [searchBooks, sort])

  function toggleCategory(arr: any) {
    return arr.filter((item: IDataObj) => {
      if (item.volumeInfo.categories !== undefined) {
        if (category === 'all') return item
        if (
          item.volumeInfo.categories[0].toLowerCase() === category.toLowerCase()
        )
          return item
      }
    })
  }

  if (error) return <Error />
  if (status === 'loading') return <Loader />

  return isUser ? (
    <div className="itemList">
      <div className="itemList__count">
        <p>Found {totalItems} results</p>
      </div>
      <div className="itemList__inner">
        {toggleCategory(allBooks).map((item: IDataObj) => {
          const path = item.volumeInfo
          const thumbnail = path.imageLinks && path.imageLinks.smallThumbnail
          return (
            <Item
              key={uuid()}
              title={path.title}
              categories={path.categories}
              desc={path.description}
              image={thumbnail}
              author={path.authors}
              id={item.id}
            />
          )
        })}
      </div>
      <div className="itemList__btn">
        <button
          onClick={() => {
            setSearchindex(allBooks.length + 1)
            const newObjForSearch = { searchBooks, sort, searchIndex }
            dispatch(loadMoreBooks(newObjForSearch))
          }}
        >
          Load more...
        </button>
      </div>
      <Share />
    </div>
  ) : null
}
