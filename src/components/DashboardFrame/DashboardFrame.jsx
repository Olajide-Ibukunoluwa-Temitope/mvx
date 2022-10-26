import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./styles.css";

const DashboardFrame = ({ children }) => {
  return (
    <div className="frame">
      <Sidebar />
      <div className="body">
        <Navbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DashboardFrame;
