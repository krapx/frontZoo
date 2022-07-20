import axios from "axios";
import {CreateUserAnimalRequest} from "./user-animal.dto";

export const createUserAnimal = (body: CreateUserAnimalRequest) => axios.post("http://localhost:8080/api/user-animals", body)
export const getUserAnimalByUserId = (userAnimalId: number) => axios.get(`http://localhost:8080/api/user-animals/userId/${userAnimalId}`)
