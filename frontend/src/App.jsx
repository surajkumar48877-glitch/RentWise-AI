import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // LocalStorage से dark mode preference load करो
    const saved = localStorage.getItem('darkMode')
    return saved === 'true'
  })

  // जब dark mode change हो, localStorage में save करो
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 flex flex-col">

          {/* Navbar हर page पर दिखेगा */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main content - यहाँ pages load होंगे */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>

          {/* Footer हर page पर दिखेगा */}
          <Footer />

        </div>
      </div>
    </Router>
  )
}

export default App