import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ObservationCard from './components/ObservationCard'

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState("None")
  const [observationCount, setObservationCount] = useState(0)
  const [searchText, setSearchText] = useState("")
  return (
    <div>
      <h1>FLL Biodiversity Explorer</h1>

      <h2>Search Species</h2>
      
      <input
        type="text"
        placeholder="Search species..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}/>
      
      <p>Searching for: {searchText}</p>
      
      <h2>Choose a Species</h2>
      
      <button onClick={() => setSelectedSpecies("Monarch Butterfly")}>
        Monarch Butterfly
      </button>
      
      <button onClick={() => setSelectedSpecies("American Robin")}>
        American Robin
      </button>
      
      <button onClick={() => setSelectedSpecies("Eastern Gray Squirrel")}>
        Eastern Gray Squirrel
      </button>
      
      <h2>Selected Species</h2>
      <p>{selectedSpecies}</p>
      
      <h2>Observations Collected</h2>
      <p>{observationCount}</p>
      
      <button onClick={() =>setObservationCount(observationCount + 1)}>
        Add Observation
      </button>
      <p></p>
      <button onClick={() => setObservationCount(0)}>
        Reset
      </button>

    </div>
  )
}
export default App