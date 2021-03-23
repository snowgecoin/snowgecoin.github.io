import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Socials from "../components/socials/socials";
import InteractiveRoadmap from "../components/roadmap/interactiveRoadmap";

const RoadMap = () => {
    return (
        <div className={'app-background flex-column scrollbar'}>
            <NavBar/>
            <div className={'flex-row x-centre'}>
                <InteractiveRoadmap/>
            </div>
            <span className={'flex-spacer'}></span>
            <Socials/>
        </div>
    )
};

export default RoadMap
