import { IoMdCheckmark } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";



import './Plan.scss'


const Plan = () => {
  return (
    <section>
      <div className="container">
        <div className="plan__content">
            <h2 className="plan__content-title">Pick the plan that works for you</h2>
            <div className="plan__card-wrapper">
                <div className="plan__card">
                    <div className="plan__card-text">
                        <h2>Complete</h2>
                    <h3 style={{marginBottom: '28px'}}>Full access to all of Cambly</h3>
                    <h3 style={{marginBottom:'18px'}}><IoMdCheckmark size={24}/>Our most comprehensive experience</h3>
                    <h3 style={{marginBottom:'18px'}}><IoMdCheckmark size={24}/>Practice 1:1 or in a group</h3>
                    <h3 style={{marginBottom:'60px'}}><IoMdCheckmark size={24}/>Schedule ahead or on demand</h3>
                    </div>
                    
                    <div className="price">
                        <h4>Starting from</h4>
                        <h5><span>$44</span>/ month</h5>
                        <button>Sign up <FaArrowRight/></button>
                    </div>
                </div>
                <div className="plan__card">
                    <div className="plan__card-text">
                        <h2>Group</h2>
                    <h3 style={{marginBottom: '28px'}}>Only group lessons</h3>
                    <h3 style={{marginBottom:'18px'}}><IoMdCheckmark size={24}/>Real-world conversation experience</h3>
                    <h3 style={{marginBottom:'18px'}}><IoMdCheckmark size={24}/>Work with a tutor and 1-2 other students</h3>
                    <h3 style={{marginBottom:'60px'}}><IoMdCheckmark size={24}/>For adults 21+</h3>
                    </div>
                    
                    <div className="price">
                        <h4>Starting from</h4>
                        <h5><span>$19</span>/ month</h5>
                        <button>Sign up <FaArrowRight/></button>
                    </div>
                </div>
                <div className="plan__card">
                    <div className="plan__card-text">
                        <h2>Kids</h2>
                    <h3 style={{marginBottom: '28px'}}>For kids under 18</h3>
                    <h3 style={{marginBottom:'18px'}}><IoMdCheckmark size={24}/>1:1 time with specialized tutors</h3>
                    <h3 style={{marginBottom:'18px'}}><IoMdCheckmark size={24}/>Beginner to advanced courses available</h3>
                    <h3 style={{marginBottom:'60px'}}><IoMdCheckmark size={24}/>Fun games and activities</h3>
                    </div>
                    
                    <div className="price">
                        <h4>Starting from</h4>
                        <h5><span>$44</span>/ month</h5>
                        <button>Sign up <FaArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Plan
