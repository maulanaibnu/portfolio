import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navbar } from './components/Navbar.jsx'
import { About } from './components/About.jsx'
import { Skills } from './components/Skills.jsx'
import { Projects } from './components/Projects.jsx'
import { Contact } from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className= "container mx-auto px-4">
    <Navbar />
    <App />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  </StrictMode>,
)
