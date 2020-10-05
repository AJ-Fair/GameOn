import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

import ErrorList from './ErrorList'

const CommentEditForm = props => {
  const [comment, setComment] = useState({})
  const [errors, setErrors] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    fetch(`/api/v1/comments/${props.match.params.id}/edit`)
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
      setComment(parsedData)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const handleChange = event => {
    setComment({
      ...comment,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch(`/api/v1/comments/${props.match.params.id}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(comment),
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

  if (shouldRedirect) {
    return <Redirect to={`/posts/${comment.post.id}`} />
  }

  return (
    <div className="grid-container">
      <div className='grid-x grid-margin-x align-center'>
        <div className="cell small-12 medium-10">
          <h4>Edit your Comment!</h4>
          <form onSubmit={handleSubmit}>
            <ErrorList
              errors={errors}
            />

          <label htmlFor="ign" className="text-black">In-game name:</label>
            <input
              type="text"
              name="ign"
              id="ign"
              onChange={handleChange}
              value={comment.ign}
            />

          <label htmlFor="body" className="text-black">Comment:</label>
            <textarea
              name="body"
              id="body"
              onChange={handleChange}
              value={comment.body}
            />

            <input className="button" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default CommentEditForm
