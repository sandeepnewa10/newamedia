import React from 'react'
import pic1 from '../Assets/Images/profile-8.jpg';
import pic2 from '../Assets/Images/profile-9.jpg';
import pic3 from '../Assets/Images/profile-10.jpg';
import pic4 from '../Assets/Images/profile-11.jpg';
import pic5 from '../Assets/Images/profile-12.jpg';
import pic6 from '../Assets/Images/profile-13.jpg';

const Story = () => {
  return (
    <>
     {/* ---------- STORIES ----------  */}
   <div className="stories">
    <div className="story">
        <div className="profile-photo">
            <img src={pic1} alt="" />
        </div>
        <p className="name">
            Your Story
        </p>
    </div>
    <div className="story">
        <div className="profile-photo">
            <img src={pic2} alt="" />
        </div>
        <p className="name">
            Lilla James
        </p>
    </div>
    <div className="story">
        <div className="profile-photo">
            <img src={pic3} alt="" />
        </div>
        <p className="name">
            Dainel Bale
        </p>
    </div>
    <div className="story">
        <div className="profile-photo">
            <img src={pic4} alt="" />
        </div>
        <p className="name">
            Tina Bale
        </p>
    </div>
    <div className="story">
        <div className="profile-photo">
            <img src={pic5} alt="" />
        </div>
        <p className="name">
            Jane Doe
        </p>
    </div>
    <div className="story">
        <div className="profile-photo">
            <img src={pic6} alt="" />
        </div>
        <p className="name">
            Doe Jane
        </p>
    </div>

   </div>
{/*     Story end  */}
<form className="create-post">
    <div className="profile-photo">
    <img src={pic6} alt="" />
    </div>
    <input type="text" placeholder="What's on your mind, Diana?" id="create-post" />
    <input type="submit" value="post" className="btn btn-primary" />
    </form>
</>

  )
}

export default Story