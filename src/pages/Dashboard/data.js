import timer from "../../assets/icons/timer.svg";
import flag from "../../assets/icons/flag.svg";

export const eventTypes = [
  {
    name: "All Activities",
    bgColor: "#ECE6FF",
    color: "#6A35FF",
  },
  {
    name: "Classes",
    icon: timer,
    bgColor: "#FCE7DC",
    color: "#F56C22",
  },
  {
    name: "Events",
    icon: flag,
    bgColor: "#E2FAE9",
    color: "#39BA62",
  },
];

export const eventCardData = [
  {
    datetime: "27 Jan 2022  |  8:00 AM - 9:00 AM",
    eventTitle: "Accounting/Personal Finance Class",
    eventFacilitator: "Class Facilitator: Professor Adrian Furnham",
    location: "Campus 1 Wexham SL2 4QS, UK",
    eventType: "class",
  },
  {
    datetime: "27 Jan 2022  |  9: 30 AM - 10:30 AM ",
    eventTitle: "Business/Business Management Class",
    eventFacilitator: "Class Facilitator: Professor Brendan Neiland",
    location: "Campus 2 Wexham SL2 4QS, UK",
    eventType: "class",
  },
  {
    datetime: "27  Jan 2022  | 11:00 AM - 12:00 PM",
    eventTitle: "Intramural Sports teams Tournament",
    eventFacilitator: "Class Facilitator: Charles Spence",
    location: "Campus 3 Wexham SL2 4QS, UK",
    eventType: "event",
  },
];
