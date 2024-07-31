import { useState } from 'react'
import Hero from './Components/Hero/Hero'
import Accordian from './Components/Accordian/Accordian'
import Experience from './Components/Experience/Experience'
import Tour from './Components/Tour/Tour'
import Blogpost from './Components/Blogpost/Blogpost'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Router,Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Hotels from './Pages/Hotels'
import News from './Pages/News'
import image1122 from "../public/Images/tour5.png"
import Newshero from './Components/Hero/Newshero'
import Navigation from './Components/Navigation/Navigation'








function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      
   <Navigation/>
   </div>
     
    
    
    
    
        <Routes>
          <Route path='/' element={<Home name="Tours & Travels" logo="Hepta" />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/hotels' element={<Hotels name="Our Hotels" logo="Hepta" />} />
          <Route path='/news' element={<News />} />
        </Routes>
      
   
    </>
  )
}

export default App
