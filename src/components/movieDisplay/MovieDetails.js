import React from 'react'

import './movieDetails.scss'
import { useParams } from "react-router-dom";
const MovieDetails = (props) => {
  const  {data}  = useParams();
  console.log(JSON.stringify(data),"data")

  return (
    <section className='movie_details'>
      <div className='movie_details-img'></div>
      <div className='movie_details-information'>
        <div className ="movie_details-information-span">
          <span className='movie_details-information-span-text'>Movie information hub</span>
          <div className='movie_details-information-span-div'>
            <span className='small-span-one'>Cat</span>
            <span className='small-span-two'>catkknkn</span>
            <span className='small-span-three'>cat</span>
          </div>
        </div>
        <div className='movie_details-desc'>

        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Simply dummy text of the printing and typesetting industry. 

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      </div>

      </div>

      
    </section>
  )
}

export default MovieDetails