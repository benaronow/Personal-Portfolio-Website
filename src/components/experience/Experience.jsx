import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <div className='section__title'>
        <h2>My Experience</h2>
      </div>
      
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='frontend__content'>
            <article className='frontend__details'>
              <BsBookmarkCheckFill className='experience__icon'/>
              <div>
                <h4>HTML</h4>
                <small className='frontend__level'>Basic</small>
              </div>
            </article>

            <article className='frontend__details'>
              <BsBookmarkCheckFill className='experience__icon'/>
              <div>
                <h4>CSS</h4>
                <small className='frontend__level'>Basic</small>
              </div>
            </article>

            <article className='frontend__details'>
              <BsBookmarkCheckFill className='experience__icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='frontend__level'>Intermediate</small>
              </div>
            </article>

            <article className='frontend__details'>
              <BsBookmarkCheckFill className='experience__icon'/>
              <div>
                <h4>React</h4>
                <small className='frontend__level'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='backend__content'>
            <article className='backend__details'>
              <BsBookmarkCheckFill className='experience__icon'/>
              <div>
                <h4>Java</h4>
                <small className='backend__level'>Advanced</small>
              </div>
            </article>

            <article className='backend__details'>
              <BsBookmarkCheckFill className='experience__icon'/>
              <div>
                <h4>Python</h4>
                <small className='backend__level'>Intermediate</small>
              </div>
            </article>

            <article className='backend__details'>
              <BsBookmarkCheckFill className='experience__icon'/>
              <div>
                <h4>SQL</h4>
                <small className='backend__level'>Intermediate</small>
              </div>
            </article>

            <article className='backend__details'>
              <BsBookmarkCheckFill className='experience__icon'/>
              <div>
                <h4>Flask</h4>
                <small className='backend__level'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience