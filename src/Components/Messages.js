import React from 'react'
import { UilEdit, UilSearch } from '@iconscout/react-unicons';
import Profile from '../Assets/Images/profile-17.jpg';
import Profile1 from '../Assets/Images/profile-14.jpg';
import Profile2 from '../Assets/Images/profile-12.jpg';
const Messages = () => {
    return (
        <>
            <div className="messages">
                <div className="heading">
                    <h4>Message</h4>
                    <i><UilEdit /></i>
                </div>
                <div className="search-bar">
                    <i><UilSearch /></i>
                    <i class="uil uil-search"></i>
                    <input type="search" placeholder="Search Message" id="message-search" />
                </div>
                <div className="category">
                    <h6 className="active">
                        Primary
                    </h6>
                    <h6>
                        General
                    </h6>
                    <h6 className="message-requests">
                        Requests(2)
                    </h6>
                </div>
                <div className="message">
                    <div className="profile-photo">
                        <img src={Profile} alt="" />
                        <div className="active"></div>
                    </div>
                    <div className="message-body">
                        <h5>Edem Quist</h5>
                        <p className="text-bold">Just woke up bruh</p>
                    </div>
                </div>
                <div className="message">
                    <div className="profile-photo">
                        <img src={Profile2} alt="" />
                    </div>
                    <div className="message-body">
                        <h5>Chantel Msiza</h5>
                        <p className="text-mute">Birthday Tomorrrow</p>
                    </div>
                </div>
                <div className="message">
                    <div className="profile-photo">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="message-body">
                        <h5>Edem Quist</h5>
                        <p className="text-bold">Just woke up bruh</p>
                    </div>
                </div>
                <div className="message">
                    <div className="profile-photo">
                        <img src={Profile2} alt="" />
                    </div>
                    <div className="message-body">
                        <h5>Chantel Msiza</h5>
                        <p className="text-mute">Birthday Tomorrrow</p>

                    </div>
                </div>

                <div className="message">
                    <div className="profile-photo">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="message-body">
                        <h5>Edem Quist</h5>
                        <p className="text-bold">Just woke up bruh</p>
                    </div>
                </div>
                <div className="message">
                    <div className="profile-photo">
                        <img src={Profile2} alt="" />
                    </div>
                    <div className="message-body">
                        <h5>Chantel Msiza</h5>
                        <p className="text-mute">Birthday Tomorrrow</p>

                    </div>
                </div>



            </div>
            <div className="friend-requests">
                <h4>Requests</h4>
                <div className="request">
                    <div className="info">
                        <div className="profile-photo">
                            <img src={Profile1} alt="" />
                        </div>
                        <div>
                            <h5>Haija Bintu</h5>
                            <p className="text-mute">
                                8 mutual friends
                            </p>
                        </div>
                    </div>
                    <div className="info">
                        <div className="profile-photo">
                            <img src={Profile2} alt="" />
                        </div>
                        <div>
                            <h5>Haija Bintu</h5>
                            <p className="text-mute">
                                8 mutual friends
                            </p>
                        </div>
                    </div>
                    <div className="action">
                        <button className="btn btn-primary">
                            Accept
                        </button>
                        <button className="btn">
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages