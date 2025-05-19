import './general.css';


function SelectInput({
    label,
    options = [],
    className = '',
    value,
    setValue,
}) {
    const handleSelect = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={className}>
            <label htmlFor={label}>
                {label}
                <select value={value} onChange={handleSelect}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default SelectInput;
