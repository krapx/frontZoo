import {ZooGameDetailsResponse} from "../../../api/zoo/zoo.dto";
import TitleBadge from "../../shared/title-badge/title-badge";
import AnimalTeam from "./animal-team/animal-team";

const GameTeam = (props: { zooGameDetails: ZooGameDetailsResponse }) => {
    const {zooGameDetails} = props
    return (
        <div className="game__history">
            <TitleBadge
                title="Mon équipe"
                predicate={zooGameDetails.playerAnimals.length === 0}
                badgeMessage={zooGameDetails.playerAnimals.length + ""}
            />
            {zooGameDetails.playerAnimals.map(playerAnimal => (
                <AnimalTeam key={playerAnimal.id} animals={playerAnimal} />
            ))}
        </div>
    )
}

export default GameTeam