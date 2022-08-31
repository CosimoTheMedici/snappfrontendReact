import React from 'react'
import CastDetails from '../components/castDetails/CastDetails'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MovieDetails from '../components/movieDisplay/MovieDetails'

const Details = () => {
  return (
    <>
    <section>
      <Header />
      <MovieDetails />
      <CastDetails />
      <Footer />
      
    </section>
    
    </>
  )
}

export default Details