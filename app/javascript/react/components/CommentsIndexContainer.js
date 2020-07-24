import React from 'react'

import CommentTile from './CommentTile'

const CommentsIndexContainer = props => {
  const comments = props.comments
  const currentUser = props.currentUser
  let commentTiles = comments.map((comment) => {
    return (
      <CommentTile
        key={comment.id}
        commentUser={comment.user_id}
        id={comment.id}
        ign={comment.ign}
        body={comment.body}
        currentUser={props.currentUser}
        getPostPageInfo={props.getPostPageInfo}
      />
    )
  })
  return(
    <div>
      {commentTiles}
    </div>
  )
}

export default CommentsIndexContainer
