import React, { useState } from 'react'

import './scrollButton.scss'
import { CgArrowLongUp } from 'react-icons/cg'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const handleToggleVisible = () => {
    const scrollClicked = document.documentElement.scrollTop;
    scrollClicked ? setVisible(true) : setVisible(false)
  };
  
  const handleScroll = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
      
    });
  };
  
  window.addEventListener('scroll', handleToggleVisible);

  return (
    <section className="section_scroll">
      <button 
        style={{display: visible ? 'inline' : 'none'}}
        onClick={handleScroll}
      >
        <CgArrowLongUp className='section_scroll-arrow'/>
      </button>
    </section>
  )
}

export default ScrollButton
