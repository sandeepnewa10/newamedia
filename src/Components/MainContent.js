import React from 'react'
import PostFeed from './PostFeed'
import Story from './Story'

const MainContent = () => {
  return (
    <div className="middle">
        <Story/>
        <PostFeed/>
    </div>
  )
}

export default MainContent