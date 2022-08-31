import React,{useEffect,useState} from 'react'


import './homeMovieSection.scss'
import { MovieData } from './MovieData'
import { MovieCard } from '../movieCard/MovieCard'
import { fetchTopMovieData } from '../services/Services'

const HomeMovieSection = () => {
    const [movieData, setMovieData] = useState([])
 

      useEffect(() => {
      // const getMovieData = async() => {
      //     // await fetch(`http://localhost:5000/movies`)
      //     // .then((response) =>  response.json())
      //     // .then(({ movies }) => {
      //     //   setMovieData(movies);
      //     //   console.log(movies);
            
      //     // })
      // }

      getMovieData()
  }, [])

  const getMovieData = async () => {
    try {
      const getmoviesData = await fetchTopMovieData();
      setMovieData(getmoviesData.data);
    } catch (ex) {
      console.log(ex, "ex");
     
    }
  };
  return (
    <section className='main_movie-section'>
        <div className='main_movie-box'>
            
                 {
                (movieData.map(data => (
               
                
                <MovieCard data={data} />
                )))} 
            </div>

       
    </section>
  )
}

export default HomeMovieSection


