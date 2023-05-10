import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { DetailsBook } from './Components/DetailsBook/DetailsBook'
import { Header } from './Components/Header/Header'
import { ItemList } from './Components/ItemList/ItemList'
import { Register } from './Components/Register/Register'
import { Login } from './Components/Login/Login'

export const App: React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const userPresence = localStorage.getItem('userName')
    if (userPresence) return navigate('/allBooks')
    navigate('/')
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allBooks" element={<ItemList />} />
        <Route path="/detailsBook/:id" element={<DetailsBook />} />
      </Routes>
    </div>
  )
}
