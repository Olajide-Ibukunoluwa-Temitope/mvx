import React, { useState } from "react";
import CalendarComp from "../../components/Calendar/Calendar";
import DashboardFrame from "../../components/DashboardFrame/DashboardFrame";
import add_square from "../../assets/icons/add_square.svg";
import close_icon from "../../assets/icons/close_icon.svg";
import tooltip from "../../assets/icons/tooltip.svg";
import "./styles.css";
import { eventCardData, eventTypes } from "./data";
import EventCard from "../../components/EventCard/EventCard";

const Dashboard = () => {
  const [date, setDate] = useState([
    new Date(2022, 0, 10),
    new Date(2022, 0, 18),
  ]);
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const displayEventTypes = () => {
    return eventTypes.map((type) => {
      return (
        <div
          className="event-type"
          style={{
            backgroundColor: type.bgColor,
            color: type.color,
          }}
        >
          {type?.icon && <img src={type.icon} alt={type.name} />}
          <span>{type.name}</span>
        </div>
      );
    });
  };

  const displayEventCard = () => {
    return eventCardData.map((event) => {
      return (
        <EventCard
          key={event.eventTitle}
          datetime={event.datetime}
          eventTitle={event.eventTitle}
          eventFacilitator={event.eventFacilitator}
          location={event.location}
          eventType={event.eventType}
        />
      );
    });
  };

  return (
    <>
      <DashboardFrame>
        <div className="container">
          <div className="left-section">
            <div>
              <CalendarComp setDate={setDate} date={date} selectRange={true} />
              <div>
                <div className="event-header-section">
                  <div>
                    <h3 className="event-heading">Upcoming events</h3>
                    <p className="sub-text">
                      <span>Don’t miss schedule events.</span>{" "}
                      <a href="/">See all</a>
                    </p>
                  </div>
                  <div>
                    <button className="add-new-btn" onClick={handleOpenModal}>
                      <img src={add_square} alt="add new" />
                      <span>Add new</span>
                    </button>
                  </div>
                </div>
                <div className="event-types">{displayEventTypes()}</div>
                <div className="events">{displayEventCard()}</div>
              </div>
            </div>
          </div>
          <div className="right-section">jnfd</div>
        </div>
      </DashboardFrame>
      <div style={{ display: open ? "block" : "none" }}>
        <div className="modal-overlay" onClick={handleCloseModal}></div>
        <div className="modal">
          <div className="header-section">
            <div className="close-icon-section">
              <img
                src={close_icon}
                alt="close modal"
                onClick={handleCloseModal}
              />
            </div>
            <div className="modal-title">Add New Events</div>
          </div>
          <div className="modal-body">
            <div className="modal-content-card">
              <div className="form-left">
                <div className="form-type-container">
                  <div className="form-type">
                    <span>Events</span>
                  </div>
                  <div className="form-type form-type-inactive">
                    <span>Class</span>
                  </div>
                  <div className="form-type form-type-inactive">
                    <span>Task</span>
                  </div>
                </div>
                <div>
                  <div className="text-field">
                    <div>
                      <label htmlFor="title" className="label">
                        <span>Title</span>
                        <img src={tooltip} alt="tool tip" />
                      </label>
                    </div>
                    <input type="text" name="title" className="text-input" />
                  </div>
                </div>
              </div>
              <div className="form-right"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
