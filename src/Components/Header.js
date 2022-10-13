import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import ProfilePic from "../Assets/Images/profile-1.jpg";
const Header = () => {
    return (       
        <nav>
            <div className="container">
                <h2 className="logo">SocialMedia</h2>
                <div className="search-bar">
                    <UilSearch />
                    <input type="search" placeholder="Search for creates, inspirations and projects"/>
                </div>
                <div className="create">
                    <label for="create-post" className="btn btn-primary">Create</label>
                    <div className="profile-photo">
                        <img src={ProfilePic} alt="" />
                        </div>
                </div>
            </div>
        </nav>       
    )
}

export default Header