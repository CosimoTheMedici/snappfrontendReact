import React from 'react'
import DisplayMoreDiv from '../components/displayMoreDiv/DisplayMoreDiv'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HomeMovieSection from '../components/homeMovies/HomeMovieSection'
import SectionDisplay from '../components/sectionDisplay/SectionDisplay'

const Home = () => {
  return (
    <>
     <Header />
     <SectionDisplay />
     <HomeMovieSection />
     <DisplayMoreDiv />
     <Footer />
     
    </>
  )
}

export default Home