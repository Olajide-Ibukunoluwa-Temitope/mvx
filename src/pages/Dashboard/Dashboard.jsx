import React, { useState } from "react";
import CalendarComp from "../../components/Calendar/Calendar";
import DashboardFrame from "../../components/DashboardFrame/DashboardFrame";
import "./styles.css";

const Dashboard = () => {
  const [date, setDate] = useState([
    new Date(2022, 0, 10),
    new Date(2022, 0, 18),
  ]);

  return (
    <DashboardFrame>
      <div className="container">
        <div className="left-section">
          <div>
            <CalendarComp setDate={setDate} date={date} selectRange={true} />
          </div>
        </div>
        <div className="right-section">jnfd</div>
      </div>
    </DashboardFrame>
  );
};

export default Dashboard;
