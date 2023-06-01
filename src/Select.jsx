import React from "react";

const Select = props => {

  const {
    className,
    inputClassName,
  } = props;

  return (
    <div className={className}>
      <input
        className={inputClassName}
      />
    </div>
  );
};

export default Select;