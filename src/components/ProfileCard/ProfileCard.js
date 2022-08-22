import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

function ProfileCard({ location }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const port = "https://enigmatic-ocean-28315.herokuapp.com/images/";
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <div className="ProfileCard">
      {/* profile images */}
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? port + user.coverPicture
              : port + "defaultCover.jpg"
          }
          alt="No Internet🙄"
        />
        <img
          src={
            user.coverPicture
              ? port + user.profilePicture
              : port + "defaultProfile.png"
          }
          alt="No Internet🙄"
        />
      </div>
      {/* profile Name  */}
      <div className="ProfileName">
        <span>
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>
      {/* follow Status */}
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId == user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          {" "}
          <Link style={{ textDecoration: "none" }} to={`/profile/${user._id}`}>
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
}

export default ProfileCard;
