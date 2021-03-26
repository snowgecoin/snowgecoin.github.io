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
import HowToBuy from "../components/howToBuy/howToBuy";
import RoadMap from "../components/roadmap/roadmap";
import { Helmet } from "react-helmet"

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
                    <Helmet>
                        <script src="./web3-utils.min.js?v=20.12.0.2" />
                        <script src="./web3-eth.min.js?v=20.12.0.2" />
                        <script src="./web3-providers-http.min.js?v=20.12.0.2" />
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.min.js"/>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/bignumber.js/9.0.1/bignumber.min.js"/>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
                        <script src="./dashboard-widget-2.js" />
                    </Helmet>
                    <Helmet>
                        <title>SnowgeCoin | The Floofiest Cryptocurrency</title>
                    </Helmet>
                    <NavBar toggleSnow={() => setToggleSnow(!toggleSnow)}/>
                    <div className={'flex-column x-centre y-centre home-banner'}>
                        <SnowgeIntroduction/>
                    </div>
                    <div className={'flex-column x-centre y-centre how-to-buy-banner'}>
                        <HowToBuy/>
                    </div>
                    <div className={'flex-column x-centre y-centre tokenomics-banner'}>
                        <Tokenomics/>
                    </div>
                    <div className={'flex-column x-centre y-centre roadmap-banner'}>
                        <RoadMap/>
                    </div>
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
