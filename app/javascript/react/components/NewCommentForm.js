import React, { useState } from 'react'

import ErrorList from './ErrorList'

const NewCommentForm = props => {
  const post_id = props.post_id
  const [comment, setComment] = useState({
    ign: "",
    body: "",
  })
  const [errors, setErrors] = useState({})

  const handleChange = event => {
      setComment({
        ...comment,
        [event.currentTarget.id]: event.currentTarget.value
      })
    }


  const validateForm = () => {
    let newErrors = {}
    let requiredFields = ["ign"]
    requiredFields.forEach((field) => {
      if(review[field].trim() === "") {
        newErrors = {
          ...newErrors,
          [field]: "is blank"
        }
      } 
    })
    setErrors(newErrors)
    return _.isEmpty(newErrors)
  }

return (
  <div>
    <h4>Add a comment!</h4>
    <form onSubmit={handleSubmit}>
      <ErrorList
        errors={errors}
      />

      <label htmlFor="ign">In-game name:</label>
      <input
        type="text"
        name="ign"
        id="ign"
        onChange={handleChange}
        value={comment.ign}
      />

      <label htmlFor="body">Your comment:</label>
      <textarea
        name="body"
        id="body"
        onChange={handleChange}
        value={comment.body}
      />

      <input className="button" type="submit" />
    </form>
  </div>
  )
};

export default NewReviewForm
