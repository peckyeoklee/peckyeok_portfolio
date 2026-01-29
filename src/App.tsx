import { Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './Hero'
import Works from './Works'
import About from './About'
import Contact from './Contact'
import ProjectDetail from './ProjectDetail'

function App() {
  return (
    <Routes>
      {/* Home page with Hero, Works, About, and Contact sections */}
      <Route 
        path="/" 
        element={
          <>
            <Hero />
            <Works />
            <About />
            <Contact />
          </>
        } 
      />
      
      {/* Individual project detail pages */}
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
