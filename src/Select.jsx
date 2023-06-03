import React, { useState } from "react";
import Options from "./Options.jsx";

const Select = props => {
  /**
   * @props {string} value - The currently selected value.
   * @props {func} setValue - A function which sets the value to whatever is selected.
   * @props {array} options - A list of objects, with `id` and `label` attributes.
   * @props {string} className - A class name for the outermost div.
   * @props {string} openClassName - A class name for the outpermost div when open.
   * @props {string} inputClassName - A class name for the input.
   * @props {string} openInputClassName - A class name for the input when open.
   * @props {string} optionsClassName - A class name for the options list.
   * @props {string} optionClassName - A class name for each option.
   * @props {string} selectedOptionClassName - A class name for the selected option.
   */

  const {
    value,
    setValue,
    options,
    className,
    openClassName,
    inputClassName,
    openInputClassName,
    optionsClassName,
    optionClassName,
    selectedOptionClassName
  } = props;

  const [showOptions, setShowOptions] = useState(false);

  const selectedOption = options.find(option => option.id === value);

  const displayText = selectedOption?.label || "";

  const inputClicked = e => {
    setShowOptions(true);
    if (!showOptions) e.stopPropagation();
  }

  return (
    <div
      className={`option-picker ${!showOptions || "option-picker-open"} ${!showOptions || openClassName || ""} ${className || ""}`}
      style={{position: "relative"}}
    >
      <input
        className={`option-picker-input ${!showOptions || "option-picker-input-open"} ${!showOptions || openInputClassName || ""} ${inputClassName || ""}`}
        value={displayText}
        onClick={inputClicked}
        readOnly
      />
      {showOptions && (
        <Options
          options={options}
          value={value}
          setValue={setValue}
          setShowOptions={setShowOptions}
          optionsClassName={optionsClassName}
          optionClassName={optionClassName}
          selectedOptionClassName={selectedOptionClassName}
        />
      )}
    </div>
  );
};

export default Select;