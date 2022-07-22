import {CreatePlayerAnimalRequest, PlayerAnimalResponse} from "../player-animal/player-animal.dto";
import {AnimalResponse} from "../animal/animal.dto";
import {SpaceResponse} from "../space/space.dto";

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
    playerId: number
    killNumber: number
    completedSpacesNumber: number
    playerAnimal: CreatePlayerAnimalRequest
}

export interface ZooGameDetailsResponse {
    id: number
    name: string
    zooStatus: 'IN_PROGRESS' | 'FINISH'
    createdAt: string
    updatedAt: string
    playerId: number
    killNumber: number
    playerAnimals: PlayerAnimalResponse[]
    animalsHistory: AnimalResponse[]
    spaces: SpaceResponse[]
}

export interface GenerateZoo {
    playerAnimal: {
        name: string
        image: string
    }
    spaces: {
        name: string
        animalsNumber: number
    }[]
}