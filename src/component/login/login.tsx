import "./login.css"
import {Header} from "../shared/header/header";
import {Button, TextField} from "@mui/material";

export const Login = () => {

    return (
        <>
            <Header/>
            <div className="login" >
                <div className="loginBox">
                    <TextField required id="login-input" label="Pseudo"/>
                    <TextField required id="password-input" label="Password" type="password" autoComplete="current-password" />
                    <Button id="login-button"variant="contained">Login</Button>
                </div>
            </div>

        </>
    );
}