import {ZooGameDetailsResponse} from "../../../api/zoo/zoo.dto";
import TitleBadge from "../../shared/title-badge/title-badge";
import AnimalHistory from "./animal-history/animal-history";
import {Loader} from "../../shared/loader/loader";

const GameHistory = (props: { zooGameDetails: ZooGameDetailsResponse }) => {
    const {zooGameDetails} = props
    if (zooGameDetails.animalsHistory == null) return <Loader visibility/>
    return (
        <div className="game__history">
            <TitleBadge
                title="Historique"
                predicate={zooGameDetails.animalsHistory.length === 0}
                badgeMessage={`${zooGameDetails.animalsHistory.length} animaux découverts`}
            />
            {zooGameDetails.animalsHistory.map(animal => (
                <AnimalHistory key={animal.id} animal={animal}/>
            ))}
        </div>
    )
}

export default GameHistory