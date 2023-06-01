import React, { useState } from "react";

const Select = props => {

  const {
    value,
    options,
    className,
    inputClassName,
    optionsClassName,
  } = props;

  const [text, setText] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className={className} style={{position: "relative"}}>
      <input
        className={inputClassName}
        value={text}
        onChange={e => setText(e.target.value)}
        onClick={() => setShowOptions(true)}
      />
      <div
        className={optionsClassName}
        style={{position: "absolute", display: showOptions ? undefined : "none"}}
      >
        {options.map(option => (
          <div className="optionClassName">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;