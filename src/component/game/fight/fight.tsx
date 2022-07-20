import "./fight.css"
import {useEffect, useRef, useState} from "react";
import {Avatar} from "@mui/material";
import {getRandZooAnimal} from "../../../api/zoo-animal.api";
import {ZooAnimalModel} from "../../../model/zoo-animal.model";
import {Loader} from "../../shared/loader/loader";
import {UserAnimalResponse} from "../../../api/user-animal/user-animal.dto";

export interface AnimalFighter {
    name: string
    img: string
    currentHP: number
    maxHP: number
}

interface FightProps {
    userAnimal: UserAnimalResponse
}

const Fight = (props: FightProps) => {
    const {userAnimal} = props;
    const damageDealtContainer = useRef<HTMLDivElement>(null);
    const [animal, setAnimal] = useState<AnimalFighter>(null);

    useEffect(() => {
        handleGetAnimal()
    }, []);

    const handleGetAnimal = () => {
        getRandZooAnimal().then(res => {
            const animal: ZooAnimalModel = res.data
            setAnimal({
                name: animal.name,
                img: animal.image_link,
                currentHP: Math.floor(animal.weight_max * animal.length_max),
                maxHP: Math.floor(animal.weight_max * animal.length_max)
            })
        })
    }

    const handleATK = () => {
        setAnimal(prevState => ({...animal, currentHP: prevState.currentHP - userAnimal.damage}))
        damageDealtContainer.current!.appendChild(showDamageDealt())
        if (animal.currentHP <= 0) {
            handleDeath()
            return;
        }
    }

    const handleDeath = () => {
        console.log(`${animal.name} est mort !`)
        setAnimal(prevState => ({...animal, currentHP: prevState.maxHP}))
        clearDamageDealtContainer()
        handleGetAnimal()
    }

    const clearDamageDealtContainer = () => {
        while (damageDealtContainer.current!.firstChild) {
            damageDealtContainer.current!.removeChild(damageDealtContainer.current!.firstChild);
        }
    }

    const showDamageDealt = () => {
        const element = document.createElement("span")
        element.classList.add("fight__dealt", "fight__atk")
        element.innerText = `-${userAnimal.damage}`
        return element
    }

    if (animal == null) return <Loader visibility/>
    return (
        <div className="fight">
            <div className="fight__header">{animal.name}</div>
            <div className="fight__body" onClick={handleATK}>
                <img className="fight__img"
                     src={animal.img}
                     alt="fighter"/>
                <div className="fight__damage-dealt-container" ref={damageDealtContainer}/>
                <progress
                    className="fight__health"
                    value={animal.currentHP}
                    max={animal.maxHP}
                    aria-label={`${animal.currentHP}/${animal.maxHP}`}
                />
            </div>
            <div className="fight__footer">
                <Avatar alt="my_animal"
                        src={userAnimal.image}/>
                ATK :
                <span className="fight__atk">{userAnimal.damage}</span>
            </div>
        </div>
    )
}

export default Fight