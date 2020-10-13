import React, {useState, useEffect, useCallback} from 'react'
import {Redirect} from 'react-router-dom'
import Dropzone from 'react-dropzone'

import ErrorList from './ErrorList'

const ProfileEditForm = props => {
  const [userEditForm, setUserEditForm] = useState({
    email: "",
    profile_photo: "",
    username: ""
  })
  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    let body = new FormData()
    body.append("user[email]", userEditForm.email)
    body.append("user[profile_photo]", userEditForm.profile_photo)
    body.append("user[username]", userEditForm.username)

    fetch(`/api/v1/users/${props.match.params.id}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: body,
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
    event.preventDefault()
    setUserEditForm({
      ...userEditForm,
      [event.currentTarget.id]: event.currentTarget.value
    })
  };

  if (shouldRedirect) {
    return <Redirect to={`/users/${props.match.params.id}`} />
  }

    const handleFileUpload = (acceptedFiles) => {
    setUserEditForm({
      ...userEditForm,
      profile_photo: acceptedFiles[0]
    })
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-12 medium-10">
          <h2 className="text-black">Edit your profile</h2>
          <form onSubmit={handleSubmit}>
            <label className='text-black' htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={userEditForm.email}
              />
            <label className='text-black' htmlFor="profile_photo">Profile Photo:</label>
            <Dropzone onDrop={handleFileUpload}>
              {({getRootProps, getInputProps}) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some image here, or click to select the image you want!</p>
                  </div>
                </section>
              )}
            </Dropzone>
            <label className='text-black' htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={userEditForm.username}
              />
            <input className='button' type='submit' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileEditForm
