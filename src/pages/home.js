import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Snowgeflakes from "../components/snowgeflakes/snowgeflakes";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {useState} from "react";
import SnowgeIntroduction from "../components/snowgeIntroduction/snowgeIntroduction";
import {useEffect} from "react";
import HowToBuy from "../components/howToBuy/howToBuy";
import RoadMap from "../components/roadmap/roadmap";
import {Helmet} from "react-helmet";
import Footer from "../components/footer/footer";

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
                    <title>SnowgeCoin | The Floofiest Cryptocurrency</title>
                </Helmet>
                <NavBar toggleSnow={() => setToggleSnow(!toggleSnow)}/>
                <div className={'flex-column x-centre y-centre home-banner'}>
                    <SnowgeIntroduction/>
                </div>
                {/*<div className={'flex-column x-centre y-centre donate-banner'}>*/}
                {/*    not yet*/}
                {/*</div>*/}
                <div className={'flex-column x-centre y-centre how-to-buy-banner'}>
                    <HowToBuy/>
                </div>
                {/*<div className={'flex-column x-centre y-centre tokenomics-banner'}>*/}
                {/*    <Tokenomics/>*/}
                {/*</div>*/}
                <div className={'flex-column x-centre y-centre roadmap-banner'}>
                    <RoadMap/>
                </div>

                <Footer/>
            </div>
        </div>
    )
};

export default Home
