import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Snowgeflakes from "../components/snowgeflakes/snowgeflakes";
import Socials from "../components/socials/socials";
import {Button} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {useState} from "react";
import SnowgeIntroduction from "../components/snowgeIntroduction/snowgeIntroduction";
import Tokenomics from "../components/tokenomics/tokenomics";
import {useEffect} from "react";

const Home = () => {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        document.fonts.load("24px 'Material Icons'").then(() => setIsReady(true));
    }, []);
    const [toggleSnow, setToggleSnow] = useState(true);

    return (isReady &&
        <div className={'app-background flex-column'}>
            {toggleSnow && (
                <Snowgeflakes/>
            )}
            <div className={'flex-column home-div'}>
                <NavBar toggleSnow={() => setToggleSnow(!toggleSnow)}/>
                <div className={'flex-column x-centre y-centre home-banner'}>
                    <SnowgeIntroduction/>
                </div>

                {/*<div className={'flex-column x-centre y-centre how-to-buy-banner'}>*/}
                {/*    <Tokenomics/>*/}
                {/*</div>*/}
                {/*<div className={'flex-column x-centre y-centre tokenomics-banner'}>*/}
                {/*    not yet*/}
                {/*</div>*/}
                {/*<div className={'flex-column x-centre y-centre roadmap-banner'}>*/}
                {/*    not yet*/}
                {/*</div>*/}
                {/*<div className={'flex-column x-centre y-centre donate-banner'}>*/}
                {/*    not yet*/}
                {/*</div>*/}
                <Socials/>
                <div className={'flex-row x-centre construction-text'}>*This site is still buried under a snowgestorm.
                    Emergency crews are working around the clock to dig it back up!*
                </div>
            </div>
        </div>
    )
};

export default Home
