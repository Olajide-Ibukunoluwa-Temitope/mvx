import React from "react";
import logo from "../../assets/logo/mvx_logo.svg";
import toggle_side_bar from "../../assets/icons/toggle_side_bar.svg";
import "./styles.css";
import { sidebarData } from "./data";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="mvx logo" className="logo" />
      </div>
      <div className="sidebar-toggle-container">
        <img
          src={toggle_side_bar}
          alt="toggle sidebar"
          className="sidebar-toggle"
        />
      </div>
      <div>
        {sidebarData.map((item) => {
          return (
            <div key={item.title} className="sidebar-item-container">
              <div className="sidebar-item">
                <img
                  src={item.icon}
                  alt="dashboard icon"
                  className="sidebar-item-icon"
                />
                <p>{item.title}</p>
              </div>
              {item.count && (
                <div className="notification-count-container">
                  <div className="notification-count">{item.count}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button className="">Upgrade</button>
      </div>
      <div>
        <div>footer links</div>
      </div>
    </div>
  );
};

export default Sidebar;
