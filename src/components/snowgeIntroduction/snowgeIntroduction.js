// import * React, { useState, useEffect } from "react"
import * as React from "react"
import "./snowgeIntroduction.scss";
import Button from "@material-ui/core/Button";
import CountUp from 'react-countup';
import blockfolio from "../../images/tokendata/blockfolio.svg";
import bscscan from "../../images/tokendata/bscscan.svg";
import goswapp from "../../images/tokendata/goswapp.svg";

const easingFn = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t * t * t + 2) + b;
};

const SnowgeIntroduction = () => {
    // const [price, setPrice] = useState([])
    //
    // useEffect(() => {
    //  fetch('http://3.93.180.199:8080/snowge/price')
    //     .then(resp => resp.text())
    //     .then(data => this.setPrice())
    //   }, [])

    return (
        <div className={'flex-column y-centre x-centre snowge-introduction-container'}>
            <div className={'snowge-title'}>Meme-fueled Deflationary Defi Token</div>
            <div className={'snowge-info-text'}>Of the floofs, by the floofs, for the floofs.</div>
            <div className={'snowge-contract-addy'}>Token Address: 0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185</div>
            <Button variant="contained" size="large" className={'snowge-button pcs-button'}
                    href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185"
                    target="_blank" rel="noreferrer">Buy on Pancake Swap</Button>
                    <div>Need help? <a href="https://www.youtube.com/watch?v=xZyiGE2cW6M" target="_blank">Check out this video.</a></div>
            <div className={'snowge-buttons-div flex-row wrap x-centre'}>
                <Button variant="outlined" className={'snowge-button tokendata-button goswap-button'}
                        href="https://goswappcharts.web.app/?isbsc=true&tokenId=0x5E9280d53F28281Ce098C8F64e49F5f5DC9Ea185"
                        target="_blank" rel="noreferrer"><img src={goswapp} className="tokendata-button-icon"/></Button>
                <Button variant="outlined" className={'snowge-button tokendata-button blockfolio-button'}
                        href="https://blockfolio.com/coin/SNOWGE"
                        target="_blank" rel="noreferrer"><img src={blockfolio}
                                                              className="tokendata-button-icon"/></Button>
                <Button variant="outlined" className={'snowge-button tokendata-button bsc-button'}
                        href="https://bscscan.com/token/0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185"
                        target="_blank" rel="noreferrer"><img src={bscscan} className="tokendata-button-icon"/></Button>
            </div>

            <div className={'numbers-div flex-row x-centre wrap'}>
                <div className={'flex-column y-centre number-entry'}>
                    <div id="activeSupply" className={'number-text'}><CountUp start={0} separator="," end={1000000000}
                                                                              delay={0} easingFn={easingFn}
                                                                              duration={4}/></div>
                    <div>Total Supply</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <div id="activeBurn" className={'number-text'}><CountUp start={0} separator="," end={16000000}
                                                                            delay={0} easingFn={easingFn} duration={4}/>+
                    </div>
                    <div>Total Burned</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <div id="currentPrice" className={'number-text'}>$<CountUp start={0} decimals={5} separator=","
                                                                               end={0.0016} delay={0}
                                                                               easingFn={easingFn} duration={4}/></div>
                    <div>Price</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <div id="marketCap" className={'number-text'}>$<CountUp start={0} separator="," end={2000000}
                                                                            delay={0} easingFn={easingFn} duration={4}/>+
                    </div>
                    <div>Market Cap</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <div id="transactions" className={'number-text'}><CountUp start={0} separator="," end={6500}
                                                                              delay={0} easingFn={easingFn}
                                                                              duration={4}/>+
                    </div>
                    <div>Transactions</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <div id="totalHolders" className={'number-text'}><CountUp start={0} separator="," end={1800}
                                                                              delay={0} easingFn={easingFn}
                                                                              duration={2}/>+
                    </div>

                    <div>Unique Holders</div>
                </div>
            </div>
        </div>
    )
};

export default SnowgeIntroduction
