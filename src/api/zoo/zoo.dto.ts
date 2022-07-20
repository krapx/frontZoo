export interface ZooResponse {
    id: number
    name: string
    zooStatus: 'IN_PROGRESS' | 'FINISH'
    createdAt: string
    updatedAt: string
    userId: number
}

export interface ZooResponseDetails {
    id: number
    name: string
    zooStatus: 'IN_PROGRESS' | 'FINISH'
    createdAt: string
    updatedAt: string
    userId: number
    killNumber: number
}