import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadMoreBooks, fetchBooks } from '../../Store/booksSlice'
import { Item } from '../Item/Item'
import { Error } from '../Error/Error'
import { Loader } from '../Loader/Loader'

import uuid from 'react-uuid'
import './ItemList.scss'
import { all } from 'axios'

export const ItemList = () => {
  const {
    allBooks,
    totalItems,
    searchBooks,
    sort,
    category,
    status,
    error,
  } = useSelector((state) => state.books)
  const dispatch = useDispatch()
  const [searchIndex, setSearchindex] = useState(0)

  useEffect(() => {
    const newObjForSearch = { searchBooks, sort, searchIndex }
    dispatch(fetchBooks(newObjForSearch))
  }, [searchBooks, sort])

  function toggleCategory(arr) {
    return arr.filter((item) => {
      if (item.volumeInfo.categories != undefined) {
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

  return (
    <div className="itemList">
      <div className="itemList__count">
        <p>Found {totalItems} results</p>
      </div>
      <div className="itemList__inner">
        {toggleCategory(allBooks).map((item) => {
          const path = item.volumeInfo
          const thumbnail = path.imageLinks && path.imageLinks.smallThumbnail
          return (
            <Item
              key={uuid()}
              title={path.title}
              categories={path.categories}
              desc={path.description}
              img={thumbnail}
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
    </div>
  )
}
