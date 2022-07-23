export interface AnimalResponse {
    id: number
    name: string
    type: string
    status: string
    lengthMax: number
    weightMax: number
    arrivalDate: string
    imageLink: string
}

export interface UpdateAnimalRequest {
    name: string
    type: string
    status: "Alive" | "Dead"
    lengthMax: number
    weightMax: number
    arrivalDate: string
    imageLink: string
}