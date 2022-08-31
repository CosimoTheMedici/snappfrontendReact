import React from 'react'
import {CgFacebook} from 'react-icons/cg';
import { GrLinkedinOption, GrTwitter } from 'react-icons/gr'
import { TiSocialInstagram} from 'react-icons/ti'

import './footer.scss'
const Footer = () => {
  return (
    <section className='footer'>
        <div>
            <span className='footer_message-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua</span>
            <span className='footer_message-right'>Copyright @ Snapmoviehub 2022</span>
            <span className='footer_message-icons fb'><CgFacebook/></span>
            <span className='footer_message-icons ln'><GrLinkedinOption /></span>
            <span className='footer_message-icons tw'><GrTwitter /></span>
            <span className='footer_message-icons in'><TiSocialInstagram /></span>
        </div>
    </section>
  )
}

export default Footer