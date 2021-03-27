import * as React from "react"
import "./navbar.scss";
import "../../scss/standard-styles.scss";
import logo from "../../images/Smollsnoge.png";
import animatedSnowge from "../../video/anisnowge.mp4"
import {useState} from "react";
import {useEffect} from "react";
import GatsbyLink from "gatsby-link";
import {AcUnitRounded, OpenInNewRounded} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null
};

function getScrollPosition() {

}

const NavBar = ({toggleSnow}) => {
    const [activePage, setActivePage] = useState('');
    const [activeBackground, setActiveBackground] = useState('');
    useEffect(() => {
        setActivePage(window.location.pathname.replaceAll('/', ''));
        window.addEventListener('scroll', () => {
            if (window.scrollY < (window.innerHeight / 12)) {
                setActiveBackground('remove-background');
            } else {
                setActiveBackground('navbar-background');
            }
        });
    }, [activePage]);

    return (
        <div className={`navbar-wrapper flex-row y-centre x-centre wrap ${activeBackground}`}>
            <GatsbyLink className={'flex-row y-centre pointer token-container'} to={'/home'}>
                <video autoPlay loop muted id='floofyboi'>
                  <source src={animatedSnowge} type='video/mp4'/>
                </video>
                <div className={'giga-large-font slightly-bold nav-header'}>SnowgeCoin</div>
            </GatsbyLink>
            <GatsbyLink
                className={`pointer link-text slightly-bolder ${activePage === 'roadmap' ? 'active-page' : ''}`}
                key={1} to={'/roadmap'} onClick={() => setActivePage('roadmap')}>Roadmap</GatsbyLink>
            <div className={'pointer link-text slightly-bolder'} role="link"
                 onClick={() => openInNewTab('https://snowge.s3.amazonaws.com/SnowgeCoinFloofyPaper.pdf')}>
                <span>Floofypaper</span>
                <OpenInNewRounded className={'new-tab-icon'}></OpenInNewRounded>
            </div>
            <div className={'pointer link-text slightly-bolder'} role="link"
                 onClick={() => openInNewTab('https://snowgecoin.medium.com')}>
                <span>Medium</span>
                <OpenInNewRounded className={'new-tab-icon'}></OpenInNewRounded>
            </div>
            <Tooltip title="Toggle snowstorm" enterDelay={600}>
                <AcUnitRounded onClick={toggleSnow} tooltip={'toggle snow'} className={'snow-button pointer'}></AcUnitRounded>
            </Tooltip>
        </div>
    )
};

export default NavBar
