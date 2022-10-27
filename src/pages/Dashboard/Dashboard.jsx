import React, { useState } from "react";
import CalendarComp from "../../components/Calendar/Calendar";
import DashboardFrame from "../../components/DashboardFrame/DashboardFrame";
import add_square from "../../assets/icons/add_square.svg";
import timer from "../../assets/icons/timer.svg";
import timer_play from "../../assets/icons/timer_play.svg";
import { eventCardData, eventTypes } from "./data";
import EventCard from "../../components/EventCard/EventCard";
import ModalContent from "../../components/ModalContent/ModalContent";
import Scheduler from "react-mui-scheduler";
import "./styles.css";
import { getTodayDate } from "../../utilities";
import SelectField from "../../components/SelectField/SelectField";

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

  const events = [
    {
      id: "event-1",
      label: (
        <div className="scheduled-event">
          <div className="scheduled-title">
            Accounting/Personal Finance Class{" "}
          </div>
          <div className="scheduled-time">8:00 AM - 9:00 AM</div>
          <div className="icon-section">
            <img src={timer} alt="timer icon" />
          </div>
        </div>
      ),
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "07:00 AM",
      endHour: "09:00 AM",
      date: getTodayDate(),
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-1",
      label: (
        <div className="scheduled-event">
          <div className="scheduled-title">
            Accounting/Personal Finance Class{" "}
          </div>
          <div className="scheduled-time">8:00 AM - 9:00 AM</div>
          <div className="icon-section">
            <img src={timer} alt="timer icon" />
          </div>
        </div>
      ),
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "12:00 PM",
      endHour: "13:00 PM",
      date: getTodayDate(),
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
  ];

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
          <div className="right-section">
            <div className="scheduler-opts">
              <div className="scheduler-opt">
                <div className="scheduler-opt-item ">Notes</div>
                <div className="scheduler-opt-item scheduler-opt-item-active">
                  Timeline
                </div>
                <div className="scheduler-opt-item">Planner</div>
                <div className="scheduler-opt-item">Goals</div>
              </div>
              <div className="tracker">
                <div className="scheduler-opt-item opt-item">Time tracking</div>
                <div className="scheduler-opt-item time">00:03:22</div>
                <div>
                  <img src={timer_play} alt="" />
                </div>
              </div>
            </div>
            <div className="scheduler-heading">
              <div className="scheduler">
                <div className="scheduler-title">Calendar</div>
                <div className="sort-scheduler">
                  <span className="label">Sort by:</span>
                  <SelectField
                    name="events"
                    bgColor={"white"}
                    color="#6C6C6C"
                    border="0.5px solid #D3D3D3"
                    placeholder={"Events"}
                    options={[
                      { label: "Classes", value: "classes" },
                      { label: "Reminders", value: "reminders" },
                    ]}
                  />
                </div>
              </div>
            </div>
            <Scheduler
              locale="en"
              events={events}
              legacyStyle={false}
              options={{
                transitionMode: "zoom",
                startWeekOn: "mon",
                defaultMode: "day",
              }}
              toolbarProps={{
                showSearchBar: false,
                showSwitchModeButtons: true,
                showDatePicker: true,
              }}
            />
          </div>
        </div>
      </DashboardFrame>
      <div style={{ display: open ? "block" : "none" }}>
        <div className="modal-overlay" onClick={handleCloseModal}></div>
        <div className="modal">
          <ModalContent handleCloseModal={handleCloseModal} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
