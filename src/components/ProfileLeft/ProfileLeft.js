import React from "react";
import FollowersCards from "../FollowersCards/FollowersCards";
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import "./ProfileLeft.css";

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
      <LogoSearch></LogoSearch>
      <InfoCard></InfoCard>
      <FollowersCards></FollowersCards>
    </div>
  );
};

export default ProfileLeft;
