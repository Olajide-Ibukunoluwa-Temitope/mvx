import React from "react";
import tooltip from "../../assets/icons/tooltip.svg";
import "./styles.css";

const Textfield = ({ label, name, placeholder }) => {
  return (
    <div className="text-field">
      <div>
        <label htmlFor="title" className="label">
          <span>{label}</span>
          <img src={tooltip} alt="tool tip" />
        </label>
      </div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="text-input"
      />
    </div>
  );
};

export default Textfield;
