import "./game-fight.css"
import Fight from "../fight/fight";
import {ZooMap} from "../../shared/zoo-map/zoo-map";
import {ZooGameDetailsResponse} from "../../../api/zoo/zoo.dto";
import {AnimalResponse} from "../../../api/animal/animal.dto";


interface GameBodyProps {
    zooGameDetails: ZooGameDetailsResponse
    spaceAnimals: AnimalResponse[]
    fetchAnimals: (e: any, index: number) => void
    setAnimalsHistory: (value: AnimalResponse[]) => void
}

const GameBody = (props: GameBodyProps) => {
    const {zooGameDetails, spaceAnimals, fetchAnimals, setAnimalsHistory} = props
    return (
        <div className="GameBody">
            <h2 className="GameBody__title">{zooGameDetails.name}</h2>
            {spaceAnimals.length === 0
                ? <></>
                : (
                    <Fight
                        setAnimalsHistory={setAnimalsHistory}
                        userAnimals={zooGameDetails.playerAnimals}
                        spaceAnimals={spaceAnimals}
                        zooId={zooGameDetails.id}
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