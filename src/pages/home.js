import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Snowgeflakes from "../components/snowgeflakes/snowgeflakes";
import Countdown from "../components/countdown/countdown";
import {Button} from "shards-react";
import Socials from "../components/socials/socials";
import {useEffect} from "react";

const Home = () => {
    return (
        <div className={'app-background flex-column scrollbar'}>
            <NavBar/>
            <Snowgeflakes/>
            <div className={'flex-column page-container'}>
                <span className={'flex-spacer'}></span>
                <div className={'flex-row y-centre x-centre countdown-container'}>
                    <Countdown/>
                </div>
                <div className={'flex-row y-centre x-centre presale-button-container'}>
                    <a href="https://dxsale.app/app/pages/defipresale?saleID=25&chain=BSC" target="_blank" rel="noreferrer">
                        <Button pill size="lg" className="primary-button">Adopt a Snowge</Button>
                    </a>
                </div>
                <span className={'flex-spacer'}></span>
                <Socials/>
                <div className={'flex-row x-centre construction-text'}>*This site is still buried under a snowgestorm.
                    Emergency crews are working around the clock to dig it back up!*
                </div>
            </div>
        </div>
    )
};

export default Home
