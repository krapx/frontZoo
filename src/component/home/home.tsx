import {Button} from "@mui/material"
import "./home.css"
import {getAllZooDetailsByUserId, getAllZoosByUserId} from "../../api/zoo/zoo.api";
import {useEffect, useState} from "react";
import {ZooDetailsResponse} from "../../api/zoo/zoo.dto";
import {Loader} from "../shared/loader/loader";
import {convertToHumanReadableDate} from "../../common/file-utils";
import Background from "../shared/background/background";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [zoos, setZoos] = useState([] as ZooDetailsResponse[]);

    useEffect(() => {
        getAllZooDetailsByUserId(900).then(res => {
            setZoos(res.data)
        }).finally(() => setIsLoading(false))
    }, []);


    if (isLoading) return <Loader visibility={isLoading}/>
    return (
        <div className="home">
            <h2>JEEzoo</h2>
            <p>Combat dans un zoo pour devenir le meilleur</p>
            <div className="home__zoos">
                {
                    zoos.map(zoo => (
                        <button className="home__zoo">
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
                    ))
                }
            </div>
            <div className="home__actions">
                <Button href="/draft" variant="contained">New Save</Button>
            </div>
        </div>
    )
}

export default Home