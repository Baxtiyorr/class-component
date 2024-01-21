import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import Plan from "../Plan/Plan"
import Tutor from "../Tutor/Tutor"

import './HomePage.scss'

const HomePage = () => {
  return (
    <>
      <header>
            <Navbar/>
            <Hero/>
      </header>

      <main>
        <Tutor/>
        <Plan/>
      </main>
    </>
  )
}

export default HomePage
