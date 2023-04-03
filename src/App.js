import { Route, Routes } from 'react-router-dom'
import { DetailsBook } from './Components/DetailsBook/DetailsBook'
import { Header } from './Components/Header/Header'
import { ItemList } from './Components/ItemList/ItemList'

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/detailsBook/:id" element={<DetailsBook />} />
      </Routes>
    </div>
  )
}
