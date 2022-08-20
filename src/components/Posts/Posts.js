import React, { useEffect } from "react";
import { getTimelinePosts } from "../../Action/postAction";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Post/Post";
import "./Posts.css";

function Posts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  return (
    <div className="Posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
}

export default Posts;
