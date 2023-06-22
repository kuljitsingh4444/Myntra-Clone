import React, { useState } from "react";
import Select, { components } from "react-select";
import "./dropdown.css";

const Dropdown = ({ currentValue, prefix, options, onChange }) => {
  return (
    <Select
      value={currentValue}
      onChange={(e) => onChange(e)}
      className="sortby"
      options={options}
      components={{
        SingleValue: ({ children, ...props }) => {
          return (
            <components.SingleValue {...props}>
              {prefix + children}
            </components.SingleValue>
          );
        },
      }}
    />
  );
};

export default Dropdown;
