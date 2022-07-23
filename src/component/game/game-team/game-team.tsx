import {ZooGameDetailsResponse} from "../../../api/zoo/zoo.dto";
import TitleBadge from "../../shared/title-badge/title-badge";

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
                <div>{playerAnimal.name}</div>
            ))}
        </div>
    )
}

export default GameTeam