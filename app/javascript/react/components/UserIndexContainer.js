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

let userTiles = users.map((user) => {
  return (
    <UserTile
      key={user.id}
      id={user.id}
      email={user.email}
      profilePhoto={user.profile_photo}
    />
  )
})

  return (
    <h1>{userTiles}</h1>
  )
}

export default UserIndexContainer
