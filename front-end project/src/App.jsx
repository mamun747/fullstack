import './App.css'
import Carousel from './Components/Carousel'
import Chillsbay from './Components/Chillsbay'
import Footer from './Components/Footer'
import Gallary from './Components/Gallary'
import Hero from './Components/Hero_Area'
import ImgSection from './Components/ImgSection'
import NavbarSection from './Components/Navbar'
import ThingsToDo from './Components/ThingsToDo'
function App() {

  return (
    <>
    <NavbarSection/>
    <Hero/>
    <ImgSection/>
    <ThingsToDo/>
    <Chillsbay/>
    <Carousel/>
    <Gallary/>
    <Footer/>
    </>
  )
}

export default App