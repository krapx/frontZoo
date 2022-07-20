import axios from "axios";

export const getRandZooAnimal = () => axios.get("https://zoo-animal-api.herokuapp.com/animals/rand")
export const getRandZooAnimals = (number: number) => axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand/${number}`)
