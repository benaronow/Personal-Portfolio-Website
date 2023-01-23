import React from 'react'
import './navigation.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {AiFillProject} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'
import {useState} from 'react'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#home');

  // const setActiveIcon = () => {
  //   var date = new Date();
  //   const time = date.getMilliseconds;
  //   while (true) {
  //     date = new Date();
  //     if (time + 1000 <= date.getMilliseconds) {
  //       setActiveNav('#home');
  //       return;
  //     }
  //   }
  // }

  // window.addEventListener('scroll', setActiveIcon);

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillProject /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
    </nav>
  )
}

export default Navigation