function ObservationCard({ observation, onSelect }) {
  return (
    <div>
      <h3>{observation.species}</h3>

      <p>
        <i>{observation.scientificName}</i>
      </p>

      <p>Category: {observation.category}</p>
      <p>Location: {observation.location}</p>
       <button
        onClick={() => onSelect(observation.species)}
      >
        Select
      </button>
    </div>
  )
}

export default ObservationCard