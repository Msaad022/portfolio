import CV from '../../assets/mohamed_saad_cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="https://drive.google.com/file/d/1P1T6eoNLJQfsj3VB4IDU1BEixZsHPZer/view?usp=sharing" className='btn btn-primary'>Live Demo</a>
    </div>
  )
}

export default CTA