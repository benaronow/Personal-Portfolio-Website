import React from 'react'
import Resume from '../../assets/Resumé.pdf'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className='cta'>
        <div className="header__socials">
          <a href="https://linkedin.com/in/benaronow" target="_blank" rel="noreferrer"><BsLinkedin size={30} /></a>
        </div>

        <a href={Resume} download className='btn btn-primary'>Download Resume</a>

        <div className="header__socials">
          <a href="https://github.com/benaronow" target="_blank" rel="noreferrer"><BsGithub size={30} /></a>
        </div>
    </div>
  )
}

export default CTA