import "./animals.css"
import {Header} from "../shared/header/header";

const initState = {
    loaderVisibility: false,
    animals: []
};

export const Animals = () => {

    return (
        <>
            <div className="animal">
                <Header/>

                <div> <h2>Nom de l'animal</h2></div>
            </div>

        </>
    );
}