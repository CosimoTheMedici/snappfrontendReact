import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MovieList from '../components/movieList/MovieList'
import Pagination from '../components/pagination/Pagination'

const ListPage = () => {
  return (
    <section >
      <Header />
      <MovieList />
      {/* <Pagination /> */}
      <Footer />
    </section>
  )
}

export default ListPage