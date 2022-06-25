import "./game.css"
import {ZooMap} from "../shared/zoo-map/zoo-map";
import {getRandZooAnimals} from "../../api/zoo-animal.api";
import Fight from "./fight/fight";

const Game = () => {

    const fetchAnimals = (e: any) => {
        e.preventDefault()

        getRandZooAnimals(10).then(res => {
            const data = res.data;
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="game">
            <h2>JEEzoo</h2>
            <div className="game__fight">
                <Fight/>
            </div>
            <div className="game__map">
                <ZooMap fetchAnimals={fetchAnimals}/>
            </div>
        </div>
    )
}

export default Game