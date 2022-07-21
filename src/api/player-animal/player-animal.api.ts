import axios from "axios";
import {CreatePlayerAnimalRequest} from "./player-animal.dto";

export const createPlayerAnimal = (body: CreatePlayerAnimalRequest) => axios.post("http://localhost:8080/api/player-animals", body)
export const getUserAnimalByPlayerId = (playerAnimalId: number) => axios.get(`http://localhost:8080/api/player-animals/playerId/${playerAnimalId}`)
