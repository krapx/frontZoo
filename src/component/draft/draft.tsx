import "./draft.css"
import {getStarters} from "../../api/zoo-animal.api";
import {useEffect, useState} from "react";
import {AnimalModel} from "../../model/animal.model";

const Draft = () => {

    const [starters, setStarters] = useState([] as AnimalModel[])

    useEffect(() => {
        handleGetStarters();
    }, []);

    const handleGetStarters = () =>{
        getStarters().then(res =>{
            setStarters(res.data);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="draft">
            <div className="draft__header">
                <img className="draft__img"
                     src="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                     alt="teacher"/>
                Professor
            </div>
            <div className="draft__body">
                <p className="draft__description">Cliquer sur l'animal de votre choix</p>
                <div className="draft__choices">
                    {starters.map(value => (
                        <a href="/game" key={value.id}>
                            <img className="draft__img selectable"
                                 src={value.image_link}
                                 alt={value.name}/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Draft