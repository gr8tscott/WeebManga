import './App.css'
import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Authors from './components/Authors'
import Mangas from './components/Mangas'
import Reviews from './components/Reviews'
import Nav from './components/Nav'
import Home from './pages/Home'
import EditReviews from './components/EditReviews'
import PageReader from './components/PageReader'
import axios from 'axios'

function App() {
  const [mangas, setMangas] = useState([])
  const [authors, setAuthor] = useState([])
  const [reviews, setReviews] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const getManga = async () => {
    const res = await axios.get(`http://localhost:3001/mangas`)
    setMangas(res.data)
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
      <div className="leftbanner"></div>
      <div className="rightbanner"></div>
      <div className="bannerimage"></div>

      <header className="nav">
        <Nav />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mangas" element={<Mangas mangas={mangas} />} />
          <Route
            path="/pagereader/:id/:index"
            element={
              <PageReader
                mangas={mangas}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            }
          />
          <Route path="/authors" element={<Authors authors={authors} />} />
          <Route
            path="/reviews"
            element={<Reviews reviews={reviews} setReviews={setReviews} />}
          />
          <Route
            path="/editreviews/:id/:index"
            element={<EditReviews reviews={reviews} setReviews={setReviews} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
