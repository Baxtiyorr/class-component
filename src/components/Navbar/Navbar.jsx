import { Link } from 'react-router-dom'
import logo from '../../assets/Icons/Logo.svg'








import './Navbar.scss'


const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar__content">
          <div className="navbar__content-links">
            <Link to={'/'}>
          <img src={logo} alt="CAMBLY"/>
            </Link>
          <ul>
            <li><Link to={'/tutors'}>Tutors</Link></li>
            <li><Link to={'/courses'}>Courses</Link></li>
            <li><Link to={'/groupLeesons'}>Group Lessons</Link></li>
            <li><Link to={'/resources'}>Resources</Link></li>
            <li><Link to={'/kids'}>Kids</Link></li>
            <li><Link to={'/business'}>Business</Link></li>
          </ul>

          </div>
          <div className="navbar__content-btns">
            <select className='language'>
              <option value="english">English</option>
              <option value="russion">Russion</option>
              <option value="uzbek">Uzbek</option>
            </select>
            <button className='log-btn'>Log in</button>
            <button className='sign-btn'>Sign up</button>
          </div>

        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
