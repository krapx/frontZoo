import axios from "axios";

export const postGenerateZooGame = (body: any) => axios.post("http://localhost:8080/api/zoos/generate", body)