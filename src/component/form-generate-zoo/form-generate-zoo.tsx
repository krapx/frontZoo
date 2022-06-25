import "./form-generate-zoo.css"
import {Header} from "../shared/header/header";
import {useEffect, useState} from "react";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {postGenerateZooGame} from "../../api/zoo-animal.api";

const MAX_ANIMAL_COUNT = 10;
const MAX_SPACE_COUNT = 9;
const initSpace = {name: "", animalsNumber: 1};
const initState = {
    winnerSpace: null,
    spaces: [initSpace]
};

export const FormGenerateZoo = () => {
    const [state, setState] = useState(initState);

    useEffect(() => {
        console.log(state)
    }, [state]);


    const handlerAddSpace = () => setState({...state, spaces: state.spaces.concat([initSpace])})
    const handlerSetWinnerSpace = (e: any) => setState({...state, winnerSpace: e.target.value})
    const handlerSetSpaceName = (e: any) => {
        let newSpaces = state.spaces
        console.log(e)
        newSpaces[e.target.tabIndex] = {...newSpaces[e.target.tabIndex], [e.target.name]: e.target.value}
        setState({...state, spaces: newSpaces})
    }
    const handlerDeleteSpace = (index: number) => {
        setState({...state, spaces: state.spaces.filter(it => it !== state.spaces[index])})
    }
    const handlerSubmit = (e:any) => {
        e.preventDefault()
        postGenerateZooGame(JSON.stringify(state))
    }

    return (
        <>
            <Header/>
            <div className="FormGenerateZoo">
                <form className="FormGenerateZoo__form" onSubmit={handlerSubmit}>
                    <Button
                        type="button"
                        variant="contained"
                        onClick={handlerAddSpace}
                        disabled={state.spaces.length >= MAX_SPACE_COUNT}
                    >ajouter un espace</Button>
                    {state.spaces.map((it, index) => (
                        <div className="FormGenerateZoo__inline" key={`space_${index}`}>
                            <TextField
                                className="flex"
                                variant="outlined"
                                label="Name"
                                name="name"
                                tabIndex={index}
                                defaultValue={it.name}
                                onChange={handlerSetSpaceName}
                            />
                            <FormControl className="flex">
                                <InputLabel>AnimalCount</InputLabel>
                                <Select
                                    label="AnimalCount"
                                    name="animalCount"
                                    tabIndex={index}

                                    defaultValue={it.animalsNumber}
                                    onChange={handlerSetSpaceName}
                                >
                                    {[...Array(MAX_ANIMAL_COUNT)].map((it, index) => (
                                        <MenuItem key={index + 1} value={index + 1}>{index + 1}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Button type="button" variant="outlined" onClick={() => handlerDeleteSpace(index)}>
                                <Delete/>
                            </Button>
                        </div>
                    ))}
                    <FormControl>
                        <InputLabel>Winner Space</InputLabel>
                        <Select label="Winner Space" onChange={handlerSetWinnerSpace}>
                            {state.spaces.map(it => {
                                if (it.name.length < 1) return;
                                return (
                                    <MenuItem key={`space_name_${it.name}`} value={it.name}>{it.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <div className="FormGenerateZoo__actions">
                        <Button type="button" variant="outlined">Cancel</Button>
                        <Button type="submit" variant="contained">Submit</Button>
                    </div>
                </form>
            </div>
        </>
    )
};