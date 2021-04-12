import * as React from "react"
import "./footer.scss";
import Socials from "../socials/socials";

const Footer = () => {
    return (
        <div className={'flex-row y-centre x-centre reverse-wrap footer-container'}>
            <div className={'white-text slightly-bolder flex-spacer copyright'}>&#169; 2021 SnowgeCoin | All rights reserved.</div>
            <Socials/>
        </div>
    )
};

export default Footer
