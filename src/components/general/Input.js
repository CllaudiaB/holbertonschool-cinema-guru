import React from 'react';
import './general.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes = {},
}) {
  function handleInput(event){
    setValue(event.target.value);
  };

  return (
    <div className={className}>
      <label htmlFor={label}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}
      </label>

      <div className="input-inner">
        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
};

export default Input;
