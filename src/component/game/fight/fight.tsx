import "./fight.css"
import {useRef, useState} from "react";

const Fight = () => {
    const damageDealtContainer = useRef<HTMLDivElement>(null);
    const [user, setUser] = useState({
        name: "Rambo",
        ATK: 2,
        HP: 200
    });
    const [animal, setAnimal] = useState({
        name: "Bouftou",
        currentHP: 20,
        maxHP: 20
    });

    const handleATK = () => {
        if (animal.currentHP <= 0) {
            handleDeath()
            return;
        }
        setAnimal(prevState => ({...animal, currentHP: prevState.currentHP - user.ATK}))
        damageDealtContainer.current!.appendChild(showDamageDealt())
    }

    const handleDeath = () => {
        console.log(`${animal.name} est mort !`)
        setAnimal(prevState => ({...animal, currentHP: prevState.maxHP}))
        clearDamageDealtContainer()
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
                     src="https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                     alt="fighter"/>
                <div className="fight__damage-dealt-container" ref={damageDealtContainer}/>
                <progress
                    className="fight__health"
                    value={animal.currentHP}
                    max={animal.maxHP}
                    aria-label={`${animal.currentHP}/${animal.maxHP}`}
                />
            </div>
            <div className="fight__footer">User ATK : <span className="fight__atk">{user.ATK}</span></div>
        </div>
    )
}

export default Fight