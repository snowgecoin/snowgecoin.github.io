import * as React from "react"
import "./navbar.scss";
import "../../scss/standard-styles.scss";
import logo from "../../images/Smollsnoge.png";
import animatedSnowge from "../../video/anisnowgetransparent.gif"
import {useState} from "react";
import {useEffect} from "react";
import GatsbyLink from "gatsby-link";
import {AcUnitRounded, OpenInNewRounded, MenuRounded, CloseRounded} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import Socials from "../socials/socials";

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null
};

const NavBar = ({toggleSnow}) => {
    const [activePage, setActivePage] = useState('');
    const [activeBackground, setActiveBackground] = useState('');
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    function openFlooflypaper() {
        openInNewTab('https://snowge.s3.amazonaws.com/SnowgeCoinFloofyPaper.pdf');
        closeMobileMenu(true);
    }

    function openMedium() {
        openInNewTab('https://snowgecoin.medium.com');
        closeMobileMenu(true);
    }

    function navToRoadMap() {
        setActivePage('roadmap');
        closeMobileMenu(true);
    }

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
        <div className={`navbar-wrapper flex-row y-centre x-centre ${activeBackground}`}>
            <div className={'navbar-container flex-row y-centre x-centre'}>
                <div className={'flex-row y-centre token-container'}>
                    <GatsbyLink to={'/home'}>
                        <img src={animatedSnowge} id='floofyboi' alt="animated snowge"/>

                        {/*<video autoPlay loop muted id='floofyboi'>*/}
                        {/*    <source src={animatedSnowge} type='video/mp4'/>*/}
                        {/*</video>*/}
                    </GatsbyLink>
                    <div className={'flex-column'}>
                        <GatsbyLink to={'/home'} className={'text-decoration-none'}>
                            <div className={'slightly-bold nav-header pointer'}>SnowgeCoin</div>
                        </GatsbyLink>
                    </div>
                </div>

                <div className={click ? "nav-options active" : "nav-options"}>
                    <GatsbyLink
                        className={`pointer link-text slightly-bolder ${click ? "option active" : "option"} ${activePage === 'roadmap' ? 'active-page' : ''}`}
                        key={1} to={'/roadmap'} onClick={() => navToRoadMap()}>Roadmap</GatsbyLink>
                    <div className={`pointer link-text slightly-bolder ${click ? "option active" : "option"}`}
                         role="link"
                         onClick={() => openFlooflypaper()}>
                        <span>Floofypaper</span>
                        <OpenInNewRounded className={'new-tab-icon'}></OpenInNewRounded>
                    </div>
                    <div className={`pointer link-text slightly-bolder ${click ? "option active" : "option"}`} role="link"
                         onClick={() => openMedium()}>
                        <span>Medium</span>
                        <OpenInNewRounded className={'new-tab-icon'}></OpenInNewRounded>
                    </div>
                    <div className={`flex-row y-centre link-text ${click ? "option active" : "option"}`}>
                        <Tooltip title="Toggle snowstorm" enterDelay={600}>
                            <AcUnitRounded onClick={toggleSnow} tooltip={'toggle snow'}
                                           className={`snow-button pointer`}></AcUnitRounded>
                        </Tooltip>
                    </div>
                </div>

                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <CloseRounded className="menu-icon"/>
                    ) : (
                        <MenuRounded className="menu-icon"/>
                    )}
                </div>
            </div>
        </div>
    )
};

export default NavBar
