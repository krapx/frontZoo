import axios from "axios";

export const getSpaceById = (spaceId: number) => axios.get(`http://localhost:8080/api/spaces/${spaceId}`)
export const incrementDefeatedBySpaceId = (spaceId: number) => axios.get(`http://localhost:8080/api/spaces/${spaceId}/defeatedCounter/increment`)
