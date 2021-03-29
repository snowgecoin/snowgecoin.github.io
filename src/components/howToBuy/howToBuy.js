import * as React from "react"
import "./howToBuy.scss";
import logo from "../../images/WoofOfWallStreet.png";
import trustLogo from "../../images/trust.png";
import metamaskLogo from "../../images/metamask.png";
import Button from "@material-ui/core/Button";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {useState} from "react";
import {useEffect} from "react";

function fetchContent(index) {
  if (index === 0) {
    return(
      <div className={'left-column'}>
          <div className={'how-to-step flex-column'}>
              <div className={'slightly-bolder'}>Download TrustWallet</div>
              <span className={'flex-spacer'}></span>
              <div>
                  Trustwallet (<a href="https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409" target="_blank">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp&hl=en_US&gl=US" target="_blank">Android</a>) is a crypto wallet that can be used to trade on the
                  Binance Smart Chain (where
                  Snowge lives). Create a Smart Chain wallet, and save your recovery phrase securely!
              </div>
          </div>
          <div className={'how-to-step flex-column'}>
              <div className={'slightly-bolder'}>Buy Binance Coin (BNB)</div>
              <span className={'flex-spacer'}></span>
              <div>
                  If you're using iOS, first <a href="trust://browser_enable">click here to enable Trust Wallet's full functionality. </a>
                  Tap on <b>Smart Chain</b>, and then click <b>Buy</b> in the top right corner. Use a debit card, and remember - there's a small fee!
              </div>
          </div>
          <div className={'how-to-step flex-column'}>
              <div className={'slightly-bolder'}>Go to Pancake Swap within TrustWallet</div>
              <span className={'flex-spacer'}></span>
              <div>
                  Tap the <b>Browser</b> tab in TrustWallet, then type in <a href="https://snowge.xyz">snowge.xyz</a>. Tap on our <b>Buy on PancakeSwap</b> link, and accept the confirmation pop up.
              </div>
          </div>
          <div className={'how-to-step flex-column'}>
              <div className={'slightly-bolder'}>Enter the Amount and Hit Swap</div>
              <span className={'flex-spacer'}></span>
              <div>
                  Hit the <b>Connect</b> button in the top right, then tap TrustWallet. Enter your amount, and then hit confirm. Welcome aboard comrade, and hold on. We're going to Floofytown.
              </div>
          </div>
      </div>
    )
  } else if (index === 1) {
    return(
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
              <div className={'slightly-bolder'}>Buy Binance Coin (BNB)</div>
              <span className={'flex-spacer'}></span>
              <div>
                  Buy Binance Coin (BNB) from <a href="https://www.binance.com/en" target="_blank">binance.com</a> or <a href="https://www.binance.us/en/home" target="_blank">binance.us</a>, and then withdraw it to Metamask.
                  Here's <a href="https://medium.com/@leeds.harry/how-to-withdraw-bnb-on-binance-us-to-metamask-for-bakeryswap-7916807772f7" target="_blank">a terrific guide!</a>
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
        <div className={'flex-column y-centre x-centre how-to-buy-container'}>
            <div className={'giga-large-font slightly-bolder how-to-title'}>How to Buy</div>
            <ButtonGroup size="medium" color="primary" aria-label="large outlined primary button group">
              <Button className="less-button-padding" onClick={() => setActiveNode(0)}><img src={trustLogo} className={"wallet-icon"}/></Button>
              <Button className="less-button-padding" onClick={() => setActiveNode(1)}><img src={metamaskLogo} className={"wallet-icon"}/></Button>
            </ButtonGroup>
            <div className={'flex-row x-centre reverse-wrap'}>
                {fetchContent(activeNode)}
                <div className={'right-column flex-row x-centre y-centre'}>
                    <img src={logo} alt={'Woof of Wall Street'} className={'buy-snowge'}/>
                </div>
            </div>
        </div>
    )
};

export default HowToBuy
