import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import PostShowTile from './PostShowTile'
import NewCommentContainer from './NewCommentContainer'

const PostShowContainer = props => {
  const [post, setPost] = useState({
    key: 0,
    id: null,
    title: "",
    description: "",
    datetime: null,
    game: "",
    comments: []
  })

  const [currentUser, setCurrentUser] = useState({
    key: 0,
    id: null,
    email: "",
    profile_photo: "",
    posts: []
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
      debugger
      setPost(postBody.target)
      setCurrentUser(postBody.current)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  useEffect(() => {
    getPostPageInfo()}, [])

    let showCommentContainer

    if (post.currentUser !== null) {
      showCommentContainer =
      <NewCommentContainer
        postId={post.id}
        getPostPageInfo={getPostPageInfo}
      />
    } else {
      showCommentContainer = (
        <div>
          <h3 className='title bg-white'>Please <a href="/users/sign_in">Log In</a> to Leave a Comment</h3>
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
            <PostShowTile
              key={post.id}
              Postd={post.id}
              title={post.title}
              description={post.description}
              comments={post.comments}
              game={post.game}
              currentUser={post.current_user_id}
              getPostPageInfo={getPostPageInfo}
            />
            {showCommentContainer}
          </div>
        </div>
      </div>
    )
  }
}

export default PostShowContainer
