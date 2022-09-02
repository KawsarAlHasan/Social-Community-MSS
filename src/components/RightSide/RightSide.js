import React, { useState } from 'react'
import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import NavIcons from '../NavIcons/NavIcons'

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <div className="RightSide">
      <NavIcons />

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      ></ShareModal>
    </div>
  )
}

export default RightSide
