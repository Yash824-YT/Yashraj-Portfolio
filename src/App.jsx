import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Achievement from './Pages/Achievement'
import Certificates from './Pages/Certificates'
import Contact from './Pages/Contact'
import Education from './Pages/Education'
import Experience from './Pages/Experience'
import Hero from './Pages/hero'
import Project from './Pages/Project'
import Resume from './Pages/Resume'
import Skill from './Pages/Skill'

function App() {
  return (
    <>
      <Navbar />
        <Hero />
        <About />
        <Skill />
        <Project />
        <Experience />
        <Certificates />
        <Education />
        <Achievement />
        <Resume />
        <Contact />
      <Footer />
    </>
  )
}

export default App
