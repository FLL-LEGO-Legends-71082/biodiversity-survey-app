import { useEffect, useState } from 'react'

function ApiPractice() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      )

      const data = await response.json()
      setUsers(data)
    }

    loadUsers()
  }, [])

  return (
    <div>
      <h1>API Practice</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default ApiPractice