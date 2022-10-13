import React from 'react'
import ProfilePicture from '../Assets/Images/profile-1.jpg';

const Profile = () => {
  return (
    // ---------- Profile ---------- 
    <div>
        <div className="profile">
            <div className="profile-photo">
                <img src={ProfilePicture} alt="Profile Picture" />
            </div>
            <div className="handle">
                <h4>Diana Ayi</h4>
                <p className="text-muted">
                    @dayi
                </p>
            </div>
        </div>
    </div>
  )
}

export default Profile