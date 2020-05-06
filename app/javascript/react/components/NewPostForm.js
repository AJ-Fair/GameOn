import React, {useState} from 'react'
import _ from 'lodash'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

import ErrorList from './ErrorList'

const NewGameForm = props => {
  const [errors, setErrors] = useState({})

  const [formVals, setFormVals] = useState({
    title: "",
    description: "",
    game: "",
    datetime: new Date()
  })

  const handleChange = event => {
    setFormVals({
      ...formVals,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const validateForm = () => {
    let newErrors = {}
    const requiredFields = ["title", "description", "date", "time", "game"]
    requiredFields.forEach((field) => {
      if(formVals[field].trim() === "") {
        newErrors = {
          ...newErrors,
          [field]: "is blank"
        }
      }
    })
    setErrors(newErrors)
    return _.isEmpty(newErrors)
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(validateForm()){
      props.handleFormSubmit(formVals)
    }
  }

  eturn (
    <div className="grid-container">
      <div className="grid-x grid-margin-x align-center">
        <div className="cell small-12 medium-10">
          <h2 className="text-black">Post a new playtime!</h2>
          <form onSubmit={handleSubmit}>
            <ErrorList
              errors={errors}
            />

            <label htmlFor="title" className="text-black">Post Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={formVals.title}
            />

            <label htmlFor="description" className="text-black">Description:</label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={formVals.description}
            />

            <label htmlFor="game" className="text-black">Game Name:</label>
            <input
              type="text"
              name="game"
              id="game"
              onChange={handleChange}
            />

            <label htmlFor="date" className="text-black">Date & Time:</label>
              <div>
                <DateTimePicker
                  onChange={this.handleChange}
                  value={this.state.date}
                />
              </div>
            <input className="button" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPostForm