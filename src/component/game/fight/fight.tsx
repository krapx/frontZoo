import "./fight.css"
import {useEffect, useRef, useState} from "react";
import {Avatar} from "@mui/material";
import {getRandZooAnimal} from "../../../api/zoo-animal.api";
import {ZooAnimalModel} from "../../../model/zoo-animal.model";

const Fight = () => {
    const damageDealtContainer = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState({
        name: "Rambo",
        img: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        ATK: 2,
        HP: 200,
        zoneDiscoveredCount: 1
    });
    const [animal, setAnimal] = useState({
        name: "Bouftou",
        img: "https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        currentHP: 20,
        maxHP: 20
    });

    useEffect(() => {
        handleGetAnimal()
    }, []);

    const handleGetAnimal = () => {
        getRandZooAnimal().then(res => {
            const animal: ZooAnimalModel = res.data
            setAnimal({
                name: animal.name || "",
                img: animal.image_link,
                currentHP: Math.floor(animal.weight_max * animal.length_max),
                maxHP: Math.floor(animal.weight_max * animal.length_max)
            })
        })
    }

    const handleATK = () => {
        setAnimal(prevState => ({...animal, currentHP: prevState.currentHP - user.ATK}))
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
        element.innerText = `-${user.ATK}`
        return element
    }


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
                        src={user.img}/>
                ATK :
                <span className="fight__atk">{user.ATK}</span>
            </div>
        </div>
    )
}

export default Fight