import "./sandbox.css"
import {useEffect, useState} from "react";
import {getRandZooAnimals} from "../../api/zoo-animal.api";
import {Loader} from "../shared/loader/loader";
import {Header} from "../shared/header/header";
import {ZooMap} from "../shared/zoo-map/zoo-map";
import {AnimalGrid} from "../shared/animal-grid/animal-grid";

const initState = {
    loaderVisibility: false,
    animals: []
};

export const Sandbox = () => {
    const [state, setState] = useState(initState);

    useEffect(() => {
        console.log(state.animals)
    }, [state.animals]);

    const handlerSetLoaderVisibility = (value: boolean) => {
        setState({...state, loaderVisibility: value})
    }

    const handlerSetAnimals = (value: []) => {
        setState({...state, animals: value})
    }

    const fetchAnimals = (e: any) => {
        e.preventDefault()
        handlerSetLoaderVisibility(true)

        getRandZooAnimals(10).then(res => {
            const data = res.data;
            handlerSetAnimals(data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <Loader visibility={state.loaderVisibility}/>
            <div className="app">
                <Header/>
                <div className="row">
                    <div className="explanation">
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre
                        provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès
                        qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux
                        latin, le Lorem ipsum ou Lipsum.
                    </div>
                    <div className="map">
                        <ZooMap fetchAnimals={fetchAnimals}/>
                    </div>
                </div>
                <AnimalGrid animals={state.animals}/>
            </div>
        </>
    );
}