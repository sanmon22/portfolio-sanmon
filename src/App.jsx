import { Toaster } from 'sonner'
import { Navbar } from '@/components/ui'
import { Greeting, About, Experience, Contact } from '@/components/sections'
import './App.css'

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <section className="innerWidth app">
        <Navbar />
        <Greeting />
        <About />
        <Experience />
        <Contact />
      </section>
    </>
  )
}

export default App
