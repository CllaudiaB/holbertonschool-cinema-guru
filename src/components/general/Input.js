import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './general.css';

function Input({
    label,
    type,
    className,
    value,
    setValue,
    icon=null,
    inputAttributes={},
}) {
    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={className}>
            <label htmlFor={label}>
                {icon && <FontAwesomeIcon icon={icon} />}
                {label}
            </label>
            <input
                type={type}
                className={className}
                value={value}
                onChange={handleInput}
                id={label}
                {...inputAttributes}
            />
        </div>
    );
}

export default Input;
