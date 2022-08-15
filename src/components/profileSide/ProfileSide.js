import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch></LogoSearch>
      <ProfileCard />
    </div>
  )
}

export default ProfileSide
