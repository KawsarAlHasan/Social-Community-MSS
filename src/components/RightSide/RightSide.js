import React from 'react'
import './RightSide.css'
import Home from '../../assets/images/home.png'
import Noti from '../../assets/images/noti.png'
import Comment from '../../assets/images/comment.png'
import { UilSetting } from '@iconscout/react-unicons'

function RightSide() {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
    </div>
  )
}

export default RightSide
