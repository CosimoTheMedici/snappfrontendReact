import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MovieList from '../components/movieList/MovieList'
import ScrollButton from '../components/scroller/ScrollButton'

const ListPage = () => {
  return (
    <section >
      <Header />
      <MovieList />
      {/* <Pagination /> */}
      <ScrollButton />
      <Footer />
    </section>
  )
}

export default ListPage