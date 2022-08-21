import React, { useState } from 'react'
import './Post.css'
import Heart from '../../assets/images/like.png'
import NotLike from '../../assets/images/notlike.png'
import Comment from '../../assets/images/comment.png'
import Share from '../../assets/images/share.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/postRequest'

function Post({ data }) {
  const port = 'http://localhost:5000/images/'
  const { user } = useSelector((state) => state.authReducer.authData)

  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () => {
    setLiked((prev) => !prev)
    likePost(data._id, user._id)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }

  return (
    <div className="Post">
      <img src={data.image ? port + data.image : ''} alt="Are you ofline🙄" />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: 'pointer' }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post
