import React from "react";

const Options = props => {

  const {
    options,
    value,
    setValue,
    setShowOptions,
    optionsClassName,
    optionClassName,
    selectedOptionClassName
  } = props;

  const optionClicked = option => {
    setValue(option.id);
    setShowOptions(false);
  }

  return (
    <div
      className={optionsClassName}
      style={{position: "absolute"}}
    >
      {options.map((option, index) => (
        <div
          key={index}
          className={`option-picker-options ${optionsClassName || ""}`}
          onClick={() => optionClicked(option)}
        >
          <div
            className={`option-picker-option ${option.id !== value || "option-picker-option-selected"} ${option.id !== value || selectedOptionClassName} ${optionClassName || ""}`}
          >
            {option.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;