import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/mohamed-saad-46178b235" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Msaad022" target='_blank'><FaGithub/></a>
      <a href="#" target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials