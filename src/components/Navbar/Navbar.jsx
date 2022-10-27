import React from "react";
import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/notification.svg";
import avatar from "../../assets/images/avatar.png";
import moon from "../../assets/icons/moon.svg";
import arrow_down from "../../assets/icons/arrow_down.svg";
import home_alt from "../../assets/icons/home_alt.svg";
import calendar_alt from "../../assets/icons/calendar_alt.svg";
import add from "../../assets/icons/add.svg";
import monitor_recorder from "../../assets/icons/monitor_recorder.svg";
import collection from "../../assets/icons/collection.svg";
import menu from "../../assets/icons/menu.svg";
import "./styles.css";

const Navbar = () => {
  return (
    <>
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
            <img
              src={arrow_down}
              alt="arrow down icon"
              className="arrow-icon"
            />
          </div>
        </div>
      </div>
      <div className="mob-nav">
        <div>
          <div className="mob-nav-heading">
            <img src={menu} alt="menu icon" />
            <div className="page-title">Dashboard</div>
            <div className="avatar-img">
              <img src={avatar} alt="avatar" className="avatar" />
            </div>
          </div>
          <div>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <img src={search} alt="search icon" className="search-icon" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mob-footer">
          <div className="mob-footer-items">
            <img src={home_alt} alt="home" />
            <img src={calendar_alt} alt="calendar" />
            <div className="add-container">
              <img src={add} alt="add" />
            </div>

            <img src={monitor_recorder} alt="" />
            <img src={collection} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
