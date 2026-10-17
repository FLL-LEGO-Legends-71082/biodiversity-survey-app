
import ObservationCard from './components/ObservationCard'
import monarchImage from './assets/monarch.jpg'


function App() {
  return (
    <div>
      <h1>FLL Biodiversity Explorer</h1>

      <p>
        Discover and document biodiversity in our community.
      </p>

      <h2>Recent Observations</h2>

      <ObservationCard
        species="Monarch Butterfly"
        scientificName="Danaus plexippus"
        location="Centennial Park"
        observer="FLL Team"
        date="September 20, 2026"
        image={monarchImage}
      />

      
    </div>
  )
}
export default App