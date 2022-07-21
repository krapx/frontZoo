import axios from "axios";

export const getStarters = () => axios.get("http://localhost:8080/api/animals/starters")
export const getAnimalsBySpaceId = (spaceId: number) => axios.get(`http://localhost:8080/api/animals/spaceId/${spaceId}`)