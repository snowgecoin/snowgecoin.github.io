import * as React from "react"
import "./navbar.scss";
import "../../scss/standard-styles.scss";
import logo from "../../images/Smollsnoge.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {useState} from "react";
import {useEffect} from "react";
import GatsbyLink from "gatsby-link";

// Add more pages here if you'd like to display them
const pages = [
    // {
    //     id: '1',
    //     header: 'Floofypaper',
    //     path: '/floofypaper'
    // },
    {
        id: '2',
        header: 'Roadmap',
        path: '/roadmap'
    },
];

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
};

const NavBar = () => {
    const [activePage, setActivePage] = useState('');
    const pageLinks = () => {
        let array = [];
        for (let page of pages) {
            array.push(<GatsbyLink
                className={`pointer link-text slightly-bolder ${activePage === page.header.toLowerCase() ? 'active-page' : ''}`}
                key={page.id} to={page.path} onClick={() => setActivePage(page.header)}>{page.header}</GatsbyLink>);
        }

        return array;
    };
    const renderLinks = pageLinks();

    useEffect(() => {
        setActivePage(window.location.pathname.replaceAll('/', ''));
    }, [activePage]);

    return (
        <div className={'navbar-wrapper flex-row y-centre x-centre wrap'}>
            <GatsbyLink className={'flex-row y-centre pointer token-container'} to={'/home'}>
                <img src={logo} alt={'snowge'} className={'header-logo'}/>
                <div className={'giga-large-font slightly-bold nav-header'}>SnowgeCoin</div>
            </GatsbyLink>
            {/*<span className={'flex-spacer'}></span>*/}
            <div className={'pointer link-text slightly-bolder'}
               onClick={() => openInNewTab('https://snowge.s3.amazonaws.com/SnowgeCoinFloofyPaper.pdf')}><span>Floofypaper</span></div>
            <div className={'flex-row y-centre'}>{renderLinks}</div>
        </div>
    )
};

export default NavBar
