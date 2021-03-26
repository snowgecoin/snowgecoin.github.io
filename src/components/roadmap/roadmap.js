import * as React from "react"
import "./roadmap.scss";

const RoadMap = () => {
    return (
        <div className={'flex-column y-centre x-centre rm-container'}>
            <div className={'giga-large-font slightly-bolder rm-title'}>Roadmap</div>
            <div className={'flex-row x-centre wrap'}>
                <div className={'flex-column quarter-card'}>
                    <div className={'rm-quarter-title flex-row y-centre x-centre slightly-bolder'}>Q1 - 2021</div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder'}>Milestone 1</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>Snowge Pre Sale on DxSale</div>
                    </div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder'}>Milestone 2</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>Fair Launch on PancakeSwap</div>
                    </div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder'}>Milestone 3</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>Meme Contest + Airdrops</div>
                    </div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder'}>Milestone 4</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>TechRate Audit (<a href="https://snowge.s3.amazonaws.com/Snowge+Coin(1).pdf" target="_blank">Passed</a>!)</div>
                    </div>
                </div>
                <div className={'flex-column quarter-card'}>
                    <div className={'rm-quarter-title flex-row y-centre x-centre slightly-bolder'}>Q2 - 2021</div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'not-passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder'}>Milestone 1</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>CoinMarketCap, CoinGecko, and Blockfolio Listing</div>
                    </div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'not-passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder rm-complete'}>Milestone 2</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>Website Upgrades (In Progress)</div>
                    </div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'not-passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder'}>Milestone 3</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>CEX Listings (Ideal Timeline)</div>
                    </div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'not-passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder'}>Milestone 4</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>SFSR Charitable Donation Fund</div>
                    </div>
                </div>
                <div className={'flex-column quarter-card'}>
                    <div className={'rm-quarter-title flex-row y-centre x-centre slightly-bolder'}>Q3 - 2021</div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'not-passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder'}>Milestone 1</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>SnowgeCoin Trading Card NFTs</div>
                    </div>
                    <div className={'flex-row wrap milestone-header rm-milestone'}>
                        <div className={'not-passed milestone-complete rm-complete'}></div>
                        <div className={'slightly-bolder'}>Milestone 2</div>
                        <span>&nbsp;-&nbsp;</span>
                        <div>Physical Token Backing</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RoadMap
