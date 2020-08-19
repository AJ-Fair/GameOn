import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const UserShowContainer = props => {
  const [user, setUser] = useState({
    email: "",
    profile_photo: {url: ''},
    posts: [],
    id: null
  })

  const [current, setCurrent] = useState({
    id: null,
    email: "",
    profile_photo: "",
    posts: []
  })


  useEffect(() => {
    let userId = props.match.params.id
    fetch('/api/v1/users/' + userId, {
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
    })

    .then(response => response.json())
    .then(parsedData => {
      setUser(parsedData.target)
      setCurrent(parsedData.current)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let postLibrary = user.posts.map((post) => {
    return (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    )
  })

  let editProfile

  if (current.id === user.id) {
    debugger
    editProfile =
    <div className='grid-x grid-margin-x'>
      <div className='button success cell small-3 text-center'>
        <Link to={`/users/${user.id}/edit`}>Edit Profile</Link>
      </div>
    </div>
  }


  return (
    <div className="grid-container bg-white">
      <div className="grid-x grid-margin-x grid-padding-y">
        <div className="cell small-3">
          <img className="user-show-profile-photo" src={user.profile_photo} />
        </div>
        <div className="cell auto">
          <h2>{user.email}</h2>
        </div>
        <div className="cell small-12">
          <h2>Game Postings</h2>
          <ul>
            {postLibrary}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserShowContainer
