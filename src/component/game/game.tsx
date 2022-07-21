import "./game.css"
import {ZooMap} from "../shared/zoo-map/zoo-map";
import Fight from "./fight/fight";
import {useEffect, useState} from "react";
import {getZooGameDetailsById} from "../../api/zoo/zoo.api";
import {useParams} from "react-router-dom";
import {ZooGameDetailsResponse} from "../../api/zoo/zoo.dto";
import {Loader} from "../shared/loader/loader";
import AnimalHistory from "./animal-history/animal-history";
import {getAnimalsBySpaceId} from "../../api/animal/animal.api";
import {AnimalResponse} from "../../api/animal/animal.dto";

const initState = {
    currentSpaceId: null,
};
const Game = () => {
    const {zooId} = useParams();
    const [state, setState] = useState(initState);
    const [spaceAnimals, setSpaceAnimals] = useState([] as AnimalResponse[]);
    const [zooGameDetails, setZooGameDetails] = useState<ZooGameDetailsResponse>();

    useEffect(() => {
        getZooGameDetailsById(zooId).then(res => {
            setZooGameDetails(res.data)
        })
    }, []);

    const fetchAnimals = (e: any, index: number) => {
        e.preventDefault()
        if (zooGameDetails.spaces.length - 1 < index) return;
        getAnimalsBySpaceId(zooGameDetails.spaces[index].id).then(res => {
            setSpaceAnimals(res.data)
        })
    }

    if (zooGameDetails == null) return <Loader visibility/>
    return (
        <div className="game">
            <div>
                <h2>Historique</h2>
                {
                    zooGameDetails.animalsHistory.map(animal => (
                        <AnimalHistory key={animal.id} animal={animal}/>
                    ))
                }
            </div>
            <div className="game__body">
                <h2>{zooGameDetails.name}</h2>
                <div className="game__fight">
                    <Fight
                        userAnimal={zooGameDetails.playerAnimal}
                        spaceAnimals={spaceAnimals}
                    />
                </div>
                <div className="game__map">
                    <ZooMap
                        fetchAnimals={fetchAnimals}
                        spaces={zooGameDetails.spaces}
                    />
                </div>
            </div>
            <div>??????????????????????</div>
        </div>
    )
}

export default Game