import React, {useState, useEffect} from 'react'

import PostShowTile from './PostShowTile'
import NewReviewContainer from './NewReviewContainer'

const PostShowContainer = props => {
  const [post, setPost] = useState({
    key: 0,
    id: null,
    title: "",
    description: "",
    datetime: null,
    game: "",
    comments: [],
    current_user: {},
  })

  let getPostPageInfo = () => {
    let postId = props.match.params.id
    fetch(`/api/v1/posts/${postId}.json`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => response.json())
    .then(postBody => {
      setPost(postBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  })

  useEffect(() => {
    getGamePageInfo()}, [])

    let showCommentContainer
    if (post.current_user) {
      showCommentContainer =
      <NewCommentContainer
        postId={game.id}
        getPostPageInfo={getPostPageInfo}
      />
    } else {
      showCommentContainer = (
        <div>
          <h3 className='title'>Please <a href="/users/sign_in">Log In</a> to Leave a Comment</h3>
        </div>
      )
    }

  if (post.id === null) {
    return(
      <h1>
        Loading...
      </h1>
    )
  } else {
    return (
      <div className="grid-container">
        <div className='grid-x grid-margin-x'>
          <div className="cell small-12 medium-10 align-center">
            <GameShowTile
              key={post.id}
              id={post.id}
              title={post.name}
              description={post.description}
              comments={post.comments}
              game={post.game}
              currentUser={post.current_user}
              getPostPageInfo={getPostPageInfo}
            />
            {newCommentContainer}
          </div>
        </div>
      </div>
    )
  }
}

export default PostShowContainer
