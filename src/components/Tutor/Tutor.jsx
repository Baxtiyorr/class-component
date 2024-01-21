import avatar from '../../assets/Images/avatar.png'

import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




import './Tutor.scss'

const Tutor = () => {
  return (
    <section>
      <div className="container">
        <div className="tutor__content">
        <div className="tutor__card-wrapper">
            <div className="tutor__card">
                <img src={avatar} alt="teacher" />
                <div className="name">
                    <h2>Joshua</h2>
                    <span><FaStar color='#FFC929' size={16}/> 4.90</span>
                </div>
                <h3 className='country'>United States</h3>
            </div>
            <div className="tutor__card">
                <img src={avatar} alt="teacher" />
                <div className="name">
                    <h2>Whitney</h2>
                    <span><FaStar color='#FFC929' size={16}/> 4.90</span>
                </div>
                <h3 className='country'>Australia</h3>
            </div><div className="tutor__card">
                <img src={avatar} alt="teacher" />
                <div className="name">
                    <h2>Nikola</h2>
                    <span><FaStar color='#FFC929' size={16}/> 4.80</span>
                </div>
                <h3 className='country'>United States</h3>
            </div><div className="tutor__card">
                <img src={avatar} alt="teacher" />
                <div className="name">
                    <h2>Alana</h2>
                    <span><FaStar color='#FFC929' size={16}/> 4.80</span>
                </div>
                <h3 className='country'>United Kingdom</h3>
            </div>  
        </div>

            <div className="choise">
            <h2 className='title'>Choose your own tutor</h2>
            <p>Choose the tutor that has the personality, professional experience, or focus area you need!</p>
            <button>
            Start learning <FaArrowRight/>
            </button>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Tutor
