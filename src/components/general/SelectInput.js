import React from 'react';
import './general.css';

function SelectInput({
  label,
  options,
  className,
  value,
  setValue,
}){
  function handleSelect(event){
    setValue(event.target.value);
  };

  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <select value={value} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
