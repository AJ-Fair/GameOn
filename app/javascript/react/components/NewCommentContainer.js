import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import NewCommentForm from './NewCommentForm'

const NewCommentContainer = props => {
  const postId = props.postId
  const getPostPageInfo = props.getPostPageInfo
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handleFormSubmit = formData => {
    fetch(`/api/v1/posts/${postId}/comments`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Accept': "application/json",
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

  if(shouldRedirect) {
    return <Redirect to={`/posts/`} />
  }

  return(
    <div>
      <NewCommentForm
        handleFormSubmit={handleFormSubmit}
        postId={postId}
      />
    </div>
  )
}

export default NewCommentContainer
