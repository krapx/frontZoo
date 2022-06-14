import "./animal-grid.css"
import {ZooAnimalModel} from "../../../model/zoo-animal.model";

interface IAnimalGridProps {
    animals: ZooAnimalModel[]
}

export const AnimalGrid = (props: IAnimalGridProps) => {
    return (
        <>
            <div className="animal-grid">
                {
                    props.animals.map((it: ZooAnimalModel, index) => (
                        <div className="card">
                            <img className="card__img" src={it.image_link} alt=""/>
                            <div className="card__content">
                                <p>{it.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}