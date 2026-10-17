import { useState } from 'react'
import './App.css'
import ObservationCard from './components/ObservationCard'

function App() {

  const observations = [
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
    location: "Patapsco Valley State Park",
    category: "Bird"
  },
  {
    id: 3,
    species: "Eastern Gray Squirrel",
    scientificName: "Sciurus carolinensis",
    location: "Centennial Park",
    category: "Mammal"
  }
]
  return (
    <div>

      <h1>FLL Biodiversity Explorer</h1>

      <h2>Recent Observations</h2>

      {observations.map((observation) => (
        <ObservationCard
          key={observation.id}
          observation = {observation}
        />
      ))}

    </div>
  )
}

export default App