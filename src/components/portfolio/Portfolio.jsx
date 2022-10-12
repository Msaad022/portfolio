import './portfolio.css'
import IMG1 from '../../assets/todoApp.png'
import IMG2 from '../../assets/mega.png'
import IMG3 from '../../assets/shopping.png'
import IMG4 from '../../assets/us_them.png'

const tasks = [
  {
    id: 1,
    image: IMG1,
    title: 'You can create / update / delete a list/sublist And I used local storage to save the lists offline and restore it anytime',
    github: 'https://github.com/Msaad022/todoApp',
    livedemo: 'https://todo-list-eight-black.vercel.app/' 
  },
  {
    id: 2,
    image: IMG2,
    title: 'Mega is an application that I tried to show my skills in,I applied some concepts like responsive web design , browser prefixes and so on.',
    github: 'https://github.com/Msaad022/mega',
    livedemo: 'https://mega-two.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Shopping is an e-commerce site that simulates global websites to view and buy products using real money',
    github: 'https://github.com/Msaad022/shopping_sanity',
    livedemo: 'https://shopping-sanity.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'The We and They application aims to reach the best free treatment for children with special needs...',
    github: 'https://github.com/Msaad022/us-them',
    livedemo: 'https://us-them.vercel.app/'
  }
  ]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          tasks.map(({id, image, title, github, livedemo }) => (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={livedemo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio