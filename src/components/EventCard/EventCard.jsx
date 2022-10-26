import React from "react";
import timer from "../../assets/icons/timer.svg";
import flag from "../../assets/icons/flag.svg";
import orange_location from "../../assets/icons/orange_location.svg";
import green_location from "../../assets/icons/green_location.svg";
import "./styles.css";

const EventCard = ({
  datetime,
  eventTitle,
  eventFacilitator,
  location,
  eventType,
}) => {
  return (
    <div className="event-card">
      <div className="datetime">{datetime}</div>
      <div className="event-info">
        <p className="event-title">{eventTitle}</p>
        <p className="event-facilitator">{eventFacilitator}</p>
      </div>
      <div className="event-card-footer">
        <div
          className="location"
          style={{ color: eventType === "class" ? "#f56c22" : "#39BA62" }}
        >
          <img
            src={eventType === "class" ? orange_location : green_location}
            alt="location"
          />
          <p>{location}</p>
        </div>
        <img
          src={eventType === "class" ? timer : flag}
          alt="classes"
          className="event-type-icon"
        />
      </div>
    </div>
  );
};

export default EventCard;
