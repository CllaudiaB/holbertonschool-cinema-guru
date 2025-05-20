import { faUser, faKey, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";


function Register({ username, password, setUsername, setPassword }) {

    return (
        <div className="Register">
            <h3>Create a new account</h3>
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
                label="Sign Up"
                className="button-class"
                onClick={() => { }}
                icon={faPlus}
                type="submit"
            />
        </div>
    );
}

export default Register;
