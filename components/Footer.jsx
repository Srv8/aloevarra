import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 SRV SoRandom All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram url= "https://www.instagram.com/im_souravde/"/>
        <AiOutlineTwitter />
        <AiFillLinkedin />
      </p>
    </div>
  )
}

export default Footer