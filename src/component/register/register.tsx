import "./register.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {RegisterRequest} from "../../api/auth/auth.dto";
import {Button, TextField} from "@mui/material";
import {register} from "../../api/auth/auth.api";

const initState = {
    username: "",
    password: "",
    email:""
};
const Register = () => {
    const navigate = useNavigate();
    const [state, setState] = useState(initState);

    const handleSetState = (e: any) => setState(prevState => ({...prevState, [e.target.name]: e.target.value}))

    function handleSubmit(e: any) {
        e.preventDefault()

        const body: RegisterRequest = {
            username: state.username,
            password: state.password,
            email: state.email

        };
        register(body).then( res => {
            navigate("/login")
        }).finally(() => setState(e.target))

    }


    return (
        <div className="register">
            <form className="register__form" onSubmit={handleSubmit}>
                <h2>Register</h2>
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
                <TextField
                    name="email"
                    label="email"
                    variant="standard"
                    onChange={handleSetState}
                />
                <Button variant="contained" type="submit">Register</Button>
            </form>
        </div>
    )
}

export default Register