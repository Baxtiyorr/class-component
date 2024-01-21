import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "../components/Pages/HomePage"


const MainRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default MainRoutes
