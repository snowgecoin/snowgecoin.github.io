import * as React from "react"
import "./howToBuy.scss";
import logo from "../../images/WoofOfWallStreet.png";

const HowToBuy = () => {
    return (
        <div className={'flex-column y-centre x-centre how-to-buy-container'}>
            <div className={'giga-large-font slightly-bolder how-to-title'}>How to Buy</div>
            <div className={'flex-row x-centre reverse-wrap'}>
                <div className={'left-column'}>
                    <div className={'how-to-step flex-column'}>
                        <div className={'slightly-bolder'}>Download Metamask</div>
                        <span className={'flex-spacer'}></span>
                        <div>
                            <a href="https://metamask.io/" target="_blank">Metamask</a> is a crypto wallet that can be used to trade on the
                            Binance Smart Chain (where
                            Snowge lives).
                        </div>
                    </div>
                    <div className={'how-to-step flex-column'}>
                        <div className={'slightly-bolder'}>Buy Binance Coin</div>
                        <span className={'flex-spacer'}></span>
                        <div>
                            Buy Binance Coin (BNB) from <a href="https://www.binance.com/en" target="_blank">binance.com</a> or <a href="https://www.binance.us/en/home" target="_blank">binance.us</a>, and then withdraw it to Metamask.
                        </div>
                    </div>
                    <div className={'how-to-step flex-column'}>
                        <div className={'slightly-bolder'}>Go to Pancake Swap</div>
                        <span className={'flex-spacer'}></span>
                        <div>
                            Hit that lovely buy button just above to be redirected to it and accept the pop up message.
                        </div>
                    </div>
                    <div className={'how-to-step flex-column'}>
                        <div className={'slightly-bolder'}>Enter the Amount and Hit Swap</div>
                        <span className={'flex-spacer'}></span>
                        <div>
                            Confirm with Metamask. Welcome aboard comrade, hold on. We're going to Floofytown.
                        </div>
                    </div>
                </div>
                <div className={'right-column flex-row x-centre y-centre'}>
                    <img src={logo} alt={'Woof of Wall Street'} className={'buy-snowge'}/>
                </div>
            </div>
        </div>
    )
};

export default HowToBuy
