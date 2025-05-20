import "./general.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Button({
    label,
    className = '',
    onClick,
    icon=null,
}) {
    return (
        <div className={className}>
            <button
                className={className}
                onClick={onClick}
            >
                {icon && <FontAwesomeIcon icon={icon} />}
                {label}
            </button>
        </div>
    );
}
export default Button;
