import React, {useState, useEffect} from 'react'

import PostTile from './PostTile'
const PostIndexContainer = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/v1/posts.json")
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
      const postsArr = postBody
      setPosts(postsArr)
      debugger
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let postTiles = posts.map((post) => {
    return (
      <PostTile
        key={post.id}
        id={post.id}
        title={post.title}
        game={post.game}
        description={post.description}
        datetime={post.datetime}
      />
    )
  })

  return (
    <div className='grid-container'>
      <div className='grid-x grid-margin-x grid-padding-y'>
        {postTiles}
      </div>
    </div>
  )
}

export default PostIndexContainer
