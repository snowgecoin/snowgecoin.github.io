import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Snowgeflakes from "../components/snowgeflakes/snowgeflakes";

const Home = () => {
    return (
        <div className={'app-background'}>
            <NavBar/>
            <Snowgeflakes/>
        </div>
    )
};

export default Home
