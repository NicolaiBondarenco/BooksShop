import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { onChangeSearchBooks } from '../../Store/booksSlice'
import './Search.scss'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
  const [nameBooks, setNameBooks] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onHandleClick = (e) => {
    e.preventDefault()
    dispatch(onChangeSearchBooks(nameBooks))
    navigate('/')
  }

  return (
    <form className="search" onSubmit={(e) => onHandleClick(e)}>
      <input
        type="text"
        onChange={(e) => setNameBooks(e.target.value)}
        value={nameBooks}
        placeholder="Enter"
      />
      <button>Search</button>
    </form>
  )
}
