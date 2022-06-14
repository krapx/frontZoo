import {CircularProgress} from "@mui/material";

interface ILoaderProps {
    visibility: boolean
}

export const Loader = (props: ILoaderProps) => {
    if (!props.visibility) return <></>
    return (
        <div className="modal">
            <CircularProgress color="warning"/>
        </div>
    )
}