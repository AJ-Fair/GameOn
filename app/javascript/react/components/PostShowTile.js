import React from 'react'
import Moment from 'react-moment'
import _ from 'lodash'

import CommentsIndexContainer from './CommentsIndexContainer'

const PostShowTile = props => {
  const {title, game, datetime, currentUser, comments, getPostPageInfo, description, postId} = props

  return (
    <div className='bg-white'>
      <h4 className='cell small-12 title text-black'>
        {title}
      </h4>
      <div className='cell small-12 body game text-black'>
        <p><strong>Game:</strong> {game}</p>
      </div>
      <div className='cell small 12 body datetime text-black'>
        <p><strong><Moment>{datetime}</Moment></strong></p>
      </div>
      <div className='cell small-12 body text-black'>
        <p>{description}</p>
      </div>
      <div className='cell small-12'>
        <strong>Comments:</strong>
        <CommentsIndexContainer
          comments={comments}
          postId={postId}
          currentUser={currentUser}
        />
      </div>
    </div>
  )
}

export default PostShowTile
