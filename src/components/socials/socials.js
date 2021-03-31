import * as React from "react"
import IconButton from "@material-ui/core/IconButton";
import discordIcon from "../../images/socials/discord.svg";
import twitterIcon from "../../images/socials/twitter.svg";
import telegramIcon from "../../images/socials/telegram.svg";
import redditIcon from "../../images/socials/reddit.svg";
import mediumIcon from "../../images/socials/medium.svg";
import youtubeIcon from "../../images/socials/youtube.svg";
import "./socials.scss";
import Tooltip from "@material-ui/core/Tooltip";
import {AcUnitRounded} from "@material-ui/icons";

const Socials = () => {
    return (
        <div className={'flex-row y-centre x-centre socials-container'}>
            <Tooltip title="Twitter" enterDelay={600}>
                <IconButton aria-label="Twitter" href="https://twitter.com/snowgecoin" target="_blank"
                            style={{color: '#0F4395'}}>
                    <img src={twitterIcon} alt={'twitter logo'} height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Telegram" enterDelay={600}>
                <IconButton aria-label="Telegram" href="http://t.me/snowgecoin" target="_blank" style={{color: '#0F4395'}}>
                    <img src={telegramIcon} alt={'telegram logo'} height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Discord" enterDelay={600}>
                <IconButton aria-label="Discord" href="https://discord.gg/qy3ymqazeJ" target="_blank"
                            style={{color: '#0F4395'}}>
                    <img src={discordIcon} alt={'discord logo'} height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Reddit" enterDelay={600}>
                <IconButton aria-label="Reddit" href="https://www.reddit.com/r/SnowgeCoin/" target="_blank"
                            style={{color: '#0F4395'}}>
                    <img src={redditIcon} alt={'reddit logo'} height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Medium" enterDelay={600}>
                <IconButton aria-label="Medium" href="https://snowgecoin.medium.com" target="_blank"
                            style={{color: '#0F4395'}}>
                    <img src={mediumIcon} alt={'medium logo'} height={18} width={18}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Youtube" enterDelay={600}>
                <IconButton aria-label="Youtube" href="https://www.youtube.com/channel/UCYXES0sbHwh6xvwA6sRtONQ" target="_blank"
                            style={{color: '#0F4395'}}>
                    <img src={youtubeIcon} alt={'youtube logo'} height={18} width={18}/>
                </IconButton>
            </Tooltip>
        </div>
    )
};

export default Socials
