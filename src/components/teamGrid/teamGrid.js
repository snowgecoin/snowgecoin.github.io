import * as React from "react"
import './teamGrid.scss';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import discordIcon from "../../images/teampics/discord.svg";
import telegramIcon from "../../images/teampics/telegram.svg";
import miami from "../../images/teampics/snowgemami.png";
import eggs from "../../images/teampics/eggs.png";
import sir from "../../images/teampics/sir.png";
import superfly from "../../images/teampics/superfly.png";
import scup from "../../images/teampics/scup.png";
import krah from "../../images/teampics/krah.png";
import syn from "../../images/teampics/syn.png";
import dca from "../../images/teampics/dca.png";
import momo from "../../images/teampics/momo.png";
import rich from "../../images/teampics/rich.png";
import bong from "../../images/teampics/bong.png";

const TeamGrid = () => {
    return (
        <div className={'flex-column team-grid-container'}>
            <div className={'team-grid-title slightly-bolder'}>SnowgeCrew</div>
            <div className={'team-grid-subtitle slightly-bolder'}>Snowge Core</div>
            <div className={'flex-row x-centre wrap'}>
                <div className={'team-card flex-column'}>
                    <img src={eggs} alt={'eggs'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>Eggs</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Developer</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/356909066292953089"
                                            target="_blank"
                                            style={{color: '#0F4395'}}>
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={'team-card flex-column'}>
                    <img src={miami} alt={'miami'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>Miami SnowgeMami</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Developer</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/210771747094396928"
                                            target="_blank"
                                            style={{color: '#0F4395'}}>
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={'team-card flex-column'}>
                    <img src={sir} alt={'sir'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>Sir Snowge</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Developer</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/451487399520763915"
                                            target="_blank"
                                            style={{color: '#0F4395'}}>
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={'team-card flex-column'}>
                    <img src={scup} alt={'scup'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>Scup</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Community Manager | Memes Printer</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/784208434706382868"
                                            target="_blank">
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={'team-card flex-column'}>
                    <img src={superfly} alt={'superfly'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>SuperFlyTNT2</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Community Manager | Advisor</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/324434321454792706"
                                            target="_blank">
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={'team-card flex-column'}>
                    <img src={krah} alt={'krah'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>Krahnik</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Community Manager | Detective</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/159774791593754624"
                                            target="_blank">
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={'team-card flex-column'}>
                    <img src={syn} alt={'syn'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>Synonymous</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Community Manager | Outreach</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/97660516041768960"
                                            target="_blank">
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={'team-card flex-column'}>
                    <img src={dca} alt={'dca'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>DCA</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Community Manager | King Shiller</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/211239985314136064"
                                            target="_blank">
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'team-grid-subtitle slightly-bolder'}>Snowge Community Creative Leads</div>
            <div className={'flex-row x-centre wrap'}>
                <div className={'team-card flex-column'}>
                    <img src={momo} alt={'momo'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>Momo</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Snowge mama</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/307620631694934016"
                                            target="_blank"
                                            style={{color: '#0F4395'}}>
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={'team-card flex-column'}>
                    <img src={bong} alt={'bong'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>Bongchild</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Dank art</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/595036039383351306"
                                            target="_blank"
                                            style={{color: '#0F4395'}}>
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={'team-card flex-column'}>
                    <img src={rich} alt={'rich'} className={'team-pic'}/>
                    <div className={'team-card-content'}>
                        <div className={'slightly-bolder'}>Rich</div>
                        <div className={'flex-row wrap'}>
                            <div className={'small-font'}>Purveyor of Memes</div>
                            <span className={'flex-spacer'}></span>
                            {/*<Tooltip title="Telegram" enterDelay={600}>*/}
                            {/*    <IconButton aria-label="Telegram" href="https://discordapp.com/users/210771747094396928" target="_blank"*/}
                            {/*                style={{color: '#0F4395'}}>*/}
                            {/*        <img src={telegramIcon} alt={'telegram'} height={16} width={16}/>*/}
                            {/*    </IconButton>*/}
                            {/*</Tooltip>*/}
                            <Tooltip title="Discord" enterDelay={600} className={'team-button'}>
                                <IconButton aria-label="Discord" href="https://discordapp.com/users/211198346910498816"
                                            target="_blank"
                                            style={{color: '#0F4395'}}>
                                    <img src={discordIcon} alt={'discord'} height={16} width={16}/>
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TeamGrid
