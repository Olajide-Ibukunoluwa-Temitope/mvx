import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

const CalendarComp = ({ setDate, date, selectRange }) => {
  return (
    <Calendar
      calendarType="US"
      onChange={setDate}
      value={date}
      selectRange={selectRange}
    />
  );
};

export default CalendarComp;
