import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Socials from "../components/socials/socials";

const Floofypaper = () => {
    return (
        <div className={'app-background flex-column scrollbar'}>
            <NavBar/>
            <span className={'flex-spacer'}></span>
            <Socials/>
        </div>
    )
};

export default Floofypaper
