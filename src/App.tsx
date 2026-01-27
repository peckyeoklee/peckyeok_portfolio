import { Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './Hero'
import Works from './Works'
import ProjectDetail from './ProjectDetail'

function App() {
  return (
    <Routes>
      {/* Home page with Hero and Works sections */}
      <Route 
        path="/" 
        element={
    <>
      <Hero />
      <Works />
    </>
        } 
      />
      
      {/* Individual project detail pages */}
      <Route path="/project/:slug" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
