import React, {useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import  images  from '../assets/images'
import CastDetails from '../components/castDetails/CastDetails'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MovieDetails from '../components/movieDisplay/MovieDetails'
import { fetchMoviesDataSearch } from '../components/services/Services'

const Details = () => {
  const [movieData, setMovieData] = useState([])
  const  {data}  = useParams();
  console.log(data,"data")
  useEffect(() => {
    getMovieListSerchData(data)
    console.log("done")
  }, [])
  const getMovieListSerchData = async (movietitle) => {
    try {
        
        const  fetchResponse =   await fetchMoviesDataSearch(movietitle)
        setMovieData(fetchResponse.data);
//         console.log(movieData.actors[0], "....")
         console.log(fetchResponse.data)
    } catch (ex) {
      console.log(ex, "ex");
     
    }
    
  };
  const data = [{actorName:"Delia Jennings",moviename:"Singleton Gates"},
                {actorName:"Leanne Dillard",moviename:"Kelsey Roman"},
                {actorName:"Webster Cross",moviename:"Hogan Farley"},
                {actorName:"Mae Bullock",moviename:"Colette Kirby"},
                {actorName:"Horton Lambert",moviename:"Paul Mejia"},
                {actorName:"Kaufman Burton",moviename:"Bond Landry"}]
  return (
    <>
    <section>
      <Header />
      <MovieDetails movieData={movieData}/>
         <section className='section-castDetails'>
          <div className='section-castDetails-title'>Cast</div>
          <div className="section-castDetails-cast">
          {(data.actors.map(movie => (
            <div className="section-castDetails-cast-card">
              <img className="section-castDetails-cast-img" src={images.Gambia} alt="" />
              <p>{movie.actorName} <br/> <span>{movie.moviename} </span></p>
              {console.log(movie.actorImg)}
            </div>
          )))}
        </div>
      </section> 
      <Footer />
      
    </section>
    
    </>
  )
}

export default Details
