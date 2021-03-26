import * as React from "react"
import "./interactiveRoadmap.scss";
import {useState} from "react";
import {useEffect} from "react";
import Box from "@material-ui/core/Box";

// TODO - SuperFly just add shit here for content plis T.T
function fetchContent(index) {
    if (index === 0) {
        return (
            <div className={'flex-column'}>
                <div className={'card-header-combo'}>Quarter 1 - 2021</div>
                <div className={'flex-row x-centre'}>Chill dude, Snowge Mcfloofy wasn't even born yet..</div>
            </div>
        )
    } else if (index === 1) {
        return (
            <div className={'flex-column'}>
                <div className={'card-header-combo'}>Quarter 1 - 2021</div>
                <div className={'card-info-container flex-column'}>
                    <div className={'milestone-container fade-animation'}>
                        <div className={'flex-row y-centre wrap milestone-header'}>
                            <div className={'passed milestone-complete'}></div>
                            <div className={'slightly-bolder'}>Milestone 1</div>
                            <span>&nbsp;-&nbsp;</span>
                            <div>Snowge Pre Sale</div>
                        </div>
                        <div className={'milestone-content flex-row wrap'}>HUGE SUCCESS! MUCH WOW! Our presale sold out
                            in under 3
                            minutes.
                        </div>
                    </div>
                    <div className={'milestone-container fade-animation'}>
                        <div className={'flex-row y-centre wrap milestone-header'}>
                            <div className={'passed milestone-complete'}></div>
                            <div className={'slightly-bolder'}>Milestone 2</div>
                            <span>&nbsp;-&nbsp;</span>
                            <div>Fair Launch on PancakeSwap</div>
                        </div>
                        <div className={'milestone-content flex-row wrap'}>Even though we had to move our launch forward
                            about 24 hours it was an overall success in terms of demand. During this period we came
                            across an issue with safemoon forks that allows them to rug you poor folk. As a team we
                            decided to nuke this and save our fellow floofs. <strong>Community over greed, always</strong>.
                        </div>
                    </div>
                    <div className={'milestone-container fade-animation'}>
                        <div className={'flex-row y-centre wrap milestone-header'}>
                            <div className={'passed milestone-complete'}></div>
                            <div className={'slightly-bolder'}>Milestone 3</div>
                            <span>&nbsp;-&nbsp;</span>
                            <div>Meme Contest + Airdrops</div>
                        </div>
                        <div className={'milestone-content flex-row wrap'}>Snowge doesn't belong to anyone. It belongs
                            to all of us.
                        </div>
                    </div>
                    <div className={'milestone-container fade-animation'}>
                        <div className={'flex-row y-centre wrap milestone-header'}>
                            <div className={'passed milestone-complete'}></div>
                            <div className={'slightly-bolder'}>Milestone 4</div>
                            <span>&nbsp;-&nbsp;</span>
                            <div>TechRate Audit</div>
                        </div>
                        <div className={'milestone-content flex-row wrap'}>Your safety comes first! <a href="https://snowge.s3.amazonaws.com/Snowge+Coin(1).pdf" target="_blank">&nbsp;Passed&nbsp;</a> with Floofy Colors.
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (index === 2) {
        return (
            <div className={'flex-column'}>
                <div className={'card-header-combo'}>Quarter 2 - 2021</div>
                <div className={'card-info-container flex-column'}>
                    <div className={'milestone-container fade-animation'}>
                        <div className={'flex-row y-centre wrap milestone-header'}>
                            <div className={'not-passed milestone-complete'}></div>
                            <div className={'slightly-bolder'}>Milestone 1</div>
                            <span>&nbsp;-&nbsp;</span>
                            <div>CMC, CG, and Blockfolio Listing</div>
                        </div>
                        <div className={'milestone-content flex-row wrap'}>Spreading the word one website at a time.
                        </div>
                    </div>
                    <div className={'milestone-container fade-animation'}>
                        <div className={'flex-row y-centre wrap milestone-header'}>
                            <div className={'not-passed milestone-complete'}></div>
                            <div className={'slightly-bolder'}>Milestone 2</div>
                            <span>&nbsp;-&nbsp;</span>
                            <div>Website upgrades</div>
                        </div>
                        <div className={'milestone-content flex-row wrap'}>I'm sorry frens Master Snowge has been riding
                            me hard but by end of Q2 I promis you I will deliver a nice website to Master Snowge with
                            loads more functionality.
                        </div>
                    </div>
                    <div className={'milestone-container fade-animation'}>
                        <div className={'flex-row y-centre wrap milestone-header'}>
                            <div className={'not-passed milestone-complete'}></div>
                            <div className={'slightly-bolder'}>Milestone 3</div>
                            <span>&nbsp;-&nbsp;</span>
                            <div>CEX Listings (Ideal Timeline)</div>
                        </div>
                        <div className={'milestone-content flex-row wrap'}>Can you boys, girls, and enbys imagine the
                            level of mooning we would achieve??
                        </div>
                    </div>
                    <div className={'milestone-container fade-animation'}>
                        <div className={'flex-row y-centre wrap milestone-header'}>
                            <div className={'not-passed milestone-complete'}></div>
                            <div className={'slightly-bolder'}>Milestone 4</div>
                            <span>&nbsp;-&nbsp;</span>
                            <div>SFSR Charitable Donation Fund</div>
                        </div>
                        <div className={'milestone-content flex-row wrap'}>Saving the floofs is one of our highest priorities.
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (index === 3) {
        return (
            <div className={'flex-column'}>
                <div className={'flex-column'}>
                    <div className={'card-header-combo'}>Quarter 3 - 2021</div>
                    <div className={'card-info-container flex-column'}>
                        <div className={'milestone-container fade-animation'}>
                            <div className={'flex-row y-centre wrap milestone-header'}>
                                <div className={'not-passed milestone-complete'}></div>
                                <div className={'slightly-bolder'}>Milestone 1</div>
                                <span>&nbsp;-&nbsp;</span>
                                <div>Snowge NFTs</div>
                            </div>
                            <div className={'milestone-content flex-row wrap'}>These floofs are already underway, all I
                                can spoil is that they will be <i>&nbsp;italian chef kiss</i>.
                            </div>
                        </div>
                        <div className={'milestone-container fade-animation'}>
                            <div className={'flex-row y-centre wrap milestone-header'}>
                                <div className={'not-passed milestone-complete'}></div>
                                <div className={'slightly-bolder'}>Milestone 2</div>
                                <span>&nbsp;-&nbsp;</span>
                                <div>Physical Token Backing</div>
                            </div>
                            <div className={'milestone-content flex-row wrap'}>Can't show our hand too much here...but this will be <i>&nbsp;exclusive&nbsp;</i> to SnowgeCoin holders! More details coming soon!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (index === 4) {
        return (
            <div className={'flex-column'}>
                <div className={'card-header-combo'}>Quarter 4 - 2021</div>
                <div className={'flex-row x-centre fade-animation'}>Stay tuned - more Snowges to come!</div>
            </div>
        )
    }
}

const InteractiveRoadmap = () => {
    const [activeNode, setActiveNode] = useState(1);
    useEffect(() => {
    }, [activeNode]);

    return (
        <div className={'roadmap-container flex-column'}>
            <div className={'flex-row x-centre roadnav-container'}>
                <div className={'node-container flex-row y-centre'}>
                    <div
                        className={`node pointer flex-row y-centre x-centre passed ${activeNode === 1 ? 'active-node' : ''}`}
                        onClick={() => setActiveNode(1)}>
                        <span className={'small-font white-text'}>Q1</span>
                    </div>
                    <div className={'node-container flex-row y-centre'}>
                        <div className={'node-link passed'}></div>
                        <div className={'node-path on-the-way'}></div>
                    </div>
                </div>

                <div className={'node-container flex-row y-centre'}>
                    <div className={'node-link'}></div>
                    <div
                        className={`node pointer flex-row y-centre x-centre ${activeNode === 2 ? 'active-node white-text' : ''}`}
                        onClick={() => setActiveNode(2)}>
                        <span className={'small-font'}>Q2</span>
                    </div>
                    <div className={'node-container flex-row y-centre'}>
                        <div className={'node-link'}></div>
                        <div className={'node-path'}></div>
                    </div>
                </div>

                <div className={'node-container flex-row y-centre'}>
                    <div className={'node-link'}></div>
                    <div
                        className={`node pointer flex-row y-centre x-centre ${activeNode === 3 ? 'active-node white-text' : ''}`}
                        onClick={() => setActiveNode(3)}>
                        <span className={'small-font'}>Q3</span>
                    </div>
                    <div className={'node-container flex-row y-centre'}>
                        <div className={'node-link'}></div>
                        <div className={'node-path'}></div>
                    </div>
                </div>

                <div className={'node-container flex-row y-centre'}>
                    <div className={'node-link'}></div>
                    <div
                        className={`node pointer flex-row y-centre x-centre ${activeNode === 4 ? 'active-node white-text' : ''}`}
                        onClick={() => setActiveNode(4)}>
                        <span className={'small-font'}>Q4</span>
                    </div>
                </div>
            </div>

            <Box className={'info-card flex-column'}>
                {fetchContent(activeNode)}
            </Box>
        </div>
    )
};

export default InteractiveRoadmap
