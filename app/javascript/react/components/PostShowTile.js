import React from 'react'
import Moment from 'react-moment'

const PostShowTile = props => {
  const title = props.title
  const game = props.game
  const datetime = props.datetime
  const description = props.description

  return (
    <div>
      <h4 className='cell small-12 title text-black bg-white'>
        {title}
      </h4>
      <div className='cell small-12 body game text-black'>
        <p><strong>Game:</strong> {game}</p>
      </div>
      <div className='cell small 12  body datetime text-black'>
        <p><strong><Moment>{datetime}</Moment></strong></p>
      </div>
      <div className='cell small-12 body text-black'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PostShowTile
