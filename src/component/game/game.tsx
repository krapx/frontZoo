import "./game.css"
import {ZooMap} from "../shared/zoo-map/zoo-map";
import {getRandZooAnimals} from "../../api/zoo-animal.api";
import Fight from "./fight/fight";
import {useEffect, useState} from "react";
import {getZooGameDetailsById} from "../../api/zoo/zoo.api";
import {useParams} from "react-router-dom";
import {ZooGameDetailsResponse} from "../../api/zoo/zoo.dto";
import {Loader} from "../shared/loader/loader";
import AnimalHistory from "./animal-history/animal-history";

const initState = {
    currentSpaceId: null,
};
const Game = () => {
    const {zooId} = useParams();
    const [state, setState] = useState(initState);
    const [zooGameDetails, setZooGameDetails] = useState<ZooGameDetailsResponse>();

    useEffect(() => {
        getZooGameDetailsById(zooId).then(res => {
            setZooGameDetails(res.data)
        })
    }, []);

    const fetchAnimals = (e: any) => {
        e.preventDefault()
        console.log("you click on me !")
        //
        // getRandZooAnimals(10).then(res => {
        //     const data = res.data;
        // }).catch(err => {
        //     console.log(err)
        // })
    }

    if (zooGameDetails == null) return <Loader visibility/>
    return (
        <div className="game">
            <div>
                <h2>Historique</h2>
                {
                    zooGameDetails.animalsHistory.map(animal => (
                        <AnimalHistory animal={animal}/>
                    ))
                }
            </div>
            <div className="game__body">
                <h2>{zooGameDetails.name}</h2>
                <div className="game__fight">
                    <Fight userAnimal={zooGameDetails.userAnimal}/>
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