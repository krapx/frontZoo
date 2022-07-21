import "./login.css"
import {Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";

const initState = {
    username: "",
    password: ""
};
const Login = () => {
    const [state, setState] = useState(initState);

    const handleSetState = (e: any) => setState(prevState => ({...prevState, [e.target.name]: e.target.value}))

    function handleSubmit(e: any) {
        e.preventDefault()
        console.log("Submit this :")
        console.log(state)
    }

    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <TextField
                    name="username"
                    label="username"
                    variant="standard"
                    onChange={handleSetState}
                />
                <TextField
                    name="password"
                    label="password"
                    variant="standard"
                    type="password"
                    onChange={handleSetState}
                />
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Login