import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlinePlayCircle} from 'react-icons/ai'

import images from '../../assets/images'

import './movieCard.scss';

export const MovieCard = ({data}) => {

  return (

            <div className='movie_card' onMouseEnter={() => console.log("me")}>
                <div className='movie_card-img'>
                            
                    <img src={images.Documentary} alt="movie"/>
                    <AiOutlinePlayCircle className="icon"/>
                </div>
                <div className='movie_card-title'>{data.name}</div>
                <div className='movie_card-desc'>{data.description.substring(0, 100)}...</div>
                            

            </div>
  )
}

export const MovieCard1 = ({data}) => {

  return (

        <>
           <Link to={`/movie/details/${data.name}` } state={data} >
                <div className='movie_card-2' onMouseEnter={() => console.log("me")}>
                    <div className='movie_card-img'>
                                
                        <img src={images.Biography} alt="movie"/>
                        <AiOutlinePlayCircle className="icon"/>
                    </div>
                    <div className='movie_card-title'>{data.name}</div>
                    <div className='movie_card-desc'>{data.description.substring(0, 100)}...</div>
                    <div className='movie_card-actors'>
                        <div>
                            <img src={images.Comedy} alt="img"/>
                            <span> {data.actors[0].actorName}</span>
                        </div>
                        <div>
                            <img src={images.Falkland} alt="img"/>
                            <span>{data.actors[1].actorName}</span>
                        </div>
                    </div>
                                

                </div>
            </Link>

        </>
  )
}

  
