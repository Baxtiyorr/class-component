import { FaArrowRight } from "react-icons/fa";
import user from '../../assets/Images/User.png'

import './Hero.scss'



const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero__content">
                <div className="hero__content-text">
                    <h1>
                    Online English classes with native speakers
                    </h1>
                    <button>
                    Get started <FaArrowRight size={16}/>
                    </button>
                </div>

                <img src={user} alt="user" />
            </div>
        </div>
      
    </div>
  )
}

export default Hero
