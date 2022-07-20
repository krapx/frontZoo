import {Button} from "@mui/material"
import "./home.css"
import {getAllZooDetailsByUserId, getAllZoosByUserId} from "../../api/zoo/zoo.api";
import {useEffect, useState} from "react";
import {ZooResponseDetails} from "../../api/zoo/zoo.dto";
import {Loader} from "../shared/loader/loader";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [zoos, setZoos] = useState([] as ZooResponseDetails[]);

    useEffect(() => {
        getAllZooDetailsByUserId(999).then(res => {
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
                            <p>{zoo.name}</p>
                            <p>{zoo.zooStatus}</p>
                            <p>{zoo.killNumber}</p>
                            <p>{zoo.createdAt}</p>
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