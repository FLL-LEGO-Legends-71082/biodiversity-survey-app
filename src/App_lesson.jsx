import { useState } from 'react'
import './App.css'
import ObservationCard from './components/ObservationCard'

function App() {

  const observations = [
    {
      id: 1,
      species: "Monarch Butterfly",
      location: "Centennial Park"
    },
    {
      id: 2,
      species: "American Robin",
      location: "Patapsco Valley State Park"
    },
    {
      id: 3,
      species: "Eastern Gray Squirrel",
      location: "Centennial Park"
    }
  ]

  return (
    <div>

      <h1>FLL Biodiversity Explorer</h1>

      <h2>Recent Observations</h2>

      {observations.map((observation) => (
        <ObservationCard
          species={observation.species}
          location={observation.location}
        />
      ))}

    </div>
  )
}

export default App