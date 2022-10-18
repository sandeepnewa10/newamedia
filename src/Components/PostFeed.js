import React from 'react'
import profilepic1 from '../Assets/Images/profile-13.jpg';

import profile1 from '../Assets/Images/profile-1.jpg';
import profile2 from '../Assets/Images/profile-2.jpg';
import profile3 from '../Assets/Images/profile-3.jpg';
import feed1 from '../Assets/Images/feed-1.jpg';
import feed2 from '../Assets/Images/feed-2.jpg';
import feed3 from '../Assets/Images/feed-3.jpg';
import feed4 from '../Assets/Images/feed-4.jpg';
import feed5 from '../Assets/Images/feed-5.jpg';
import feed6 from '../Assets/Images/feed-6.jpg';
import feed7 from '../Assets/Images/feed-7.jpg';
import { UilEllipsisH, UilHeart, UilCommentDots,UilShareAlt, UilBookmark   } from '@iconscout/react-unicons'
const PostFeed = () => {
  return (
    <div className="feeds">
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-photo">
                        <img src={profilepic1} alt="" />
                    </div>
                    <div className="ingo">
                        <h3>Lana Rose <i class="uil uil-comments-alt"></i></h3>
                        <small>Dubai, 15 MINUTES AGO</small>
                    </div>                    
                </div>
                <span className="edit"><UilEllipsisH/></span>
            </div>
            <div className="photo">
                <img src={feed1} alt="" />
            </div>
            <div className="actions-buttons">
                <div className="interaction-button">
                    <span><i><UilHeart /></i></span>
                    <span><i><UilCommentDots /></i></span>
                    <span><i><UilShareAlt /></i></span>
                </div>
                <div className="bookmark">
                    <span><i><UilBookmark /></i></span>
                </div>
            </div>
            <div className="liked-by">
                <span><img src={profile1} alt="" /></span>
                <span><img src={profile2} alt="" /></span>
                <span><img src={profile3} alt="" /></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2,32 others</b></p>
            </div>
            <div className="caption">
                <p><b>Lana Rose</b> Lorem, ipsum dolor sit amet consectetur adipisicing. <span className="harsh-tag">#lifestyle</span></p>
            </div>
            <div className="comments text-mute">
                View all 277 comments
            </div>
        </div>
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-photo">
                        <img src={profilepic1} alt="" />
                    </div>
                    <div className="ingo">
                        <h3>Benjamin Dwayne</h3>
                        <small>Dubai, 15 MINUTES AGO</small>
                    </div>                    
                </div>
                <span className="edit"><UilEllipsisH/></span>
            </div>
            <div className="photo">
                <img src={feed2} alt="" />
            </div>
            <div className="actions-buttons">
                <div className="interaction-button">
                    <span><i><UilHeart /></i></span>
                    <span><i><UilCommentDots /></i></span>
                    <span><i><UilShareAlt /></i></span>
                </div>
                <div className="bookmark">
                    <span><i><UilBookmark /></i></span>
                </div>
            </div>
            <div className="liked-by">
                <span><img src={profile1} alt="" /></span>
                <span><img src={profile2} alt="" /></span>
                <span><img src={profile3} alt="" /></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2,32 others</b></p>
            </div>
            <div className="caption">
                <p><b>Benjamin Dwayne</b> Lorem, ipsum dolor sit amet consectetur adipisicing. <span className="harsh-tag">#lifestyle</span></p>
            </div>
            <div className="comments text-mute">
                View all 277 comments
            </div>
        </div>
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-photo">
                        <img src={profilepic1} alt="" />
                    </div>
                    <div className="ingo">
                        <h3>Malik Berry</h3>
                        <small>Dubai, 15 MINUTES AGO</small>
                    </div>                    
                </div>
                <span className="edit"><UilEllipsisH/></span>
            </div>
            <div className="photo">
                <img src={feed3} alt="" />
            </div>
            <div className="actions-buttons">
                <div className="interaction-button">
                    <span><i><UilHeart /></i></span>
                    <span><i><UilCommentDots /></i></span>
                    <span><i><UilShareAlt /></i></span>
                </div>
                <div className="bookmark">
                    <span><i><UilBookmark /></i></span>
                </div>
            </div>
            <div className="liked-by">
                <span><img src={profile1} alt="" /></span>
                <span><img src={profile2} alt="" /></span>
                <span><img src={profile3} alt="" /></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2,32 others</b></p>
            </div>
            <div className="caption">
                <p><b>Malik Berry</b> Lorem, ipsum dolor sit amet consectetur adipisicing. <span className="harsh-tag">#lifestyle</span></p>
            </div>
            <div className="comments text-mute">
                View all 277 comments
            </div>
        </div>
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-photo">
                        <img src={profilepic1} alt="" />
                    </div>
                    <div className="ingo">
                        <h3>Ama Jackie</h3>
                        <small>Dubai, 15 MINUTES AGO</small>
                    </div>                    
                </div>
                <span className="edit"><UilEllipsisH/></span>
            </div>
            <div className="photo">
                <img src={feed4} alt="" />
            </div>
            <div className="actions-buttons">
                <div className="interaction-button">
                    <span><i><UilHeart /></i></span>
                    <span><i><UilCommentDots /></i></span>
                    <span><i><UilShareAlt /></i></span>
                </div>
                <div className="bookmark">
                    <span><i><UilBookmark /></i></span>
                </div>
            </div>
            <div className="liked-by">
                <span><img src={profile1} alt="" /></span>
                <span><img src={profile2} alt="" /></span>
                <span><img src={profile3} alt="" /></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2,32 others</b></p>
            </div>
            <div className="caption">
                <p><b>Ama Jackie</b> Lorem, ipsum dolor sit amet consectetur adipisicing. <span className="harsh-tag">#lifestyle</span></p>
            </div>
            <div className="comments text-mute">
                View all 277 comments
            </div>
        </div>
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-photo">
                        <img src={profilepic1} alt="" />
                    </div>
                    <div className="ingo">
                        <h3>Lana Rose</h3>
                        <small>Dubai, 15 MINUTES AGO</small>
                    </div>                    
                </div>
                <span className="edit"><UilEllipsisH/></span>
            </div>
            <div className="photo">
                <img src={feed7} alt="" />
            </div>
            <div className="actions-buttons">
                <div className="interaction-button">
                    <span><i><UilHeart /></i></span>
                    <span><i><UilCommentDots /></i></span>
                    <span><i><UilShareAlt /></i></span>
                </div>
                <div className="bookmark">
                    <span><i><UilBookmark /></i></span>
                </div>
            </div>
            <div className="liked-by">
                <span><img src={profile1} alt="" /></span>
                <span><img src={profile2} alt="" /></span>
                <span><img src={profile3} alt="" /></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2,32 others</b></p>
            </div>
            <div className="caption">
                <p><b>Lana Rose</b> Lorem, ipsum dolor sit amet consectetur adipisicing. <span className="harsh-tag">#lifestyle</span></p>
            </div>
            <div className="comments text-mute">
                View all 277 comments
            </div>
        </div>
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-photo">
                        <img src={profilepic1} alt="" />
                    </div>
                    <div className="ingo">
                        <h3>Lana Rose</h3>
                        <small>Dubai, 15 MINUTES AGO</small>
                    </div>                    
                </div>
                <span className="edit"><UilEllipsisH/></span>
            </div>
            <div className="photo">
                <img src={feed5} alt="" />
            </div>
            <div className="actions-buttons">
                <div className="interaction-button">
                    <span><i><UilHeart /></i></span>
                    <span><i><UilCommentDots /></i></span>
                    <span><i><UilShareAlt /></i></span>
                </div>
                <div className="bookmark">
                    <span><i><UilBookmark /></i></span>
                </div>
            </div>
            <div className="liked-by">
                <span><img src={profile1} alt="" /></span>
                <span><img src={profile2} alt="" /></span>
                <span><img src={profile3} alt="" /></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2,32 others</b></p>
            </div>
            <div className="caption">
                <p><b>Lana Rose</b> Lorem, ipsum dolor sit amet consectetur adipisicing. <span className="harsh-tag">#lifestyle</span></p>
            </div>
            <div className="comments text-mute">
                View all 277 comments
            </div>
        </div>
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-photo">
                        <img src={profilepic1} alt="" />
                    </div>
                    <div className="ingo">
                        <h3>Lana Rose</h3>
                        <small>Dubai, 15 MINUTES AGO</small>
                    </div>                    
                </div>
                <span className="edit"><UilEllipsisH/></span>
            </div>
            <div className="photo">
                <img src={feed6} alt="" />
            </div>
            <div className="actions-buttons">
                <div className="interaction-button">
                    <span><i><UilHeart /></i></span>
                    <span><i><UilCommentDots /></i></span>
                    <span><i><UilShareAlt /></i></span>
                </div>
                <div className="bookmark">
                    <span><i><UilBookmark /></i></span>
                </div>
            </div>
            <div className="liked-by">
                <span><img src={profile1} alt="" /></span>
                <span><img src={profile2} alt="" /></span>
                <span><img src={profile3} alt="" /></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2,32 others</b></p>
            </div>
            <div className="caption">
                <p><b>Lana Rose</b> Lorem, ipsum dolor sit amet consectetur adipisicing. <span className="harsh-tag">#lifestyle</span></p>
            </div>
            <div className="comments text-mute">
                View all 277 comments
            </div>
        </div>
    </div>
  )
}

export default PostFeed