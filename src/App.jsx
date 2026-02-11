import Navbar from "./componentes/Navbar"
import Hero from "./componentes/Hero"
import About from "./componentes/About"
import Projects from "./componentes/Projects"
import Skills from "./componentes/Skills"
import Contact from "./componentes/Contact"
import Footer from "./componentes/Footer"
import "./App.css"

function App(){
  return(
    <>
      <Navbar></Navbar>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App