import React from 'react'
import Profile from './Profile'
import SideBarMenu from './SideBarMenu'

const LeftSideBar = () => {
  return (
    <div className="left">     
      <Profile />     
      <SideBarMenu />
      <label for="create-post" className="btn btn-primary">Create Post</label>
    </div>
  )
}

export default LeftSideBar