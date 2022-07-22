import "./login.css"
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {LoginRequest} from "../../api/auth/auth.dto";
import {login} from "../../api/auth/auth.api";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const initState = {
    username: "",
    password: ""
};
const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = useState(initState);

    const handleSetState = (e: any) => setState(prevState => ({...prevState, [e.target.name]: e.target.value}))

    function handleSubmit(e: any) {
        e.preventDefault()

        const body: LoginRequest = {
            username: state.username,
            password: state.password
        };
        login(body).then( res => {
            localStorage.setItem('token', res.data);
            axios.defaults.headers.common['Authorization'] =`Bearer ${localStorage.getItem('token')}`
            navigate("/home")
        })

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
                <Button variant="contained" type="submit">Login</Button>
                <Link className="register__button" to={"/register"}>register</Link>
            </form>
        </div>
    )
}

export default Login