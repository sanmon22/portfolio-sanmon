import { Toaster } from 'sonner'
import Greeting from "./components/greeting/Greeting"
import Navbar from "./components/navbar/Navbar"
import './App.css'
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <section className="innerWidth app">
        <Navbar />
        <Greeting />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </section>
    </>
  )
}

export default App
