import React, {useState, useEffect} from 'react'

import PostShowTile from './PostShowTile'
const PostShowContainer = props => {
  const [post, setPost] = useState({
    key: 0,
    id: null,
    title: "",
    description: "",
    datetime: null,
    game: "",
    current_user: {},
  })

  useEffect(() => {
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
              id={post.id}
              title={post.name}
              description={post.description}
              game={post.game}
              getPostPageInfo={getPostPageInfo}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PostShowContainer
