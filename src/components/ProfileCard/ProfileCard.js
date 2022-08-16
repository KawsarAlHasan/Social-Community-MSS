import React from "react";
import Cover from "../../assets/images/cover.jpg";
import Profile from "../../assets/images/profileImg.jpg";
import "./ProfileCard.css";

function ProfileCard() {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      {/* profile images */}
      <div className="ProfileImages">
        <img src={Cover} alt="No Internet🙄" />
        <img src={Profile} alt="No Internet🙄" />
      </div>
      {/* profile Name  */}
      <div className="ProfileName">
        <span>Smriti Mandhana</span>
        <span>Best woman Cricketer in the world</span>
      </div>
      {/* follow Status */}
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>5,341</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>41</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
}

export default ProfileCard;
