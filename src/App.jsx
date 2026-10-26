import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Achievements /></Reveal>
      <Reveal><Certifications /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </div>
  )
}

export default App