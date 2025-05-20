import { useState } from "react";
import "./auth.css";
import Button from "../../components/general/Button";
import Login from "./Login";
import Register from "./Register";

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, set_switch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Authentication">
      <form>
        <div className="auth-header">
          <Button
            label="Sign In"
            className="sign-in-button"
            onClick={() => {
              set_switch(true);
            }}
          />
          <Button
            label="Sign Up"
            className="sign-up-button"
            onClick={() => {
              set_switch(false);
            }}
          />
        </div>
        <div className="auth-form">
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
