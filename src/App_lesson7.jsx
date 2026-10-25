import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import AddObservation from './pages/AddObservation'
import About from './pages/About'
import Navigation from './components/Navigation'
import './App.css'
import { useState } from 'react'

function App() {
  
  const [observations, setObservations] = useState([
  
    {
      id: 1,
      species: "Monarch Butterfly",
      scientificName: "Danaus plexippus",
      location: "Centennial Park",
      category: "Insect"
    },
    {
      id: 2,
      species: "American Robin",
      scientificName: "Turdus migratorius",
      location: "Patapsco Valley",
      category: "Bird"
    }
  ])

  return (
    <BrowserRouter>
      
      <Navigation />
      
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={<Explore observations={observations} />}
        />

        <Route
          path="/add"
          element={<AddObservation setObservations={setObservations} />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App