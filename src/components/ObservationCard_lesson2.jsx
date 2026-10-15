function ObservationCard({
  species,
  scientificName,
  location,
  observer,
  date,
  image
}) {
  return (
    <div>

      <img
        src={image}
        alt={species}
        width="250"
      />

      <h3>{species}</h3>

      <p>
        <i>{scientificName}</i>
      </p>

      <p>📍 {location}</p>
      <p>Observer: {observer}</p>
      <p>Date: {date}</p>

    </div>
  )
}

export default ObservationCard