import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../api/UserRequest'

function User({ person }) {
  const port = 'http://localhost:5000/images/'

  const { user } = useSelector((state) => state.authReducer.authData)
  const dispatch = useDispatch()

  const [following, setFollowing] = useState(
    person.followers.includes(user._id),
  )
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user))
    setFollowing((prev) => !prev)
  }
  return (
    <div className="follower">
      <div>
        <img
          src={
            person.coverPicture
              ? port + person.profilePicture
              : port + 'defaultProfile.png'
          }
          alt=""
          className="followerImg"
        />
        <div className="name">
          <span>
            {person.firstname} {person.lastname}
          </span>
          <span>{person.username}</span>
        </div>
      </div>
      <button
        className={
          following ? 'button fc-button UnfollowButton' : 'button fc-button'
        }
        onClick={handleFollow}
      >
        {following ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  )
}

export default User
