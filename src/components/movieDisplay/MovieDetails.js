import React ,{useEffect}from 'react'
import images from '../../assets/images'

import './movieDetails.scss'
const MovieDetails = (props) => {
let cat1= "comedy"
let cat2 = "luck"
let cat3 = "Document"
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

        <p>"Ea laboris magna non sit fugiat aliquip ipsum ipsum sint aliquip fugiat ea id. In mollit voluptate officia ad duis irure elit ad quis ullamco laborum anim ad. Qui magna Lorem est amet anim sit in laborum commodo deserunt anim.\r\nNon velit proident ipsum reprehenderit laborum dolore aliqua. Irure est quis eu cillum aute do officia enim aliquip minim mollit. Aliqua labore nisi commodo aliqua officia nostrud ex voluptate adipisicing ea et in adipisicing duis.\r\nEt do aliqua cupidatat ad quis eiusmod ullamco cillum aute ipsum aliquip magna officia adipisicing. Veniam ut nostrud et commodo pariatur id consequat mollit officia veniam. Esse dolor eiusmod culpa labore consectetur. Aliquip commodo labore aute deserunt fugiat incididunt officia duis.\r\nLaboris ex aute sint amet amet laboris laboris ut. Non tempor velit do minim mollit et amet. Non elit aute consectetur adipisicing. Reprehenderit velit eiusmod ipsum cillum occaecat non incididunt laboris labore aute dolor. Eiusmod amet dolore magna duis reprehenderit ullamco occaecat ea ipsum duis ad consequat nisi non. Reprehenderit Lorem ad et nostrud id id ea pariatur excepteur qui duis duis.\r\nTempor sit mollit irure laborum proident velit aliquip pariatur pariatur magna veniam et et. Id qui aute voluptate tempor in quis commodo commodo eiusmod ut. Lorem non eiusmod exercitation quis labore labore est consectetur.\r\n"</p>
      </div>

      </div>

      
    </section>
  )
}

export default MovieDetails
