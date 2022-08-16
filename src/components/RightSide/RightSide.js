import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../assets/images/home.png";
import Noti from "../../assets/images/noti.png";
import Comment from "../../assets/images/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      ></ShareModal>
    </div>
  );
}

export default RightSide;
