import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'

const commentTile = props => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const ign = props.ign
  const body = props.body
  const commentUser = props.commentUser
  const currentUser = props.currentUser

  const deleteComment = (event) => {
      fetch(`/api/v1/comments/${props.id}`, {
        credentials: "same-origin",
        method: "DELETE",
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
          props.getPostPageInfo()
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  let editDelete

  if (currentUser && currentUser.id === commentUser) {
    editDelete =
    <div className="grid-x grid-margin-x">
      <div className='button success cell small-2 text-center'>
        <Link to={`/comments/${props.id}/edit`}>Edit</Link>
      </div>
      < div className='button success cell small-2 text-center' onClick={deleteComment}>
        Delete
      </div>
    </div>
  } else {
    editDelete = ''
  }

  return(
    <div className="callout secondary">
        <p>{ign}<br />
        {body}</p>
        {editDelete}
    </div>
  )
}

export default ReviewTile
