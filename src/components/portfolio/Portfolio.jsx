import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/todoApp.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Tasks and time management app</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Msaad022/todo-app" className='btn' target='_blank'>Github</a>
            <a href="https://msaad022.github.io/todo-app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>قريباً إن شاء الله</h3>
          <div className="portfolio_item-cta">
            <a href="#portfolio" className='btn'>Github</a>
            <a href="#portfolio" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>قريباً إن شاء الله</h3>
          <div className="portfolio_item-cta">
            <a href="#portfolio" className='btn'>Github</a>
            <a href="#portfolio" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>قريباً إن شاء الله</h3>
          <div className="portfolio_item-cta">
            <a href="#portfolio" className='btn'>Github</a>
            <a href="#portfolio" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>قريباً إن شاء الله</h3>
          <div className="portfolio_item-cta">
            <a href="#portfolio" className='btn'>Github</a>
            <a href="#portfolio" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>قريباً إن شاء الله</h3>
          <div className="portfolio_item-cta">
            <a href="#portfolio" className='btn'>Github</a>
            <a href="#portfolio" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio