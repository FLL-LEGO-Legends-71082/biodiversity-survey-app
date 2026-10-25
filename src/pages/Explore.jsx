import ObservationCard from "../components/ObservationCard"
import { useState } from "react"

function Explore({observations}) {
  
  const [searchText, setSearchText] = useState("")

  const filteredObservations = observations.filter(
    (observation) =>
      observation.species
        .toLowerCase()
        .includes(searchText.toLowerCase())
  )

  return (
    <div className="page">

      <h1>Explore Species</h1>

      <input
        type="text"
        placeholder="Search species..."
        value={searchText}
        onChange={(event) =>
          setSearchText(event.target.value)
        }
      />

      <div className="observation-grid">

        {filteredObservations.map((observation) => (
          <ObservationCard
            key={observation.id}
            observation={observation}
          />
        ))}

      </div>

    </div>
  )
}


export default Explore