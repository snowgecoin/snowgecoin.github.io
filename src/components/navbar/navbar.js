import * as React from "react"
import "./navbar.scss";
import "../../scss/standard-styles.scss";
import logo from "../../images/Smollsnoge.png";
import {useState} from "react";
import {useEffect} from "react";
import GatsbyLink from "gatsby-link";
import {OpenInNew} from "@material-ui/icons";

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null
};

const NavBar = () => {
    const [activePage, setActivePage] = useState('');
    useEffect(() => {
        setActivePage(window.location.pathname.replaceAll('/', ''));
    }, [activePage]);

    return (
        <div className={'navbar-wrapper flex-row y-centre x-centre wrap'}>
            <GatsbyLink className={'flex-row y-centre pointer token-container'} to={'/home'}>
                <img src={logo} alt={'snowge'} className={'header-logo'}/>
                <div className={'giga-large-font slightly-bold nav-header'}>SnowgeCoin</div>
            </GatsbyLink>
            <GatsbyLink
                className={`pointer link-text slightly-bolder ${activePage === 'roadmap' ? 'active-page' : ''}`}
                key={1} to={'/roadmap'} onClick={() => setActivePage('roadmap')}>Roadmap</GatsbyLink>
            <div className={'pointer link-text slightly-bolder'} role = "link"
                 onClick={() => openInNewTab('https://snowge.s3.amazonaws.com/SnowgeCoinFloofyPaper.pdf')}>
                <span>Floofypaper</span>
                <OpenInNew className={'new-tab-icon'}></OpenInNew>
            </div>
        </div>
    )
};

export default NavBar
