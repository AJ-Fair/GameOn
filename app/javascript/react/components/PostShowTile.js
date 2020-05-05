import React from 'react'

const PostShowTile = props => {
  const {title, game, description, date, id, time, currentUser} = props

  return (
    <div>
      <h1 className='cell small-12 title text-black'>
        {title}
      </h1>
      <br />
      <div className='cell small-12 game'>
        <p><strong>Game:</strong>{game}</p>
      </div>
      <div className='cell small 12 datetime'>
        <p><strong>{date}</strong></p>
        <p><stron>{time}</stron></p>
      </div>
      <div className='cell small-12 body'>
        <p>{description}</p>
      </div>
    </div>
  )
}
