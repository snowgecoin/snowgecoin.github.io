// import * React, { useState, useEffect } from "react"
import * as React from "react"
import "./snowgeIntroduction.scss";
import Button from "@material-ui/core/Button";
import CountUp from 'react-countup';
import blockfolio from "../../images/tokendata/blockfolio.svg";
import bscscan from "../../images/tokendata/bscscan.svg";
import goswapp from "../../images/tokendata/goswapp.svg";
import dexguru from "../../images/tokendata/dex-guru.png";
import fire from "../../images/emojis/fire.png";
import packageIcon from "../../images/emojis/package.png";
import money from "../../images/emojis/money.png";
import moneyBag from "../../images/emojis/moneyBag.png";
import exchange from "../../images/emojis/exchange.png";
import diamond from "../../images/emojis/diamond.png";
import {Helmet} from "react-helmet";

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
          <Helmet>
              <script src="./web3-utils.min.js?v=20.12.0.2" />
              <script src="./web3-eth.min.js?v=20.12.0.2" />
              <script src="./web3-providers-http.min.js?v=20.12.0.2" />
              <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.min.js"/>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/bignumber.js/9.0.1/bignumber.min.js"/>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
              <script src="./dashboard-widget-2.js" />
          </Helmet>
            <div className={'snowge-title'}>Charity Driven Meme-fueled Deflationary Defi Token</div>
            <div className={'snowge-info-text'}>Of the floofs, by the floofs, for the floofs.</div>

            <div className={'numbers-div flex-row x-centre wrap'}>
                <div className={'flex-column y-centre number-entry'}>
                    <img src={packageIcon} alt={'fire'} className={'emoji-icon'}/>
                    <div id="activeSupply" className={'number-text'}><CountUp start={0} separator="," end={1000000000}
                                                                              delay={0} easingFn={easingFn}
                                                                              duration={4}/></div>
                    <div className={'number-label-text slightly-bolder'}>Total Supply</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <img src={fire} alt={'fire'} className={'emoji-icon'}/>
                    <div id="activeBurn" className={'number-text'}><CountUp start={0} separator="," end={18000000}
                                                                            delay={0} easingFn={easingFn} duration={4}/>+
                    </div>
                    <div className={'number-label-text slightly-bolder'}>Total Burned</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <img src={money} alt={'fire'} className={'emoji-icon'}/>
                    <div id="currentPrice" className={'number-text'}>$<CountUp start={0} decimals={5} separator=","
                                                                               end={0.0008} delay={0}
                                                                               easingFn={easingFn} duration={4}/></div>
                    <div className={'number-label-text slightly-bolder'}>Price</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <img src={moneyBag} alt={'fire'} className={'emoji-icon'}/>
                    <div id="marketCap" className={'number-text'}>$<CountUp start={0} separator="," end={800000}
                                                                            delay={0} easingFn={easingFn} duration={4}/>+
                    </div>
                    <div className={'number-label-text slightly-bolder'}>Market Cap</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <img src={exchange} alt={'fire'} className={'emoji-icon'}/>
                    <div id="transactions" className={'number-text'}><CountUp start={0} separator="," end={13625}
                                                                              delay={0} easingFn={easingFn}
                                                                              duration={4}/>+
                    </div>
                    <div className={'number-label-text slightly-bolder'}>Transactions</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <img src={diamond} alt={'fire'} className={'emoji-icon'}/>
                    <div id="totalHolders" className={'number-text'}><CountUp start={0} separator="," end={2750}
                                                                              delay={0} easingFn={easingFn}
                                                                              duration={2}/>+
                    </div>

                    <div className={'number-label-text slightly-bolder'}>Unique Holders</div>
                </div>
            </div>

            <div className={'snowge-buttons-div flex-row wrap x-centre'}>
                <Button variant="outlined" className={'tokendata-button'}
                        href="https://bscscan.com/token/0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185"
                        target="_blank" rel="noreferrer"><img src={bscscan} className="tokendata-button-icon"/></Button>
                <Button variant="outlined" className={'tokendata-button'}
                        href="https://blockfolio.com/coin/SNOWGE"
                        target="_blank" rel="noreferrer"><img src={blockfolio}
                                                              className="tokendata-button-icon"/></Button>
                <Button variant="outlined" className={'tokendata-button'}
                        href="https://goswappcharts.web.app/?isbsc=true&tokenId=0x5E9280d53F28281Ce098C8F64e49F5f5DC9Ea185"
                        target="_blank" rel="noreferrer"><img src={goswapp} className="tokendata-button-icon"/></Button>
                <Button variant="outlined" className={'tokendata-button'}
                        href="https://dex.guru/token/0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185-bsc"
                        target="_blank" rel="noreferrer"><img src={dexguru} className="dexguru-icon"/></Button>
            </div>

            <div className={'snowge-contract-addy'}>Token Address: 0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185</div>
        </div>
    )
};

export default SnowgeIntroduction
