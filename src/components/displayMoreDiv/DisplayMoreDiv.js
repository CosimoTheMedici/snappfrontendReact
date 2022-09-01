import React from 'react'
import { Link } from 'react-router-dom';

import './displayMoreDiv.scss';
const DisplayMoreDiv = () => {
  return (
    <section className="section_main">
        <div className='section_main-button'>
            <button className='section_main-button-button'>
                <Link to="/all/movies">
                <span className='section_main-button-span'>view all</span>
                </Link>
            </button>
        </div>
        
    </section>
  )
}

export default DisplayMoreDiv
