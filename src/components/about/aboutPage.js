import * as React from "react"
import './aboutPage.scss'
import astroSnowge from "../../images/snowges/Snowge_Astro.png";
import doubleSnowge from "../../images/snowges/Snowge_Double.png";
import {OpenInNewRounded} from "@material-ui/icons";

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null
};

const AboutPage = () => {

    function openFlooflypaper() {
        openInNewTab('https://snowge.s3.amazonaws.com/SnowgeCoinFloofyPaper.pdf');
    }

    return (
        <div className={'flex-column about-container'}>
            <div className={'about-title slightly-bolder margin-bottom'}>Overview</div>
            <div className={'margin-bottom snowge-white-bg'}>
                <div className={'slightly-bolder'}>SnowgeCoin is a deflationary meme currency running on the BSC
                    network. Snowge is capped at one billion
                    tokens, with no ability to ever mint more. In fact, our mascot Snowge McFloof gets hungry at
                    every
                    transaction, and eats a random percentage (between 2% and 8%) of it as a fee. This randomized
                    transaction fee makes the token constantly decrease its max supply, therefore increasing token
                    value!
                    Snowge gives back to its token holders with 50% of this transaction fee. Our original contract code
                    was
                    forked from the SafeMoon Protocol, which means that the other 50% of Mr. McFloof's fee gets turned
                    into
                    BNB/Snowge liquidity. This helps establish a price floor on the token, and ensures that there will
                    always be liquidity to trade against! Our tokenomics also ensure the community fund's growth,
                    regardless
                    of donations, enabling us to help our real world floofy friends through charitable donations. Snowge
                    has
                    also burnt ALL developer LP tokens, so not only is there liquidity always available, this also makes
                    rug-pulling an impossibility with Snowge, quite a difference compared to most SafeMoon forks!
                    Community,
                    charity, and rug-pull proof
                </div>
                <br></br>
                <span className={'bold'}> Snowge doesn't belong to anyone, it belongs to everyone!</span>
            </div>


            <div className={'flex-row y-centre margin-bottom'}>
                <div className={'about-title slightly-bolder '}>Objective</div>
                <img src={doubleSnowge} alt={'astroSnowge'} className={'double-snowge-png'}/>
            </div>

            <div className={'slightly-bolder margin-bottom snowge-white-bg'}>The end goal of SnowgeCoin is of course to
                help our
                four-legged friends as much as possible. To
                accomplish this, with the help of some of the best solidity developers around, we are developing
                smart contracts to enable Snowge codlers to commit their SNOWGE tokens in exchange for NFTs
                commissioned by the team and community. These limited edition unique NFTs will commemorate donations and
                eventually be also available for trading on our platform. Our selection process will consist of community
                nominated charities/shelters for each quarter and have a
                governance vote run on our website using SNOWGE. The winning charity will then become that quarters project and users
                can donate SNOWGE to earn a unique NFT based on the project. At the end of the quarter the charity will
                receive the donations + the interest accrued in the donation wallet.
                <br></br>
                <br></br>
                The committed tokens will be converted to
                either crypto or fiat based on the limitations of the selected charity project of the quarter.
            </div>

            <div>More details coming soon.</div>

            {/*<div className={'flex-row'}>*/}
            {/*    <div className={'flex-spacer line-div'}></div>*/}
            {/*    <div className={'flex-row y-centre'}>*/}
            {/*        <div className={'about-title slightly-bolder '}>Snowge Protocol</div>*/}
            {/*        <img src={astroSnowge} alt={'astroSnowge'} className={'snowge-png'}/>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className={'about-subtitle slightly-bolder margin-bottom'}>Launch Details</div>*/}
            {/*<div className={'margin-bottom snowge-white-bg slightly-bolder'}>*/}
            {/*    One billion tokens were minted as an initial supply, and the token will be launched by*/}
            {/*    adding initial liquidity to PancakeSwap that will immediately be burned. A pre-sale will*/}
            {/*    be active on DxSale, and will be advertised on both Discord and Twitter for launch in*/}
            {/*    order to provide launch liquidity.*/}
            {/*    The initial pre-sale offering will be for purchases of 1,000,000 SNOWGE tokens for 0.1*/}
            {/*    BNB apiece (no more, no less) as the presale price, capped to one wallet address per*/}
            {/*    purchase at a max of 500 buyers, for a total of 500 million SNOWGE. SnowgeCoin’s*/}
            {/*    special tokenomics will be disabled for the presale, so that buyers are able to receive*/}
            {/*    their full million tokens instead of 92%-98%.*/}
            {/*    Once the presale has been completed and SNOWGE tokens are distributed, (either by*/}
            {/*    reaching 500 holders or after 24 hours, whichever comes first), the 475 million*/}
            {/*    remaining SNOWGE tokens will be automatically added to PancakeSwap with all of the*/}
            {/*    BNB available as initial liquidity. Developers and team members have no reserved*/}
            {/*    tokens or liquidity available, as the initial liquidity is locked for 5 years via DxSale and*/}
            {/*    the remaining 15 million tokens from the developer address have been burned. They*/}
            {/*    will also not receive any part of the pre-sale proceeds – they will have to participate in*/}
            {/*    the pre-sale and fair launch of the token if they wish to acquire SnowgeCoin.*/}
            {/*</div>*/}

            {/*<div className={'about-subtitle slightly-bolder margin-bottom'}>Tokenomics</div>*/}
            {/*<div className={'margin-bottom snowge-white-bg'}>*/}
            {/*    <div className={'slightly-bolder'}>The SNOWGE BEP-20 token features a random 2%, 4%, 6% or 8%*/}
            {/*        reflectionary transaction fee. This creates a deflationary effect on the token itself,*/}
            {/*        simultaneously rewarding token holders, increasing the inferred value of the token and*/}
            {/*        increasing/improving market liquidity of the token.*/}

            {/*        Initial minted supply of Snowge is 1,000,000,000 (one billion) tokens. 500,000,000 (five-hundred*/}
            {/*        million) tokens were offered in the initial pre-sale offering with DxSale and 500,000,000*/}
            {/*        (five-hundred million) were locked into initial market liquidity for 5 years. 15,000,000 (fifteen*/}
            {/*        million) were manually burned by the development team before the successful launch of the token.*/}
            {/*        Following this manual token burn, ownership of the token contract was renounced permanently by the*/}
            {/*        developer wallet.*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={'flex-row'}>
                <div className={'flex-spacer'}></div>
                <div className={`pointer slightly-bolder`}
                     role="link"
                     onClick={() => openFlooflypaper()}>
                    <span>Floofypaper</span>
                    <OpenInNewRounded className={'new-tab-icon'}></OpenInNewRounded>
                </div>
            </div>
        </div>
    )
};

export default AboutPage
