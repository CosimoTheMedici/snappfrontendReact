import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlinePlayCircle} from 'react-icons/ai'

import img from './walking.jpg'
import img2 from './vanny.jpg'
import './movieCard.scss';

export const MovieCard = ({data}) => {
    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui, illum deleniti ut optio numquam culpa nobis perferendis fuga cupiditate beatae veniam. Veritatis est eaque nam nobis tempora quae, ullam, rerum dolorum totam mollitia molestiae tenetur recusandae voluptas explicabo quaerat id? Harum, veritatis consequuntur expedita neque ad iste nihil, laudantium dolorum veniam officia accusantium odit ullam molestiae excepturi pariatur! Officia tempora temporibus exercitationem? Optio, assumenda? Possimus excepturi odit tempore tenetur quidem id aliquam nemo illo exercitationem odio. Soluta commodi quos quisquam iusto placeat cumque perspiciatis ipsum quasi accusantium et, voluptatem esse molestiae vero voluptatibus voluptates rem recusandae vel doloribus at deleniti fugit sed eveniet nemo! Beatae, quam totam velit harum itaque in aut culpa voluptate praesentium laboriosam molestiae inventore, quibusdam libero quod sint consequatur rem. Iusto maxime totam in non, ipsum sequi obcaecati animi, ea velit impedit tempore aliquid aut sapiente laudantium nemo minima asperiores ad quod. Aspernatur officiis libero recusandae nisi error, vero harum, odio exercitationem velit modi laudantium autem iste nulla eos nostrum qui voluptates illum adipisci, sint facilis saepe assumenda! Similique perferendis necessitatibus distinctio nesciunt obcaecati ipsa, eius, vero, accusantium ex non dignissimos officiis cupiditate sequi inventore voluptas expedita. Adipisci maxime reiciendis quod eaque quidem quia expedita."

  return (

            <div className='movie_card' onMouseEnter={() => console.log("me")}>
                <div className='movie_card-img'>
                            
                    <img src={img} alt="movie"/>
                    <AiOutlinePlayCircle className="icon"/>
                </div>
                <div className='movie_card-title'>{data.name}</div>
                <div className='movie_card-desc'>{data.description.substring(0, 100)}...</div>
                            

            </div>
  )
}

export const MovieCard1 = ({data}) => {
    const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis qui, illum deleniti ut optio numquam culpa nobis perferendis fuga cupiditate beatae veniam. Veritatis est eaque nam nobis tempora quae, ullam, rerum dolorum totam mollitia molestiae tenetur recusandae voluptas explicabo quaerat id? Harum, veritatis consequuntur expedita neque ad iste nihil, laudantium dolorum veniam officia accusantium odit ullam molestiae excepturi pariatur! Officia tempora temporibus exercitationem? Optio, assumenda? Possimus excepturi odit tempore tenetur quidem id aliquam nemo illo exercitationem odio. Soluta commodi quos quisquam iusto placeat cumque perspiciatis ipsum quasi accusantium et, voluptatem esse molestiae vero voluptatibus voluptates rem recusandae vel doloribus at deleniti fugit sed eveniet nemo! Beatae, quam totam velit harum itaque in aut culpa voluptate praesentium laboriosam molestiae inventore, quibusdam libero quod sint consequatur rem. Iusto maxime totam in non, ipsum sequi obcaecati animi, ea velit impedit tempore aliquid aut sapiente laudantium nemo minima asperiores ad quod. Aspernatur officiis libero recusandae nisi error, vero harum, odio exercitationem velit modi laudantium autem iste nulla eos nostrum qui voluptates illum adipisci, sint facilis saepe assumenda! Similique perferendis necessitatibus distinctio nesciunt obcaecati ipsa, eius, vero, accusantium ex non dignissimos officiis cupiditate sequi inventore voluptas expedita. Adipisci maxime reiciendis quod eaque quidem quia expedita."

  return (

        <>
           <Link to={`/movie/details/${data.name}` } state={data} >
                <div className='movie_card-2' onMouseEnter={() => console.log("me")}>
                    <div className='movie_card-img'>
                                
                        <img src={img} alt="movie"/>
                        <AiOutlinePlayCircle className="icon"/>
                    </div>
                    <div className='movie_card-title'>{data.name}</div>
                    <div className='movie_card-desc'>{data.description.substring(0, 100)}...</div>
                    <div className='movie_card-actors'>
                        <div>
                            <img src={img2} alt="img"/>
                            <span> {data.actors[0].actorName}</span>
                        </div>
                        <div>
                            <img src={img2} alt="img"/>
                            <span>{data.actors[1].actorName}</span>
                        </div>
                    </div>
                                

                </div>
            </Link>

        </>
  )
}

  