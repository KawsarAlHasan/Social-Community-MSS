import { UilSetting } from "@iconscout/react-unicons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "../../assets/images/comment.png";
import Home from "../../assets/images/home.png";
import Noti from "../../assets/images/noti.png";
import ShareModal from "../ShareModal/ShareModal";
import TrendCard from "../TrendCard/TrendCard";
import "./RightSide.css"

function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="/home">
          <img src={Home} alt="" />
        </Link>
        <Link to="/setting">
          <UilSetting />
        </Link>
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
