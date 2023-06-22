import React from "react";
import Select, { components } from "react-select";
import "./dropdown.css";

const Dropdown = ({ currentValue, prefix, options, onChange }) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      borderColor: "rgb(212, 213, 217)",
      boxShadow: 'none',
      border: 'none'
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused ? '#f5f5f6' : isSelected? '#f5f5f6': "unset",
      color: "black",
      zIndex: 1,
      fontWeight: isSelected ? "bold" : "unset",
    })
  };

  return (
    <Select
      styles={customStyles}
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
