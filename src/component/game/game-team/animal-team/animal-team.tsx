import "./animal-team.css"
import {PlayerAnimalResponse} from "../../../../api/player-animal/player-animal.dto";

interface AnimalTeamProps {
    animals: PlayerAnimalResponse
}

const AnimalTeam = (props: AnimalTeamProps) => {
    const {animals} = props;

    return (
        <div className="AnimalTeam">
            <img className="AnimalTeam__img" src={animals.image} alt="animalHistoryImage"/>
            <p className="AnimalTeam__name">{animals.name}</p>
        </div>
    )
}


export default AnimalTeam