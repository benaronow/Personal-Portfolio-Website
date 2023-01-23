import React from 'react'
import './about.css'
import Image from '../../assets/littleme.jpg'
import {IoPerson} from 'react-icons/io5'
import {IoSchool} from 'react-icons/io5'
import {BsFileEarmarkCodeFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <div className='section__title'>
        <h2>About Me</h2>
      </div>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Image} alt="About" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <IoPerson className='about__icon'/>
              <h5>Personality</h5>
              <small>Hardworking, good problem solver, quick learner</small>
            </article>

            <article className='about__card'>
              <IoSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Junior Candidate for BS in Computer Science</small>
            </article>

            <article className='about__card'>
              <BsFileEarmarkCodeFill className='about__icon'/>
              <h5>Projects</h5>
              <small>Projects completed in 8 different languages</small>
            </article>
          </div>

          <div className='about__contact'>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About