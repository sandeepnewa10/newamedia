import React from 'react'
import { UilHome, UilCompass, UilBell, UilEnvelope, UilBookmark, UilChartLine, UilPalette, UilSetting } from '@iconscout/react-unicons'
import Pic1 from '../Assets/Images/profile-2.jpg';
import Pic2 from '../Assets/Images/profile-3.jpg';
import Pic3 from '../Assets/Images/profile-4.jpg';
import Pic4 from '../Assets/Images/profile-5.jpg';

const SideBarMenu = () => {

    return (
        // ---------- MENU ---------- 
        <div className="sidebar">
            <a href="#" className="menu-item active">
                <span>
                    <i><UilHome /></i>
                </span>
                <h3>Home</h3>
            </a>
            <a href="#" className="menu-item">
                <span>
                    <i><UilCompass /></i>
                </span>
                <h3>Explore</h3>
            </a>
            <a href="#" className="menu-item" id="notifications">
                <span>
                    <i><UilBell/>
                    <small className="notification-count">6+</small>
                    </i>
                </span>
                <h3>Notification</h3>
                {/* Notification popup Start */}
                <div className="notifications-popup">
                    <div className="popup-wrap">
                        <div className="profile-photo">
                            <img src={Pic1} alt="" />
                        </div>
                        <div className="notifications-body">
                            <b>Sarun Prajapati</b> accepted your friend request
                            <small className="text-mute">2 DAYS AGO</small></div>
                    </div>
                    <div className="popup-wrap">
                        <div className="profile-photo">
                            <img src={Pic2} alt="" />
                        </div>
                        <div className="notication-body">
                            <b>John Doe</b> accepted your friend request
                            <small className="text-mute">1 HOUR AGO</small></div>
                    </div>
                    <div className="popup-wrap">
                        <div className="profile-photo">
                            <img src={Pic3} alt="" />
                        </div>
                        <div className="notication-body">
                            <b>Mary Oppong</b> accepted your friend request
                            <small className="text-mute">50 MINUTES</small></div>
                    </div>
                    <div className="popup-wrap">
                        <div className="profile-photo">
                            <img src={Pic4} alt="" />
                        </div>
                        <div className="notication-body">
                            <b>Donald Shrestha</b> accepted your friend request
                            <small className="text-mute">30 MINUTES</small></div>
                    </div>
                </div>
                {/* Notification popup End  */}
            </a>
            <a href="#" className="menu-item" id="message-notifications">
                <span>
                    <i><UilEnvelope/>
                    <small className="notification-count">4+</small></i>
                </span>
                <h3>Message</h3>
            </a>
            <a href="#" className="menu-item">
                <span>
                    <i>< UilBookmark /></i>
                </span>
                <h3>Bookmarks</h3>
            </a>
            <a href="#" className="menu-item">
                <span>
                    <i>< UilChartLine /></i>
                </span>
                <h3>Analytics</h3>
            </a>
            <a href="#" className="menu-item">
                <span>
                    <i><UilPalette /></i>
                </span>
                <h3>Theme</h3>
            </a>
            <a href="#" className="menu-item">
                <span>
                    <i><UilSetting /></i>
                </span>
                <h3>Setting</h3>
            </a>
        </div>
    )
}

export default SideBarMenu