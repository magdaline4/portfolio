import './App.css'
import About from './components/About'
import Certificates from './components/Certificates'
import Header from './components/Hero'
import Navbar from './components/Navbar'
import CardsRow from './data/CardsRow'
import Projects from './data/Projects'
import Footer from './components/Footer';
import NormalSkills from './components/NormalSkills'
import TechnicalSkills from './components/TechnicalSkills'


function App() {
 
  return (
    <>
    <Navbar />
     <Header />
     <About/>
     <Projects/>
     <CardsRow/>
     <Certificates />
     <NormalSkills />
     <TechnicalSkills />
     <Footer />
    </>
  )
}

export default App
