import React, { useState } from 'react';
import './auth.css';

import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';
import axios from 'axios';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const endpoint = _switch ? '/api/auth/login' : '/api/auth/register';

    axios.post(endpoint, { username, password })
      .then(function (response) {
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
      })
      .catch(function (error) {
        console.error('Authentication error:', error);
        alert("Erreur d'authentification.");
      });
  }

  return (
    <div className="auth-container">
      <div className="auth-header">
        <Button
          label="Sign In"
          type="button"
          className="sign-in-button"
          onClick={function () {
            setSwitch(true);
          }}
        />
        <Button
          label="Sign Up"
          type="button"
          className="sign-up-button"
          onClick={function () {
            setSwitch(false);
          }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="auth-content">
          {_switch ? (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          ) : (
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Authentication;
