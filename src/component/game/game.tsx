import "./game.css"
import {ZooMap} from "../shared/zoo-map/zoo-map";
import {getRandZooAnimals} from "../../api/zoo-animal.api";
import Fight from "./fight/fight";
import {useEffect, useState} from "react";
import {getZooGameDetailsById} from "../../api/zoo/zoo.api";
import {useParams} from "react-router-dom";
import {ZooGameDetailsResponse} from "../../api/zoo/zoo.dto";
import {Loader} from "../shared/loader/loader";

const Game = () => {
    const {zooId} = useParams();
    const [state, setState] = useState<ZooGameDetailsResponse>();

    useEffect(() => {
        getZooGameDetailsById(zooId).then(res => {
            setState(res.data)
        })
    }, []);

    const fetchAnimals = (e: any) => {
        e.preventDefault()

        getRandZooAnimals(10).then(res => {
            const data = res.data;
        }).catch(err => {
            console.log(err)
        })
    }

    if (state == null) return <Loader visibility/>
    return (
        <div className="game">
            <h2>{state.name}</h2>
            <div className="game__fight">
                <Fight userAnimal={state.userAnimal}/>
            </div>
            <div className="game__map">
                <ZooMap fetchAnimals={fetchAnimals}/>
            </div>
        </div>
    )
}

export default Game