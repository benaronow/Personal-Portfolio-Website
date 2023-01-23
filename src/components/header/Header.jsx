import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <div className="name__box">
          <h5>Hello, I'm</h5>
          <h2>Ben Aronow</h2>
        </div>

        <div className='me'>
          <img src={Me} alt="Home" />
        </div>

        <CTA />
      </div>
    </header>
  )
}

export default Header