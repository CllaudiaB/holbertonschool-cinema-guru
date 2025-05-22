import React from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


function Header({ userUsername, setIsLoggedIn }) {
  function handleLogout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
        <nav className="header">
            <div className="header-left">
                <h1 className="header-title">Cinema Guru</h1>
            </div>
            <div className="header-right">
                <div className="user-info">
                    <img src="https://picsum.photos/100/100" alt="User Avatar" />
                    <p>Welcome, {userUsername}!</p>
                </div>
                <span className="logout-btn" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                </span>
            </div>
        </nav>
    );
}

export default Header;
