import React from "react";
import SelectField from "../SelectField/SelectField";
import Textarea from "../Textarea/Textarea";
import Textfield from "../Textfield/Textfield";
import close_icon from "../../assets/icons/close_icon.svg";
import clock from "../../assets/icons/clock.svg";
import users from "../../assets/icons/users.svg";
import "./styles.css";

const ModalContent = ({ handleCloseModal }) => {
  return (
    <>
      <div className="header-section">
        <div className="close-icon-section">
          <img src={close_icon} alt="close modal" onClick={handleCloseModal} />
        </div>
        <div className="modal-title">Add New Events</div>
      </div>
      <div className="modal-body">
        <div className="modal-content-card">
          <div className="main">
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
                <Textfield
                  placeholder={"Name of event"}
                  label={"Title"}
                  name={"title"}
                />
                <Textfield
                  placeholder={"Add a location"}
                  label={"Location"}
                  name={"location"}
                />
                <div className="details-container">
                  <div className="form-opts">
                    <div className="form-opt-active">
                      <div>Event Details</div>
                      <hr className="active-border" />
                    </div>
                    <div className="form-opt">Find a time</div>
                  </div>
                  <div className="event-details-opts">
                    <div className="event-details-opt">
                      <img src={clock} alt="select time" />
                      <span>Select time</span>
                    </div>
                    <div className="event-details-opt">
                      <img src={users} alt="select time" />
                      <span>Add classmate</span>
                    </div>
                  </div>
                  <div className="event-notification">
                    <div style={{ width: "40%" }}>
                      <SelectField
                        name="notification"
                        placeholder={"Notification"}
                        options={[{ label: "Sample", value: "sample" }]}
                      />
                    </div>

                    <div className="notification-time">30</div>
                    <div className="notification-time notification-time-unit">
                      Minutes
                    </div>
                  </div>
                </div>
                <Textfield
                  placeholder={"Copy and paste external event link here"}
                  label={"Event link"}
                  name={"eventLink"}
                />
              </div>
            </div>
            <div className="form-right">
              <Textarea
                label={"Description/instructions"}
                name={"description"}
              />
            </div>
          </div>

          <div className="buttons-container">
            <div className="buttons">
              <div className="cancel-btn">Cancel</div>
              <div className="save-btn">Save more</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalContent;
