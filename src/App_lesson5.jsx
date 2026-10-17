import { useState } from 'react'
import ObservationCard from './components/ObservationCard'

function App() {

  const [observations, setObservations] = useState([
    {
      id: 1,
      species: "Monarch Butterfly",
      location: "Centennial Park",
      category: "Insect"
    },
    {
      id: 2,
      species: "American Robin",
      location: "Patapsco Valley",
      category: "Bird"
    }
  ])

  const [species, setSpecies] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    const newObservation = {
      id: Date.now(),
      species: species,
      location: location,
      category: category
    }

    setObservations([
      ...observations,
      newObservation
    ])

    setSpecies("")
    setLocation("")
    setCategory("")
  }

  return (
    <div>

      <h1>FLL Biodiversity Explorer</h1>

      <form onSubmit={handleSubmit}>

        <h2>Add Observation</h2>

        <input
          type="text"
          placeholder="Species name"
          value={species}
          onChange={(event) =>
            setSpecies(event.target.value)
          }
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(event) =>
            setLocation(event.target.value)
          }
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
        />

        <button type="submit">
          Add Observation
        </button>

      </form>

      <h2>Recent Observations</h2>

      {observations.map((observation) => (
        <ObservationCard
          key={observation.id}
          observation={observation}
        />
      ))}

    </div>
  )
}

export default App