import React, { useEffect, useState } from 'react'


const UserIndexContainer = props => {
const [users, setUsers] = useState([]);

const [searchTerm, setSearchTerm] = useState()

useEffect(() => {
  fetch("/api/v1/users.json")
  .then(response => {
    if (response.ok) {
      return response
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage)
      throw error
    }
  })
  .then(response => response.json())
  .then(usersBody => {
    const usersArr = usersBody
    setUsers(usersArr)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
}, [])

  return (
    <h1>This is a test line</h1>
  )
}

export default UserIndexContainer
