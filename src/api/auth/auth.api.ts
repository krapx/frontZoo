import axios from "axios";
import {LoginRequest, RegisterRequest} from "./auth.dto";

export const login = (loginRequest: LoginRequest) => axios.post("http://localhost:8080/login", loginRequest)
export const register = (registerRequest: RegisterRequest) => axios.post("http://localhost:8080/register", registerRequest)