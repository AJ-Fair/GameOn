import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

import NewPostForm from './NewPostForm'

const NewPostContainer = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [newPost, setNewPost] = useState({})

  const handleFormSubmit = formData => {
    fetch('/api/v1/posts', {
      credentials: "same-origin",
      method: 'POST',
      body: JSON.stringify(formData),
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
    }
      setNewPost(parsedData)
      setShouldRedirect(true)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  if(shouldRedirect) {
    return <Redirect to={`/posts/${newPost.id}`} />
  }

  return(
    <NewPostForm
      handleFormSubmit={handleFormSubmit}
    />
  )
}

export default NewPostContainer
