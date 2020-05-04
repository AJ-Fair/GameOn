import React from 'react'
import import { Link } from 'react-router-dom'

const PostTile = props => {
  const title = props.title
  const game = props.game
  const datetime = props.datetime
  const description = props.description
  const id = props.id

  return (
    <div className='callout cell small-12 medium-4 text-center post-tile'>
      <Link to={`/posts/${:id}`}>
        <h4 className='title link'>{name}</h4>
      </Link>
      <p className='body'>{datetime}</p>
    </div>
  )
}

export default PostTile
