import * as React from "react"
import "./navbar.scss";
import "../../scss/standard-styles.scss";
import logo from "../../images/Smollsnoge.png";
import animatedSnowge from "../../video/Snowge_Animated_LogoMEDIUM.gif"
import {useState} from "react";
import {useEffect} from "react";
import GatsbyLink from "gatsby-link";
import {AcUnitRounded, OpenInNewRounded, MenuRounded, CloseRounded} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import twitterIcon from "../../images/socials/twitter.svg";
import telegramIcon from "../../images/socials/telegram.svg";
import discordIcon from "../../images/socials/discord.svg";
import redditIcon from "../../images/socials/reddit.svg";
import mediumIcon from "../../images/socials/medium.svg";
import youtubeIcon from "../../images/socials/youtube.svg";
import Button from "@material-ui/core/Button";
import github from "../../images/socials/github.svg";

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null
};

const NavBar = ({toggleSnow}) => {
    const [activePage, setActivePage] = useState('');
    const [activeBackground, setActiveBackground] = useState('');
    const [activeNavTextColour, setActiveNavTextColour] = useState('dark-nav-text');
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
        if (window.scrollY < (window.innerHeight / 12)) {
            if (!click) {
                setActiveBackground('navbar-background');
                setActiveNavTextColour('white-nav-text');
            } else {
                setActiveBackground('remove-background');
                setActiveNavTextColour('dark-nav-text');
            }
        }
    };
    const closeMobileMenu = () => setClick(false);

    function navToAbout() {
        setActivePage('about');
        closeMobileMenu(true);
    }

    function navToRoadMap() {
        setActivePage('roadmap');
        closeMobileMenu(true);
    }

    function navToTeam() {
        setActivePage('team');
        closeMobileMenu(true);
    }

    function openBuyNow() {
        openInNewTab('https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5e9280d53f28281ce098c8f64e49f5f5dc9ea185');
        closeMobileMenu(true);
    }

    useEffect(() => {
        setActivePage(window.location.pathname.replaceAll('/', ''));
        window.addEventListener('scroll', () => {
            if (window.scrollY < (window.innerHeight / 12)) {
                setActiveBackground('remove-background');
                setActiveNavTextColour('dark-nav-text');
            } else {
                setActiveBackground('navbar-background');
                setActiveNavTextColour('white-nav-text');
            }
        });

    }, [activePage]);

    return (
        <div className={`navbar-wrapper flex-row y-centre x-centre ${activeBackground}`}>
            <div className={'navbar-container flex-row y-centre x-centre wrap'}>
                <div className={'flex-row y-centre token-container'}>
                    <GatsbyLink to={'/home'}>
                        <img src={animatedSnowge} id='floofyboi' alt="animated snowge"/>
                    </GatsbyLink>
                    <div className={'flex-column'}>
                        <GatsbyLink to={'/home'} className={'text-decoration-none'}>
                            <div className={`slightly-bold nav-header pointer ${activeNavTextColour}`}>SnowgeCoin</div>
                        </GatsbyLink>
                    </div>
                </div>

                <div className={click ? "nav-options active" : "nav-options"}>
                    <GatsbyLink
                        className={`pointer link-text slightly-bolder ${click ? "option active" : "option"}`}
                        key={1} to={'/about'} onClick={() => navToAbout()}>
                        <span>About</span>
                        <div className={`${activePage === 'about' ? 'active-page' : ''}`}></div>
                    </GatsbyLink>
                    <GatsbyLink
                        className={`pointer link-text slightly-bolder ${click ? "option active" : "option"}`}
                        key={1} to={'/roadmap'} onClick={() => navToRoadMap()}>
                        <span>Roadmap</span>
                        <div className={`${activePage === 'roadmap' ? 'active-page' : ''}`}></div>
                    </GatsbyLink>
                    <GatsbyLink
                        className={`pointer link-text slightly-bolder ${click ? "option active" : "option"}`}
                        key={1} to={'/team'} onClick={() => navToTeam()}>
                        <span>Team</span>
                        <div className={`${activePage === 'team' ? 'active-page' : ''}`}></div>
                    </GatsbyLink>
                    <div
                        className={`buy-now-button flex-row y-centre slightly-bolder pointer ${click ? "option active" : "option"}`}
                        role="link" onClick={() => openBuyNow()}>Buy Now
                    </div>

                    <div
                        className={`navbar-socials flex-row y-centre x-centre wrap ${click ? "option active" : "option"}`}>
                        <Tooltip title="Twitter" enterDelay={600}>
                            <IconButton aria-label="Twitter" href="https://twitter.com/snowgecoin" target="_blank"
                                        style={{color: '#0F4395'}}>
                                <img src={twitterIcon} alt={'twitter logo'} height={16} width={16}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Telegram" enterDelay={600}>
                            <IconButton aria-label="Telegram" href="http://t.me/snowgecoin" target="_blank"
                                        style={{color: '#0F4395'}}>
                                <img src={telegramIcon} alt={'telegram logo'} height={16} width={16}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Discord" enterDelay={600}>
                            <IconButton aria-label="Discord" href="https://discord.gg/qy3ymqazeJ" target="_blank"
                                        style={{color: '#0F4395'}}>
                                <img src={discordIcon} alt={'discord logo'} height={16} width={16}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Reddit" enterDelay={600}>
                            <IconButton aria-label="Reddit" href="https://www.reddit.com/r/SnowgeCoin/" target="_blank"
                                        style={{color: '#0F4395'}}>
                                <img src={redditIcon} alt={'reddit logo'} height={16} width={16}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Medium" enterDelay={600}>
                            <IconButton aria-label="Medium" href="https://snowgecoin.medium.com" target="_blank"
                                        style={{color: '#0F4395'}}>
                                <img src={mediumIcon} alt={'medium logo'} height={16} width={16}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Youtube" enterDelay={600}>
                            <IconButton aria-label="Youtube"
                                        href="https://www.youtube.com/channel/UCYXES0sbHwh6xvwA6sRtONQ" target="_blank"
                                        style={{color: '#0F4395'}}>
                                <img src={youtubeIcon} alt={'youtube logo'} height={16} width={16}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Github" enterDelay={600}>
                            <IconButton aria-label="Github" href="https://github.com/snowgecoin" target="_blank"
                                        style={{color: '#FFFFFF'}}>
                                <img src={github} alt={'github logo'} height={16} width={16}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Toggle snowgestorm" enterDelay={600}>
                            <IconButton aria-label="Toggle snow" onClick={toggleSnow} target="_blank"
                                        style={{color: '#0F4395'}} className={'snow-button'}>
                                <AcUnitRounded tooltip={'toggle snow'}
                                               className={`snow-icon pointer`}></AcUnitRounded>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>

                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <CloseRounded className={`menu-icon ${activeNavTextColour}`}/>
                    ) : (
                        <MenuRounded className={`menu-icon ${activeNavTextColour}`}/>
                    )}
                </div>
            </div>
        </div>
    )
};

export default NavBar
