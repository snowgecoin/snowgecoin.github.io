import * as React from "react"
import IconButton from "@material-ui/core/IconButton";
import discordIcon from "../../images/socials/discord.svg";
import twitterIcon from "../../images/socials/twitter.svg";
import telegramIcon from "../../images/socials/telegram.svg";
import "./socials.scss";

const Socials = () => {
    return (
        <div className={'flex-row y-centre x-centre socials-container'}>
            <IconButton aria-label="Twitter" href="https://twitter.com/snowgecoin" target="_blank"
                        style={{color: '#0F4395'}}>
                <img src={twitterIcon} alt={'twitter logo'} height={18} width={18}/>
            </IconButton>
            <IconButton aria-label="Telegram" href="http://t.me/snowgecoin" target="_blank" style={{color: '#0F4395'}}>
                <img src={telegramIcon} alt={'telegram logo'} height={18} width={18}/>
            </IconButton>
            <IconButton aria-label="Discord" href="http://discord.gg/KrkRMb83" target="_blank"
                        style={{color: '#0F4395'}}>
                <img src={discordIcon} alt={'discord logo'} height={18} width={18}/>
            </IconButton>
        </div>
    )
};

export default Socials
