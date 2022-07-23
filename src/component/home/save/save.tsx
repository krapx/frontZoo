import {convertToHumanReadableDate} from "../../../common/file-utils";
import {ZooDetailsResponse} from "../../../api/zoo/zoo.dto";
import {useNavigate} from "react-router-dom";

interface SaveProps {
    zoo: ZooDetailsResponse
}

const Save = (props: SaveProps) => {
    const navigate = useNavigate();
    const {zoo} = props

    return (
        <button className="home__zoo" onClick={() => navigate(`/game/${zoo.id}`)}>
            <div className="home__zoo__info">
                <h2>{zoo.name}</h2>
                <div className="home__zoo__row">
                    <h4>Status :</h4>
                    <div>{zoo.zooStatus}</div>
                </div>
                <div className="home__zoo__row">
                    <h4>Zones découvertes :</h4>
                    <div>{zoo.completedSpacesNumber}</div>
                </div>
                <div className="home__zoo__row">
                    <h4>Victoires :</h4>
                    <div>{zoo.killNumber}</div>
                </div>
                <div className="home__zoo__row">
                    <h4>Créé le :</h4>
                    <div>{convertToHumanReadableDate(zoo.createdAt)}</div>
                </div>
            </div>
            <img className="home__zoo__img" src={zoo.playerAnimal.image} alt="imgUserAnimal"/>
        </button>
    )
}

export default Save