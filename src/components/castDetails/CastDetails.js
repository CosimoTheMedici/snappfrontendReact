import React from 'react'
import img from './z.jpeg'
import './castDetails.scss'
import  images  from '../../assets/images'

const CastDetails = ({movieData}) => {
  console.log("movieData",movieData.actors)
  const movies = movieData.actors;
  //console.log(movies[0].actorImg)

  return (
    <section className='section-castDetails'>
        <div className='section-castDetails-title'>Cast</div>
        <div className="section-castDetails-cast">
        {(movies.map(movie => (
          <div className="section-castDetails-cast-card">
            <img className="section-castDetails-cast-img" src={images.Bissau} alt="" />
            <p>{movie.actorName} <br/> <span>{movie.actorName} </span></p>
            {console.log(movie.actorImg)}
          </div>
        )))}
      </div>
    </section>
  )
}

export default CastDetails

