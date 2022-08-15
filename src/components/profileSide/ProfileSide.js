import React from "react";
import FollowersCards from "../FollowersCards/FollowersCards";
import LogoSearch from "../LogoSearch/LogoSearch";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch></LogoSearch>
      <FollowersCards></FollowersCards>
    </div>
  );
};

export default ProfileSide;
