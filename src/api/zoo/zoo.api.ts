import axios from "axios";
import {GenerateZoo} from "./zoo.dto";

export const postGenerateZooGame = (body: GenerateZoo) => axios.post("http://localhost:8080/api/zoos/generate", body)
export const getAllZoosByPlayerId = () => axios.get(`http://localhost:8080/api/zoos/playerId/`)
export const getAllZooDetailsByPlayerId = () => axios.get(`http://localhost:8080/api/zoos/playerId/details`)
export const getZooGameDetailsById = (zooId: string | undefined) => axios.get(`http://localhost:8080/api/zoos/${zooId}/game-details`)