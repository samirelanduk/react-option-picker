import React, { useEffect, useRef } from "react";

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

  const ref = useRef();

  useEffect(() => {
    const dismiss = e => {
      if (ref.current.contains(e.target)) return;
      setShowOptions(false)
    };
    window.addEventListener("click", dismiss);
    return () => window.removeEventListener("click", dismiss);
  }, [])

  const optionClicked = option => {
    setValue(option.id);
    setShowOptions(false);
  }

  return (
    <div
      ref={ref}
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