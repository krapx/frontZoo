import axios from "axios";

export const postGenerateZooGame = (body: any) => axios.post("http://localhost:8080/api/zoos/generate", body)
export const getAllZoosByPlayerId = (playerId: number) => axios.get(`http://localhost:8080/api/zoos/playerId/${playerId}`)
export const getAllZooDetailsByPlayerId = (playerId: number) => axios.get(`http://localhost:8080/api/zoos/playerId/${playerId}/details`)
export const getZooGameDetailsById = (zooId: string | undefined) => axios.get(`http://localhost:8080/api/zoos/${zooId}/game-details`)