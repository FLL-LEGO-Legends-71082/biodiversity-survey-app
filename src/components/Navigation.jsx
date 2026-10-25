import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='navigation'>

      <Link to="/">
        Home
      </Link>

      <Link to="/explore">
        Explore
      </Link>

      <Link to="/add">
        Add Observation
      </Link>

      <Link to="/inaturalist">
        iNaturalist      
      </Link>

      <Link to="/map">
        Map
      </Link>

      <Link to="/about">
        About
      </Link>

    </nav>
  )
}

export default Navigation