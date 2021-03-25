// import * React, { useState, useEffect } from "react"
import * as React from "react"
import "./snowgeIntroduction.scss";
import Button from "@material-ui/core/Button";
import CountUp from 'react-countup';

const easingFn = (t, b, c, d) => {
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t*t*t + 2) + b;
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
            <div className={'snowge-contract-addy'}>0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185</div>
            <div className={'snowge-buttons-div flex-row wrap x-centre'}>
                <Button variant="contained" className={'snowge-button pcs-button'}
                        href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185"
                        target="_blank" rel="noreferrer">Buy on Pancake Swap</Button>
                <Button variant="contained" className={'snowge-button goswap-button'}
                        href="https://goswappcharts.web.app/?isbsc=true&tokenId=0x5E9280d53F28281Ce098C8F64e49F5f5DC9Ea185"
                        target="_blank" rel="noreferrer">GoSwapp Chart</Button>
                <Button variant="contained" className={'snowge-button poo-button'}
                        href="https://poocoin.app/tokens/0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185"
                        target="_blank" rel="noreferrer">Poocoin Chart</Button>
                <Button variant="contained" className={'snowge-button bsc-button'}
                        href="https://bscscan.com/token/0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185"
                        target="_blank" rel="noreferrer">Snowge on BSCScan</Button>
            </div>

            <div className={'numbers-div flex-row x-centre wrap'}>
                <div className={'flex-column y-centre number-entry'}>
                    <div className={'number-text'}><CountUp start={0} separator="," end={1000000000} delay={0} easingFn={easingFn} delay={0} duration={4}/></div>
                    <div>Total Supply</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <div className={'number-text'}><CountUp start={0} separator="," end={16000000} delay={0} easingFn={easingFn} delay={0} duration={4}/>+</div>
                    <div>Total Burned</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <div className={'number-text'}>$<CountUp start={0} separator="," end={2000000} delay={0} easingFn={easingFn} delay={0} duration={4}/>+</div>
                    <div>Market Cap</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <div className={'number-text'}><CountUp start={0} separator="," end={6500} delay={0} easingFn={easingFn} delay={0} duration={4}/>+</div>
                    <div>Transactions</div>
                </div>
                <div className={'flex-column y-centre number-entry'}>
                    <div className={'number-text'}><CountUp start={0} separator="," end={1700} easingFn={easingFn} delay={0} duration={4}/>+</div>

                    <div>Unique Holders</div>
                </div>
            </div>
        </div>
    )
};

export default SnowgeIntroduction
