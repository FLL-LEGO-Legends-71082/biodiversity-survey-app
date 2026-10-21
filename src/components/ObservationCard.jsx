
function ObservationCard({ observation }) {

  return (
    <div className="card-header">

      <h3>
        {observation.species}
      </h3>

      <span className="category">
        {observation.category}
      </span>

      <p>
        Location: {observation.location}
      </p>

    </div>
  )
}

export default ObservationCard