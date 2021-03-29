import * as React from "react"
import "./tokenomics.scss";
import techRateLogo from "../../images/audits/techratelogo.png";
import Button from "@material-ui/core/Button";

// TODO - Superfly or Eggs write here the descriptions we agree on
const Tokenomics = () => {
    return (
        <div className={'flex-column y-centre tokenomics-container'}>
            <div className={'giga-large-font slightly-bolder tokenomics-title'}>Tokenomics</div>
            <span>
                SnowgeCoin is a deflationary meme currency running on the BSC network. Snowge is capped at 1 billion tokens,
                which means there will never be more tokens than that. In fact, Snowge McFloof gets hungry during every transaction and eats a random
                percentage (between 2% and 8%) of it as a fee!
             <span className={'slightly-bolder'}> This randomized transaction fee </span>
                makes the token constantly decrease its max supply (therefore increasing token value) and, like all dogs, part of whatever comes in also comes out.
                Snowge gives back to its token holders with 50% of this transaction fee. Snowge doesn't belong to anyone, it belongs to everyone.
            </span>

            <span className={'disclaimer'}>
                The original contract code was forked from the SafeMoon Protocol, which means that the other 50% of Mr McFloof's fee gets turned into BNB/Snowge liquidity
                 and added right back to PancakeSwap. This helps establish a price floor on the token, and ensures that there will always be liquidity to trade against!
            </span>

            <span className={'disclaimer'}>
                During our adventure forking Safemoon we realized that the LP that was meant to be permanently locked away was actually easily accessible; in fact, this capability has
                been abused by a lot of other deflationary tokens. This is a big no no with us so we decided to be good floofers and permanently remove the ability to
                withdraw the collected fees from the LP. As far as we can tell we are one of very few to have done this fairly and openly, as we burned $18,000 worth of liquidity pool tokens and then
                renounced the token contract by transferring its ownership to a burned address. We are a purely non-profit team, and the SnowgeCoin token runs solely on community. <b>Community over greed, always.</b>
            </span>
            <div className={'token-spacer'}>Please note Snowge is all our original IP and all assets are owned by us.
            </div>
            <div className={'slightly-bolder'}>Snowge is 100% rug free and we have the receipts to prove it.</div>
            <div className={'flex-row wrap x-centre'}>
                <Button className={'snowge-button tokendata-button goswap-button'}
                        href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/Snowge%20Coin.pdf"
                        target="_blank" rel="noreferrer"><img src={techRateLogo} className="audit-logo"/></Button>
            </div>
        </div>
    )
};

export default Tokenomics
