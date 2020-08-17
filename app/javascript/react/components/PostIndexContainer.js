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
      const postsArr = postBody
      debugger
      setPosts(postsArr)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  let mapArr = posts.posts
  let postTiles = mapArr.map((post) => {
    return (
      <PostTile
        key={post.id}
        id={post.id}
        title={post.title}
        game={post.game}
        description={post.description}
        datetime={post.datetime}
        currentUser={posts.current}
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
