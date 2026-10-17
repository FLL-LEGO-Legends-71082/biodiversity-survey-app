import '../App.css'
function ObservationCard({ observation }) {

  return (
    <div className='app'>

      <h3>
        {observation.species}
      </h3>

      <p>
        Category: {observation.category}
      </p>

      <p>
        Location: {observation.location}
      </p>

    </div>
  )
}

export default ObservationCard