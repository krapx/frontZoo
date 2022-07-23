import Fight from "../fight/fight";
import {ZooMap} from "../../shared/zoo-map/zoo-map";
import {ZooGameDetailsResponse} from "../../../api/zoo/zoo.dto";
import {AnimalResponse} from "../../../api/animal/animal.dto";


interface GameBodyProps {
    zooGameDetails: ZooGameDetailsResponse
    spaceAnimals: AnimalResponse[]
    fetchAnimals: (e: any, index: number) => void
}

const GameBody = (props: GameBodyProps) => {
    const {zooGameDetails, spaceAnimals, fetchAnimals} = props
    return (
        <div className="game__body">
            <h2>{zooGameDetails.name}</h2>
            {spaceAnimals.length === 0
                ? <></>
                : (
                    <Fight
                        userAnimals={zooGameDetails.playerAnimals}
                        spaceAnimals={spaceAnimals}
                    />
                )
            }
            <ZooMap
                fetchAnimals={fetchAnimals}
                spaces={zooGameDetails.spaces}
            />
        </div>
    )
}

export default GameBody