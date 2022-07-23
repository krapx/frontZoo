import "./animal-history.css"
import {AnimalResponse} from "../../../api/animal/animal.dto";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkull} from "@fortawesome/free-solid-svg-icons";

interface AnimalHistoryProps {
    animal: AnimalResponse
}

const AnimalHistory = (props: AnimalHistoryProps) => {
    const {animal} = props;

    return (
        <div className="AnimalHistory">
            <img className="AnimalHistory__img" src={animal.imageLink} alt="animalHistoryImage"/>
            <p className="AnimalHistory__name">{animal.name}</p>
            <FontAwesomeIcon icon={faSkull}/>
        </div>
    )
}

export default AnimalHistory