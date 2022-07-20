export interface ZooResponse {
    id: number
    name: string
    zooStatus: 'IN_PROGRESS' | 'FINISH'
    userId: number
}