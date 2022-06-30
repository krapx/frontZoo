import axios from "axios";

export const getRandZooAnimal = () => axios.get("https://zoo-animal-api.herokuapp.com/animals/rand")
export const getRandZooAnimals = (number: number) => axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand/${number}`)
export const postGenerateZooGame = (body: any) => axios.post("http://localhost:8080/api/zoos/generate", body)
export const getStarters = () => axios.get("http://localhost:8080/api/animals/starters")