import { Button } from "@mui/material"
import "./home.css"

const Home = () => {
    return(
        <div className="home">
            <h2>JEEzoo</h2>
            <p>Combat dans un zoo pour devenir le meilleur</p>
            <div></div>
            <div className="home__actions">
                <Button href="/draft" variant="contained">New Save</Button>
            </div>
        </div>
    )
}

export default Home