import "./game.css"
import {ZooMap} from "../shared/zoo-map/zoo-map";
import Fight from "./fight/fight";
import {Component, useEffect, useState} from "react";
import {getZooGameDetailsById} from "../../api/zoo/zoo.api";
import {useParams} from "react-router-dom";
import {ZooGameDetailsResponse} from "../../api/zoo/zoo.dto";
import {Loader} from "../shared/loader/loader";
import AnimalHistory from "./game-history/animal-history/animal-history";
import {getAnimalsBySpaceId} from "../../api/animal/animal.api";
import {AnimalResponse} from "../../api/animal/animal.dto";
import {Badge} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TitleBadge from "../shared/title-badge/title-badge";
import GameTeam from "./game-team/game-team";
import GameBody from "./game-fight/game-fight";
import GameHistory from "./game-history/game-history";

const Game = () => {
    const {zooId} = useParams();
    const [spaceAnimals, setSpaceAnimals] = useState([] as AnimalResponse[]);
    const [zooGameDetails, setZooGameDetails] = useState<ZooGameDetailsResponse>();

    useEffect(() => {
        getZooGameDetailsById(zooId).then(res => {
            setZooGameDetails(res.data)
        })
    }, []);

    const fetchAnimals = (e: any, index: number) => {
        e.preventDefault()
        getAnimalsBySpaceId(zooGameDetails.spaces[index].id).then(res => {
            setSpaceAnimals(res.data)
        })
    }

    function setAnimalsHistory(value: AnimalResponse[]) {
        setZooGameDetails(prevState => ({...prevState, animalsHistory: value}))
    }

    if (zooGameDetails == null) return <Loader visibility/>
    return (
        <div className="game">
            <GameTeam zooGameDetails={zooGameDetails}/>
            <GameBody
                zooGameDetails={zooGameDetails}
                setAnimalsHistory={setAnimalsHistory}
                fetchAnimals={fetchAnimals}
                spaceAnimals={spaceAnimals}
            />
            <GameHistory zooGameDetails={zooGameDetails}/>
        </div>
    )
}

export default Game