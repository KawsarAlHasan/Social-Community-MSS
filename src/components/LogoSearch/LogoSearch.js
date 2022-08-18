import React from 'react'
import Logo from '../../assets/images/logo.png'
import { UilSearch } from '@iconscout/react-unicons'
import './LogoSearch.css'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} className="logo" alt="" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
