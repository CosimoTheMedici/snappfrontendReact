import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Details from '../../pages/Details'
import Home from '../../pages/Home'
import ListPage from '../../pages/ListPage'

const RouterPage = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/all/movies" element={<ListPage />}></Route>
    <Route path="/movie/details/:data" element={<Details />}></Route>
    </Routes>
    </>
    
  )
}

export default RouterPage