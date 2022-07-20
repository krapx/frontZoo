import {CreateUserAnimalRequest, UserAnimalResponse} from "../user-animal/user-animal.dto";

export interface ZooResponse {
    id: number
    name: string
    zooStatus: 'IN_PROGRESS' | 'FINISH'
    createdAt: string
    updatedAt: string
    userId: number
}

export interface ZooDetailsResponse {
    id: number
    name: string
    zooStatus: 'IN_PROGRESS' | 'FINISH'
    createdAt: string
    updatedAt: string
    userId: number
    killNumber: number
    completedSpacesNumber: number
    userAnimal: CreateUserAnimalRequest
}

export interface ZooGameDetailsResponse {
    id: number
    name: string
    zooStatus: 'IN_PROGRESS' | 'FINISH'
    createdAt: string
    updatedAt: string
    userId: number
    killNumber: number
    userAnimal: UserAnimalResponse
}