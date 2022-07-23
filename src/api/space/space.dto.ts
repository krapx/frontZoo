export interface SpaceResponse {
    id: number
    name: string
    status: 'LOCKED' | 'IN_PROGRESS' | 'COMPLETED'
    zooId: number
}