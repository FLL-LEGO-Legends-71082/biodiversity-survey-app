import { useState } from 'react'
import ObservationCard from './components/ObservationCard'

function App() {

  const [searchText, setSearchText] = useState("")

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

  const filteredObservations = observations.filter(
    (observation) =>
      observation.species
        .toLowerCase()
        .includes(searchText.toLowerCase())
  )

  return (
    <div>

      <h1>FLL Biodiversity Explorer</h1>

      <input
        type="text"
        placeholder="Search species..."
        value={searchText}
        onChange={(event) =>
          setSearchText(event.target.value)
        }
      />

      <h2>Observations</h2>

      {filteredObservations.map((observation) => (
        <ObservationCard
          key={observation.id}
          observation={observation}
        />
      ))}

    </div>
  )
}

export default App