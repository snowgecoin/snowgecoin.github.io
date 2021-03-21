import * as React from "react"
import NavBar from "../components/navbar/navbar";
import Snowgeflakes from "../components/snowgeflakes/snowgeflakes";
import Socials from "../components/socials/socials";

const Home = () => {
    return (
        <div className={'app-background flex-column scrollbar'}>
            <NavBar/>
            <Snowgeflakes/>
            <div className={'flex-column y-centre x-centre message'}>
                <div> Content is now under construction. Us SnowgeCrew are
                    working hard to deliver more information on this project that is moving at lightspeed.
                </div>
                <div>
                    Token address: 0x5E9280d53F28281Ce098C8F64e49F5f5DC9Ea185
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
