import React, { useState } from 'react'

import NewReviewForm from './NewCommentForm'

const NewCommentContainer = props => {
  const post_id = props.post_id
  const getPostPageInfo = props.getPostPageInfo

  const handleFormSubmit = formData => {
    fetch(`/api/v1/posts/${post_id}/comments`, {
      credentials: "same-origin",
      method: "POST",
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
      } else {
        getGamePageInfo()
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return(
    <div>
      <NewCommentForm
        handleFormSubmit={handleFormSubmit}
        post_id={post_id}
      />
    </div>
  )
}
