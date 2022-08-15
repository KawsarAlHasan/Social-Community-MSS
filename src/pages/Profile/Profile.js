import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft></ProfileLeft>
      <div className="Profile-center">
        <ProfileCard></ProfileCard>
      </div>
    </div>
  );
};

export default Profile;
