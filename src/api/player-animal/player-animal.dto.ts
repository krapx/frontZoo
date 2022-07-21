export interface CreatePlayerAnimalRequest {
    name: string
    image: string
    playerId: number
    zooId: number
}

export interface PlayerAnimalResponse {
    id: number
    damage: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
    playerId: number
    zooId: number
}