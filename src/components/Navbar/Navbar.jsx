import React from "react";
import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/notification.svg";
import avatar from "../../assets/images/avatar.png";
import moon from "../../assets/icons/moon.svg";
import arrow_down from "../../assets/icons/arrow_down.svg";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="page">Dashboard</div>
      <div>
        <div className="search-input-container">
          <input type="text" placeholder="Search" className="search-input" />
          <img src={search} alt="search icon" className="search-icon" />
        </div>
      </div>
      <div className="nav-options">
        <div className="icons">
          <div className="icon-container">
            <img src={notification} alt="notification" className="icon" />
          </div>
          <div className="icon-container">
            <img src={moon} alt="moon" className="icon" />
          </div>
        </div>
        <div className="profile">
          <div className="avatar-img">
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
          <img src={arrow_down} alt="arrow down icon" className="arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
