import {Button} from "@mui/material"
import "./home.css"
import {getAllZooDetailsByPlayerId} from "../../api/zoo/zoo.api";
import {useEffect, useState} from "react";
import {ZooDetailsResponse} from "../../api/zoo/zoo.dto";
import {Loader} from "../shared/loader/loader";
import {useNavigate} from "react-router-dom";
import Save from "./save/save";

const Home = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [zoos, setZoos] = useState([] as ZooDetailsResponse[]);

    useEffect(() => {
        getAllZooDetailsByPlayerId().then(res => {
            setZoos(res.data)
        }).finally(() => setIsLoading(false))
    }, []);

    if (isLoading) return <Loader visibility={isLoading}/>
    return (
        <div className="home">
            <h2 className="home__title">JEEzoo</h2>
            <p>Combat dans un zoo pour devenir le meilleur</p>
            <div className="home__zoos">
                {zoos.map(zoo => (<Save key={zoo.id} zoo={zoo}/>))}
            </div>
            <div className="home__actions">
                <Button href="/draft" variant="contained">New Save</Button>
            </div>
        </div>
    )
}

export default Home