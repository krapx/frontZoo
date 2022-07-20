import "./draft.css"
import {getStarters} from "../../api/animal/animal.api";
import {useEffect, useState} from "react";
import {AnimalModel} from "../../model/animal.model";
import {useNavigate} from "react-router-dom";
import {createUserAnimal} from "../../api/user-animal/user-animal.api";
import {CreateUserAnimalRequest} from "../../api/user-animal/user-animal.dto";
import {Loader} from "../shared/loader/loader";

const Draft = () => {
    const navigate = useNavigate();
    const [starters, setStarters] = useState([] as AnimalModel[])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        handleGetStarters();
    }, []);

    const handleGetStarters = () => {
        setIsLoading(true)
        getStarters().then(res => {
            setStarters(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        }).finally(() => setTimeout(() => {
            setIsLoading(false)
        }, 1000))
    }

    function handleSelectAnimal(animal: AnimalModel) {
        setIsLoading(true)
        const body: CreateUserAnimalRequest = {
            name: animal.name,
            image: animal.image_link,
            userId: 900,
            zooId: 1000
        };
        createUserAnimal(body).then(res => {
            navigate("/game")
        }).finally(() => setIsLoading(false))
    }

    return (
        <>
            <Loader visibility={isLoading}/>
            <div className="draft">
                <div className="draft__body">
                    <p className="draft__description">Cliquer sur l'animal de votre choix</p>
                    <div className="draft__choices">
                        {starters.map(animal => (
                            <button key={animal.id} onClick={() => handleSelectAnimal(animal)}>
                                <img className="draft__img selectable"
                                     src={animal.image_link}
                                     alt={animal.name}/>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Draft