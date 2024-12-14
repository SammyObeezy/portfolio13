import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import BrowserRouter and Routes
import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      {/* Wrap the Routes in Router */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Use 'element' instead of 'component' */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
