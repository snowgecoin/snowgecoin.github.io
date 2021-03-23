import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Snowgeflakes from "../components/snowgeflakes/snowgeflakes";
import Socials from "../components/socials/socials";
import {Button} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const Home = () => {
    return (
        <div className={'app-background flex-column scrollbar'}>
            <NavBar/>
            <Snowgeflakes/>
            <div className={'flex-column y-centre x-centre message'}>
                <div className={'x-centre'}> Wow, our pre-sale sold out in just 3 minutes!</div>
                <div className={'x-centre'}>The remaining website content is under construction. The SnowgeCrew is
                    working hard to deliver more information on this project - we're moving at lightspeed.</div>
                <div className={'x-centre'}>
                    Token address: <b>0x5E9280d53F28281Ce098C8F64e49F5f5DC9Ea185</b>
                </div>
                <div>
                    <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185" target="_blank" rel="noreferrer">
                        <Button pill size="lg" className="primary-button">Buy on PancakeSwap</Button>
                    </a>
                </div>
            </div>
            <span className={'flex-spacer'}></span>
            <Socials/>
            <div className={'flex-row x-centre construction-text'}>*This site is still buried under a snowgestorm.
                Emergency crews are working around the clock to dig it back up!*
            </div>
        </div>
    )
};

export default Home
