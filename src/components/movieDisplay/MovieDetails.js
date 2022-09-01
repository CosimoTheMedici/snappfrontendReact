import React ,{useEffect}from 'react'
import images from '../../assets/images'

import './movieDetails.scss'
const MovieDetails = (props) => {
let cat1= "props.movieData.category[0]"
let cat2 = "props.movieData.category[1];"
let cat3 = "props.movieData.category[2]"
  return (
    <section className='movie_details'>
      <div className='movie_details-img'><img src={images.Mystery} alt="" /></div>
      <div className='movie_details-information'>
        <div className ="movie_details-information-span">
          <span className='movie_details-information-span-text'>Movie information hub</span>
          <div className='movie_details-information-span-div'>
            <span className='small-span-one'>{cat1}</span>
            <span className='small-span-two'>{cat2}</span>
            <span className='small-span-three'>{cat3}</span>
          </div>
        </div>
        <div className='movie_details-desc'>

        <p>{props.movieData.description}</p>
      </div>

      </div>

      
    </section>
  )
}

export default MovieDetails