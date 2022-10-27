import React from "react";
import tooltip from "../../assets/icons/tooltip.svg";
import "./styles.css";

const Textarea = ({ label, name }) => {
  return (
    <div className="text-field">
      <div>
        <label htmlFor="title" className="label">
          <span>{label}</span>
          <img src={tooltip} alt="tool tip" />
        </label>
      </div>
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="22"
        placeholder="Write a summary and any details your should know about the event "
        className="textarea-input"
      ></textarea>
    </div>
  );
};

export default Textarea;
