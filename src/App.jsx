import { useState } from 'react'
import ObservationCard from './components/ObservationCard'
import './App.css'

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
    
    if (
    species.trim() === "" ||
    location.trim() === "" ||
    category.trim() === ""
    ) {
      alert("Please fill in all fields.")
      return
    }
    
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
    <div className="app">
      <header className="app-header">
        <h1>🌿Biodiversity Explorer</h1>
      <p>Discover and document biodiversity in our community</p>
      </header>
      
      <form className="observation-form" onSubmit={handleSubmit}>

        <h2>Add Observation</h2>
        
        <div className="form-group">
          <label>Species</label>
          <input
          type="text"
          placeholder="Species name"
          value={species}
          onChange={(event) =>
            setSpecies(event.target.value)
          }
          />
          <label>Location</label>
          <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(event) =>
            setLocation(event.target.value)
          }
          />
          <label>Category</label>
          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            <option value="Bird">
              Bird
            </option>

            <option value="Mammal">
              Mammal
            </option>

            <option value="Insect">
              Insect
            </option>

            <option value="Plant">
              Plant
            </option>

            <option value="Reptile">
              Reptile
            </option>

            <option value="Amphibian">
              Amphibian
            </option>
          </select>
        </div>

        

        <button className="primary-button" type="submit">
          + Add Observation
        </button>

      </form>
      
      <h2>Recent Observations</h2>
      <div className="observation-grid">
       {observations.map((observation) => (
        <ObservationCard
          key={observation.id}
          observation={observation}
        />
       ))}
      </div>

    </div>
  )
}

export default App