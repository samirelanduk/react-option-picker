import React, { useState } from "react";

const Select = props => {
  /**
   * @props {string} className - A class name for the outermost div.
   * @props {string} openClassName - A class name for the outpermost div when open.
   * @props {string} inputClassName - A class name for the input.
   * @props {string} openInputClassName - A class name for the input when open.
   * @props {string} optionsClassName - A class name for the options list.
   * @props {string} optionClassName - A class name for each option.
   * 
   */

  const {
    value,
    setValue,
    options,
    filter,
    className,
    openClassName,
    inputClassName,
    openInputClassName,
    optionsClassName,
    optionClassName
  } = props;

  const [typedText, setTypedText] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const selectedOption = options.find(option => option.id === value);

  const displayText = typedText || selectedOption?.label || "";

  const optionClicked = option => {
    setValue(option.id);
    setShowOptions(false);
  }

  return (
    <div
      className={`option-picker ${!showOptions || "option-picker-open"} ${!showOptions || openClassName || ""} ${className || ""}`}
      style={{position: "relative"}}
    >
      <input
        className={`option-picker-input ${!showOptions || "option-picker-input-open"} ${!showOptions || openInputClassName || ""} ${inputClassName || ""}`}
        value={displayText}
        onChange={e => filter && setText(e.target.value)}
        onClick={() => setShowOptions(true)}
      />
      <div
        className={optionsClassName}
        style={{position: "absolute", display: showOptions ? undefined : "none"}}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`option-picker-options ${optionsClassName || ""}`}
            onClick={() => optionClicked(option)}
          >
            <div
              className={`option-picker-option ${optionClassName || ""}`}
            >
              {option.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;