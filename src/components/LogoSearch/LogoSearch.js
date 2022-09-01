import React from "react";
import Logo from "../../assets/images/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";
import { Link } from "react-router-dom";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to='/'>
        <img className="logo" src={Logo} alt="" />
      </Link>
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
