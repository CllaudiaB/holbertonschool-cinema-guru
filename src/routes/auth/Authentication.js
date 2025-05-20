import { useState } from "react";
import "./auth.css";
import Button from "../../components/general/Button";
import Login from "./Login";
import Register from "./Register";
import axios from "axios";

function Authentication({ setIsLoggedIn, setUserUsername }) {
    const [_switch, set_switch] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(onSubmit) {
        onSubmit.preventDefault();

        const url = _switch ? "/api/auth/login" : "/api/auth/register";

        axios.post(url, {
            username,
            password
        })
            .then(response => {
                localStorage.setItem("accessToken", response.data.accessToken);
                setUserUsername(username);
                setIsLoggedIn(true);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="Authentication">
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
                <form onSubmit={handleSubmit}>
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
                </form>
            </div>
        </div >
    );
}

export default Authentication;
