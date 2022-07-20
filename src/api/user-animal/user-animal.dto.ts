export interface CreateUserAnimalRequest {
    name: string
    image: string
    userId: number
    zooId: number
}

export interface UserAnimalResponse {
    id: number
    damage: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
    userId: number
    zooId: number
}