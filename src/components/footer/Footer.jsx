import React from 'react'
import './footer.css'
import {IoLogoFacebook} from 'react-icons/io5'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Ben Aronow</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><IoLogoFacebook /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><FaTwitterSquare /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ben Aronow. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer