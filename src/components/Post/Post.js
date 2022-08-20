import React from "react";
import "./Post.css";
import Heart from "../../assets/images/like.png";
import NotLike from "../../assets/images/notlike.png";
import Comment from "../../assets/images/comment.png";
import Share from "../../assets/images/share.png";
import { useSelector } from "react-redux";

function Post({ data }) {
  const port = "http://localhost:5000/images/";
  const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <div className="Post">
      <img src={data.image ? port + data.image : ""} alt="Are you ofline🙄" />

      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span>{data.likes} Likes</span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
}

export default Post;
