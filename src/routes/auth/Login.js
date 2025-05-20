import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";


function Login({ username, password, setUsername, setPassword }) {

    return (
        <div className="Login">
            <h3>Sign in with your account</h3>
            <Input
                label="Username:"
                type="text"
                className="input-text"
                value={username}
                setValue={(e) => {
                    setUsername(e.target.value);
                }}
                icon={faUser}
            />
            <Input
                label="Password:"
                type="password"
                className="input-text"
                value={password}
                setValue={(e) => {
                    setPassword(e.target.value);
                }}
                icon={faKey}
            />
            <Button
                label="Sign In"
                className="button-class"
                onClick={() => { }}
                icon={faKey}
                type="submit"
            />
        </div>
    );
}

export default Login;
