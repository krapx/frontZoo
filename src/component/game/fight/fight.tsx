import "./fight.css"
import {useEffect, useRef, useState} from "react";
import {Avatar} from "@mui/material";
import {Loader} from "../../shared/loader/loader";
import {PlayerAnimalResponse} from "../../../api/player-animal/player-animal.dto";
import {AnimalResponse} from "../../../api/animal/animal.dto";
import {getAllBySpaceIdInAndStatus, updateAnimalStatus} from "../../../api/animal/animal.api";
import {ZooGameDetailsResponse} from "../../../api/zoo/zoo.dto";

export interface AnimalFighter {
    name: string
    img: string
    currentHP: number
    maxHP: number
}

interface FightProps {
    zooId: number
    userAnimals: PlayerAnimalResponse[]
    spaceAnimals: AnimalResponse[]
    setAnimalsHistory: (value: AnimalResponse[]) => void
}

const Fight = (props: FightProps) => {
    const {userAnimals, spaceAnimals, zooId, setAnimalsHistory} = props;

    if (spaceAnimals.length === 0) return <></>
    return (
        <FightActive
            spaceAnimals={spaceAnimals}
            userAnimals={userAnimals}
            zooId={zooId}
            setAnimalsHistory={setAnimalsHistory}
        />
    )
}

const FightActive = (props: FightProps) => {
    const {userAnimals, spaceAnimals, zooId, setAnimalsHistory} = props;
    const [indexCurrentAnimal, setIndexCurrentAnimal] = useState(0);
    const damageDealtContainer = useRef<HTMLDivElement>(null);
    const [animal, setAnimal] = useState<AnimalFighter>({
        name: spaceAnimals[indexCurrentAnimal].name,
        img: spaceAnimals[indexCurrentAnimal].imageLink,
        maxHP: Math.floor(spaceAnimals[indexCurrentAnimal].weightMax * spaceAnimals[indexCurrentAnimal].lengthMax + 10),
        currentHP: Math.floor(spaceAnimals[indexCurrentAnimal].weightMax * spaceAnimals[indexCurrentAnimal].lengthMax + 10)
    });

    useEffect(() => {
        setAnimal({
            name: spaceAnimals[indexCurrentAnimal].name,
            img: spaceAnimals[indexCurrentAnimal].imageLink,
            maxHP: Math.floor(spaceAnimals[indexCurrentAnimal].weightMax * spaceAnimals[indexCurrentAnimal].lengthMax + 10),
            currentHP: Math.floor(spaceAnimals[indexCurrentAnimal].weightMax * spaceAnimals[indexCurrentAnimal].lengthMax + 10)
        })
    }, [spaceAnimals, indexCurrentAnimal]);

    useEffect(() => {
        if (animal?.currentHP < 1) {
            handleDeath()
            if (indexCurrentAnimal === spaceAnimals.length - 1) {
                setIndexCurrentAnimal(0)
            } else {
                setIndexCurrentAnimal(prevState => (prevState + 1))
            }
            return;
        }
    }, [animal])

    const handleATK = () => {
        setAnimal(prevState => ({...animal, currentHP: prevState.currentHP - getTeamDamage()}))
        damageDealtContainer.current!.appendChild(showDamageDealt())
    }

    const handleDeath = () => {
        clearDamageDealtContainer()
        if (spaceAnimals[indexCurrentAnimal].status === "Dead") return;
        updateAnimalStatus(spaceAnimals[indexCurrentAnimal].id, "Dead").then(res => {
            getAllBySpaceIdInAndStatus(zooId).then(res2 => {
                setAnimalsHistory(res.data)
            })
        })
    }

    const clearDamageDealtContainer = () => {
        while (damageDealtContainer.current!.firstChild) {
            damageDealtContainer.current!.removeChild(damageDealtContainer.current!.firstChild);
        }
    }

    const showDamageDealt = () => {
        const element = document.createElement("span")
        element.classList.add("fight__dealt", "fight__atk")
        element.innerText = `-${getTeamDamage()}`
        return element
    }

    const getTeamDamage = (): number => {
        return userAnimals
            .map(value => value.damage)
            .reduce((a, b) => a + b)
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
                <Avatar alt="my_animal" src={userAnimals[0].image}/>
                ATK :
                <span className="fight__atk">{getTeamDamage()}</span>
            </div>
        </div>
    )
}

export default Fight