import axios from "axios";

export const postGenerateZooGame = (body: any) => axios.post("http://localhost:8080/api/zoos/generate", body)
export const getAllZoosByUserId = (userId: number) => axios.get(`http://localhost:8080/api/zoos/userId/${userId}`)
export const getAllZooDetailsByUserId = (userId: number) => axios.get(`http://localhost:8080/api/zoos/userId/${userId}/details`)