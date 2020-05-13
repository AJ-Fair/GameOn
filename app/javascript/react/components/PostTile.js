import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const PostTile = props => {
  const title = props.title
  const game = props.game
  const datetime = props.datetime
  const description = props.description
  const id = props.id

  return (
    <div className='callout bg-white cell small-12 medium-4 text-center post-tile text-black'>
      <Link to={`/posts/${id}`}>
        <h4 className='title link-black'>{title}</h4>
      </Link>
      <p className='body'><Moment>{datetime}</Moment></p>
    </div>
  )
}

export default PostTile
