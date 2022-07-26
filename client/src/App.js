import './App.css'
import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Authors from './components/Authors'
import Mangas from './components/Mangas'
import Reviews from './components/Reviews'
import Nav from './components/Nav'
import Home from './pages/Home'
import axios from 'axios'

function App() {
  const [manga, setManga] = useState([])
  const [authors, setAuthor] = useState([])

  const getManga = async () => {
    const res = await axios.get(`http://localhost:3001/mangas`)
    setManga(res.data)
  }
  useEffect(() => {
    getManga()
    console.log(getManga)
  }, [])

  const getAuthor = async () => {
    const res = await axios.get(`http://localhost:3001/authors`)
    setAuthor(res.data)
  }
  //npm i concurrently
  useEffect(() => {
    getAuthor()
    console.log(getAuthor)
  }, [])

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mangas" element={<Mangas manga={manga} />} />
          <Route path="/authors" element={<Authors authors={authors} />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
