import React, { useState } from 'react'

import ErrorList from './ErrorList'

const NewCommentForm = props => {
  const postId = props.postId
  const handleFormSubmit = props.handleFormSubmit
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

  const formCheck = event => {
    debugger
    event.preventDefault()
    if (validateForm()) {
      handleFormSubmit(comment)
    }
  }

  const validateForm = () => {
    let newErrors = {}
    let requiredFields = ["ign"]
    requiredFields.forEach((field) => {
      if(comment[field].trim() === "") {
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
  <div className='bg-white'>
    <h4 className='title'>Add a comment!</h4>
    <form onSubmit={formCheck}>
      <ErrorList
        errors={errors}
      />

    <label className='text-black' htmlFor="ign">In-game name:</label>
      <input
        type="text"
        name="ign"
        id="ign"
        onChange={handleChange}
        value={comment.ign}
      />

      <label className='text-black' htmlFor="body">Your comment:</label>
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

export default NewCommentForm
