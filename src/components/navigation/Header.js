import "./navigation.css";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header({ userUsername, setIsLoggedIn }) {

    function logout() {
        localStorage.removeItem("accessToken");
        setIsLoggedIn(false);
    }

    return (
        <nav className="Header">
            <img src="https://picsum.photos/100/100" alt="User picture" />
            <p className="nav-text">Welcome, {userUsername}!</p>
            <span onClick={logout}>{<FontAwesomeIcon icon={faSignOut}/>} Logout</span>
        </nav>
    );
}
export default Header;