function ObservationCard({ observation }) {
  return (
    <div>
      <h3>{observation.species}</h3>

      <p>
        <i>{observation.scientificName}</i>
      </p>

      <p>Category: {observation.category}</p>
      <p>Location: {observation.location}</p>
    </div>
  )
}

export default ObservationCard