import React from "react";
import "./styles.css";

const SelectField = ({ name, placeholder, options }) => {
  return (
    <div className="custom-container">
      <select name={name} className="select-input">
        <option value={""}>{placeholder}</option>
        {options.map((item, idx) => {
          return (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectField;
