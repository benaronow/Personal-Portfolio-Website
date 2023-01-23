import React from 'react'
import './portfolio.css'
import Stocks from '../../assets/Stocks.png'
import Image from '../../assets/Image.jpg'
import Food from '../../assets/Food.jpg'
import Maze from '../../assets/Maze.jpg'
import FloodIt from '../../assets/FloodIt.jpg'
import Website from '../../assets/Website.jpg'

const data = [
  {
    id: 1,
    image: Stocks,
    title: 'Stock Market and Twitter Correlation Analysis',
    github: 'https://github.com/benaronow/Stock-Market-and-Twitter-Correlation-Analysis',
    demo: 'https://youtube.com'
  },

  {
    id: 2,
    image: Image,
    title: 'Image Processor',
    github: 'https://github.com/benaronow/Image-Processor',
    demo: 'https://youtube.com'
  },

  {
    id: 3,
    image: Food,
    title: 'Food Delivery Service Prototype',
    github: 'https://github.com/benaronow/Food-Delivery-Service-Prototype',
    demo: 'https://youtube.com'
  },

  {
    id: 4,
    image: Maze,
    title: 'Maze Generation and Pathfinder Algorithm',
    github: 'https://github.com/benaronow/Maze-Generation-and-Pathfinder-Algorithm',
    demo: 'https://youtube.com'
  },

  {
    id: 5,
    image: FloodIt,
    title: 'Flood It Game Clone',
    github: 'https://github.com/benaronow/Flood-It-Game-Clone',
    demo: 'https://youtube.com'
  },

  {
    id: 6,
    image: Website,
    title: 'Personal Website (this website)',
    github: 'https://github.com/benaronow/Personal-Portfolio-Website',
    demo: 'https://youtube.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='section__title'>
        <h2>My Portfolio</h2>
      </div>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='item__image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='item__cta'>
                  <a href={github} className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Video Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio