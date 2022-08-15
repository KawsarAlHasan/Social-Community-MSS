import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          ></UilPen>
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          ></ProfileModal>
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>KMN_CODE</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
