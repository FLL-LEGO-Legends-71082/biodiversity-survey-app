import { useState } from "react"

function AddObservation({setObservations}) {
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

    setObservations(previous => [
      ...previous,
      newObservation
    ])

    setSpecies("")
    setLocation("")
    setCategory("")
  }  
  return (
    <div>
      <h1> Add Observation</h1>  
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
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select a category</option>
            <option value="Bird">Bird</option>
            <option value="Mammal">Mammal</option>
            <option value="Insect">Insect</option>
            <option value="Plant">Plant</option>
            <option value="Reptile">Reptile</option>
            <option value="Amphibian">Amphibian</option>
          </select>
        </div>

        <button className="primary-button" type="submit">
          + Add Observation
        </button>

      </form>      
    </div>
  )
}

export default AddObservation