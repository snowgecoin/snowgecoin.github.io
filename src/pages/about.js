import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Snowgeflakes from "../components/snowgeflakes/snowgeflakes";
import {useState} from "react";
import Footer from "../components/footer/footer";
import AboutPage from "../components/about/aboutPage";

const About = () => {
    const [toggleSnow, setToggleSnow] = useState(false);

    return (
        <div className={'app-background flex-column scrollbar home-banner'}>
            {toggleSnow && (
                <Snowgeflakes/>
            )}
            <NavBar toggleSnow={() => setToggleSnow(!toggleSnow)}/>
            <div className={'flex-row x-centre home-div'}>
                <AboutPage/>
            </div>
            <span className={'flex-spacer'}></span>
            <Footer/>
        </div>
    )
};

export default About
