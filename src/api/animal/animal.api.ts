import axios from "axios";
import {UpdateAnimalRequest} from "./animal.dto";

export const getStarters = () => axios.get("http://localhost:8080/api/animals/starters")
export const getAnimalsBySpaceId = (spaceId: number) => axios.get(`http://localhost:8080/api/animals/spaceId/${spaceId}`)
export const updateAnimal = (body: UpdateAnimalRequest) => axios.patch(`http://localhost:8080/api/animals/`, body)