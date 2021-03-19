import * as React from "react"
import "./navbar.scss";
import "../../scss/standard-styles.scss";
import logo from "../../images/Smollsnoge.png";
import Countdown from "../countdown/countdown";
import { Button, Badge } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const pages = [
    {
        header: 'Floofpaper',
        path: ''
    },
    {
        header: 'Buy',
        path: ''
    },
];

const pageLinks = () => {
    let array = [];
    for (let page of pages) {
        array.push(<div>{page.header}</div>);
    }

    return array;
};

const NavBar = () => {
    const renderLinks = pageLinks();
    return (
        <div className={'flex-column navbar-container'}>
            <div className={'navbar flex-row y-centre'}>
                <div className={'flex-row y-centre pointer'}>
                    <img src={logo} className={'header-logo'}></img>
                    <div className={'giga-large-font slightly-bold nav-header header-text-styling'}>SnowgeCoin</div>
                </div>

                <span className={'flex-spacer'}></span>
                {/*<div className={'flex-row y-centre'}>{renderLinks}</div>*/}
            </div>
            <span className={'flex-spacer'}></span>
            <div className={'flex-row y-centre x-centre countdown-container'}>
                <Countdown/>
            </div>
            <div className={'flex-row y-centre x-centre presale-button-container'}>
                <a href="https://dxsale.app/app/pages/defipresale?saleID=25&chain=BSC" target="_blank">
                    <Button pill size="lg" className="primary-button">Adopt a Snowge</Button>
                </a>
            </div>
            <div className={'flex-row y-centre x-centre socials-container'}>
                <Badge pill outline href="https://twitter.com/snowgecoin" target="_blank" className="primary-badge">Twitter</Badge>
                <Badge pill outline href="http://discord.gg/KrkRMb83" target="_blank" className="primary-badge">Discord</Badge>
                <Badge pill outline href="http://t.me/snowgecoin" target="_blank" className="primary-badge">Telegram</Badge>
                <Badge pill outline href="https://snowge.s3.amazonaws.com/SnowgeCoinFloofyPaper.pdf" target="_blank" className="primary-badge">FloofyPaper</Badge>
            </div>
            <span className={'flex-spacer'}></span>
            <div className={'flex-row x-centre construction-text'}>*This site is still buried under a snowgestorm. Emergency crews are working around the clock to dig it back up!*</div>
        </div>
    )
};

export default NavBar
