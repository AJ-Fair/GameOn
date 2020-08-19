import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

import ErrorList from './ErrorList'

const ProfileEditForm = props => {
  const [formVals, setFormVals] = useState({
    email: "",
    profile_photo: "",
  })
  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    fetch(`/api/v1/users/${props.match.params.id}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(formVals),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if(response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(parsedData => {
      if (parsedData.errors){
      setErrors(parsedData.errors)
      } else {
        setShouldRedirect(true)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const handleChange = event => {
    setFormVals({
      ...formVals,
      [event.currentTarget.id]: event.currentTarget.value
    })
  };

  if (shouldRedirect) {
    return <Redirect to={`/users/${props.match.params.id}`} />
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-12 medium-10">
          <h2 className="text-black">Edit your profile</h2>
          <form onSubmit={handleSubmit}>
          </form>
        </div>
      </div>
    </div>
  )
}
