import React, {useState, useEffect} from 'react'

import PostTile from './PostTile'
const PostsIndexContainer = props => {
  const [posts, setPosts] = useState([]);


  let postTiles = posts.map((post) => {
    return (
      <PostTile
        key={post.id}
        id={post.id}
        tile={post.title}
        description={game.description}
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

export default PostsIndexContainer
