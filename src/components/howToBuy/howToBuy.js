import * as React from "react"
import "./howToBuy.scss";
import logo from "../../images/WoofOfWallStreet.png";
import trustLogo from "../../images/tokendata/trustwallet.svg";
import metamaskLogo from "../../images/metamask.png";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {useState} from "react";
import {useEffect} from "react";
import techRateLogo from "../../images/audits/techratelogo.png";
import earth from "../../images/emojis/earth.png";
import bank from "../../images/emojis/bank.png";
import chart from "../../images/emojis/chart.png";
import robot from "../../images/emojis/robot.png";
import point from "../../images/emojis/pointup.png";
import justice from "../../images/emojis/justice.png";
import sparkles from "../../images/emojis/sparkles.png";
import IconButton from "@material-ui/core/IconButton";

function fetchContent(index) {
    if (index === 0) {
        return (
            <div>
                <div className={'how-to-step flex-column'}>
                    <div className={'slightly-bolder'}>Download TrustWallet</div>
                    <span className={'flex-spacer'}></span>
                    <div>
                        Trustwallet (<a href="https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409"
                                        target="_blank">iOS</a>, <a
                        href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&hl=en_US&gl=US"
                        target="_blank">Android</a>) is a crypto wallet that can be used to trade on the
                        Binance Smart Chain (where
                        Snowge lives). Create a Smart Chain wallet, and save your recovery phrase securely!
                    </div>
                </div>
                <div className={'how-to-step flex-column'}>
                    <div className={'slightly-bolder'}>Buy Binance Coin (BNB)</div>
                    <span className={'flex-spacer'}></span>
                    <div>
                        If you're using iOS, first <a href="trust://browser_enable">click here to enable Trust Wallet's
                        full functionality. </a>
                        Tap on <b>Smart Chain</b>, and then click <b>Buy</b> in the top right corner. Use a debit card,
                        and remember - there's a small fee!
                    </div>
                </div>
                <div className={'how-to-step flex-column'}>
                    <div className={'slightly-bolder'}>Go to Pancake Swap within TrustWallet</div>
                    <span className={'flex-spacer'}></span>
                    <div>
                        Tap the <b>Browser</b> tab in TrustWallet, then type in <a
                        href="https://snowgecoin.xyz">snowgecoin.com</a>. Tap on our <b>Buy on PancakeSwap</b> link, and accept
                        the confirmation pop up.
                    </div>
                </div>
                <div className={'how-to-step flex-column'}>
                    <div className={'slightly-bolder'}>Enter the Amount and Hit Swap</div>
                    <span className={'flex-spacer'}></span>
                    <div>
                        Hit the <b>Connect</b> button in the top right, then tap TrustWallet. Enter your amount, and
                        then hit confirm. Welcome aboard comrade, and hold on. We're going to Floofytown.
                    </div>
                </div>
            </div>
        )
    } else if (index === 1) {
        return (
            <div>
                <div className={'how-to-step flex-column'}>
                    <div className={'slightly-bolder'}>Download Metamask</div>
                    <span className={'flex-spacer'}></span>
                    <div>
                        <a href="https://metamask.io/" target="_blank">Metamask</a> is a crypto wallet that can be used
                        to trade on the
                        Binance Smart Chain (where
                        Snowge lives).
                    </div>
                </div>
                <div className={'how-to-step flex-column'}>
                    <div className={'slightly-bolder'}>Buy Binance Coin (BNB)</div>
                    <span className={'flex-spacer'}></span>
                    <div>
                        Buy Binance Coin (BNB) from <a href="https://www.binance.com/en"
                                                       target="_blank">binance.com</a> or <a
                        href="https://www.binance.us/en/home" target="_blank">binance.us</a>, and then withdraw it to
                        Metamask.
                        Here's <a
                        href="https://medium.com/@leeds.harry/how-to-withdraw-bnb-on-binance-us-to-metamask-for-bakeryswap-7916807772f7"
                        target="_blank">a terrific guide!</a>
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
                        Confirm with Metamask. Welcome aboard and comrade, hold on. We're going to Floofytown.
                    </div>
                </div>
            </div>
        )
    }
}

const HowToBuy = () => {
    const [activeNode, setActiveNode] = useState(0);
    useEffect(() => {
    }, [activeNode]);


    return (
        <div className={'flex-row wrap how-to-buy-container'}>
            <div className={'left-column flex-column'}>
                <div className={'quick-info-text flex-row y-centre'}>
                    <img src={point} alt={'point'} className={'info-emoji-icon'}/>
                    <span>First original fair launched RFI community coin on BSC</span>
                </div>
                <div className={'quick-info-text flex-row y-centre'}>
                    <img src={bank} alt={'bank'} className={'info-emoji-icon'}/>
                    <span>Earn interest by holding in your wallet</span>
                </div>
                <div className={'quick-info-text flex-row y-centre'}>
                    <img src={chart} alt={'chart'} className={'info-emoji-icon'}/>
                    <span>Each tx burns an increasing amount and builds a higher price floor</span>
                </div>
                <div className={'quick-info-text flex-row y-centre'}>
                    <img src={sparkles} alt={'sparkles'} className={'info-emoji-icon'}/>
                    <span>Charity oriented with the goal of providing animal shelters with donations earned passively</span>
                </div>
                <div className={'quick-info-text flex-row y-centre'}>
                    <img src={robot} alt={'robot'} className={'info-emoji-icon'}/>
                    <span>Ownership renounced to the blockchain god dead address</span>
                </div>
                <div className={'quick-info-text flex-row y-centre'}>
                    <img src={justice} alt={'justice'} className={'info-emoji-icon'}/>
                    <span>First to call out the shady practices of some other RFI tokens</span>
                </div>
                <div className={'quick-info-text flex-row y-centre'}>
                    <img src={earth} alt={'earth'} className={'info-emoji-icon'}/>
                    <span>Community over greed always</span>
                </div>

                <div className={'token-spacer'}>Please note Snowge is all our original IP and all assets are owned
                    by us.
                </div>
                <div className={'slightly-bolder'}>Snowge is 100% rug free and we have the receipts to prove it.
                </div>
                <div className={'flex-row wrap x-centre'}>
                    <IconButton
                        href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/Snowge%20Coin.pdf"
                            target="_blank" rel="noreferrer"><img src={techRateLogo}
                                                                  className="audit-logo"/></IconButton >
                </div>
            </div>

            <span className={'flex-spacer'}></span>

            <div className={'right-column flex-column y-centre how-to-card'}>
                <div className={'giga-large-font slightly-bolder how-to-title'}>How to Buy</div>
                <ButtonGroup size="medium" color="primary" aria-label="large outlined primary button group">
                    <Button className="wallet-button" onClick={() => setActiveNode(0)}><img src={trustLogo}
                                                                                            className={"wallet-icon"}/></Button>
                    <Button className="wallet-button" onClick={() => setActiveNode(1)}><img src={metamaskLogo}
                                                                                            className={"wallet-icon"}/></Button>
                </ButtonGroup>
                <div className={'need-help'}>Need help? <a href="https://www.youtube.com/watch?v=xZyiGE2cW6M"
                                                           target="_blank">Check out this
                    video.</a></div>
                {fetchContent(activeNode)}
            </div>
        </div>
    )
};

export default HowToBuy
