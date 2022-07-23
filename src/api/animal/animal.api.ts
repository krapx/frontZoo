import axios from "axios";
import {UpdateAnimalRequest} from "./animal.dto";

export const getStarters = () => axios.get("http://localhost:8080/api/animals/starters")
export const getAnimalsBySpaceId = (spaceId: number) => axios.get(`http://localhost:8080/api/animals/spaceId/${spaceId}`)
export const getAllBySpaceIdInAndStatus = (zooId: number) => axios.get(`http://localhost:8080/api/animals/zooId/${zooId}/history`)
export const updateAnimal = (animalId: number, body: UpdateAnimalRequest) => axios.put(`http://localhost:8080/api/animals/${animalId}`, body)
export const updateAnimalStatus = (animalId: number, status: string) => axios.put(`http://localhost:8080/api/animals/${animalId}/status/${status}`)