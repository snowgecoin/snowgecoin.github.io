import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Socials from "../components/socials/socials";
import InteractiveRoadmap from "../components/roadmap/interactiveRoadmap";
import Snowgeflakes from "../components/snowgeflakes/snowgeflakes";
import {useState} from "react";
import Footer from "../components/footer/footer";

const RoadMap = () => {
    const [toggleSnow, setToggleSnow] = useState(false);

    return (
        <div className={'app-background flex-column scrollbar home-banner'}>
            {toggleSnow && (
                <Snowgeflakes/>
            )}
            <NavBar toggleSnow={() => setToggleSnow(!toggleSnow)}/>
            <div className={'flex-row x-centre home-div'}>
                <InteractiveRoadmap/>
            </div>
            <span className={'flex-spacer'}></span>
            <Footer/>
        </div>
    )
};

export default RoadMap
