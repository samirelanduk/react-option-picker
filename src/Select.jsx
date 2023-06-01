import React, { useState } from "react";

const Select = props => {

  const {
    value,
    setValue,
    options,
    filter,
    className,
    inputClassName,
    optionsClassName,
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
    <div className={className} style={{position: "relative"}}>
      <input
        className={inputClassName}
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
            className="optionClassName"
            onClick={() => optionClicked(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;