(self.webpackChunksnowge=self.webpackChunksnowge||[]).push([[917],{3584:function(e,t,a){"use strict";a.d(t,{Y:function(){return r}});var n=a(7294),l={small:"16px",medium:"24px",large:"52px",xLarge:"72px",xxLarge:"96px"};function r(e){var t=e.size,a=e.color,r=l[t]||t,o={width:r,height:r};return a&&(o["--checkmark-fill-color"]=a),n.createElement("svg",{className:"checkmark",xmlns:"http://www.w3.org/2000/svg",style:o,viewBox:"0 0 52 52"},n.createElement("circle",{className:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),n.createElement("path",{className:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}))}r.defaultProps={size:"large"}},9821:function(e,t,a){"use strict";var n=a(7294),l=a(9255);t.Z=function(){return n.createElement("div",{className:"flex-row y-centre x-centre reverse-wrap footer-container"},n.createElement("div",{className:"white-text slightly-bolder copyright"},"© 2021 SnowgeCoin | All rights reserved."),n.createElement("div",{className:"flex-spacer white-text email"},"Contact: admin@snowgecoin.com"),n.createElement(l.Z,null))}},1357:function(e,t,a){"use strict";var n=a(7294),l=a(5876);t.Z=function(){return n.createElement("div",{className:"snowflakes"},n.createElement("div",{className:"snowflake"},"❅"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:l.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❅"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:l.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❆"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:l.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❄"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:l.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❅"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:l.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❆"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:l.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❄"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:l.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❅"),n.createElement("div",{className:"snowflake"},"❄"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:l.Z,alt:"snowge",className:"snowgeflake"})))}},4847:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return q}});var n=a(7294),l=a(2424),r=(a(9255),a(7329)),o=a(2122),s=(a(5697),a(4131));var i=function(e){var t=function(t){var a=e(t);return t.css?(0,o.Z)({},(0,s.Z)(a,e((0,o.Z)({theme:t.theme},t.css))),function(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}(t.css,[e.filterProps])):a};return t.propTypes={},t.filterProps=["css"].concat((0,r.Z)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=function(e){return t.reduce((function(t,a){var n=a(e);return n?(0,s.Z)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},m=a(6156),d=a(3592);function p(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var f=function(e){var t=e.prop,a=e.cssProperty,n=void 0===a?e.prop:a,l=e.themeKey,r=e.transform,o=function(e){if(null==e[t])return null;var a=e[t],o=p(e.theme,l)||{};return(0,d.k)(e,a,(function(e){var t;return"function"==typeof o?t=o(e):Array.isArray(o)?t=o[e]||e:(t=p(o,e)||e,r&&(t=r(t))),!1===n?t:(0,m.Z)({},n,t)}))};return o.propTypes={},o.filterProps=[t],o};function w(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var u=c(f({prop:"border",themeKey:"borders",transform:w}),f({prop:"borderTop",themeKey:"borders",transform:w}),f({prop:"borderRight",themeKey:"borders",transform:w}),f({prop:"borderBottom",themeKey:"borders",transform:w}),f({prop:"borderLeft",themeKey:"borders",transform:w}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),v=c(f({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),E=c(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),h=c(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),N=c(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),g=c(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=f({prop:"boxShadow",themeKey:"shadows"});function x(e){return e<=1?"".concat(100*e,"%"):e}var b=f({prop:"width",transform:x}),k=f({prop:"maxWidth",transform:x}),S=f({prop:"minWidth",transform:x}),C=f({prop:"height",transform:x}),T=f({prop:"maxHeight",transform:x}),M=f({prop:"minHeight",transform:x}),P=(f({prop:"size",cssProperty:"width",transform:x}),f({prop:"size",cssProperty:"height",transform:x}),c(b,k,S,C,T,M,f({prop:"boxSizing"}))),F=a(5408),Z=c(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),A=a(1253),z=a(5505),D=a(5706),B=a.n(D),I=a(2847);function L(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}var O=a(5191),Y=function(e){var t=function(e){return function(t){var a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=l.name,s=(0,A.Z)(l,["name"]),i=r,c="function"==typeof t?function(e){return{root:function(a){return t((0,o.Z)({theme:e},a))}}}:{root:t},m=(0,I.Z)(c,(0,o.Z)({Component:e,name:r||e.displayName,classNamePrefix:i},s));t.filterProps&&(a=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var d=n.forwardRef((function(t,l){var r=t.children,s=t.className,i=t.clone,c=t.component,d=(0,A.Z)(t,["children","className","clone","component"]),p=m(t),f=(0,z.Z)(p.root,s),w=d;if(a&&(w=L(w,a)),i)return n.cloneElement(r,(0,o.Z)({className:(0,z.Z)(r.props.className,f)},w));if("function"==typeof r)return r((0,o.Z)({className:f},w));var u=c||e;return n.createElement(u,(0,o.Z)({ref:l,className:f},w),r)}));return B()(d,e),d}}(e);return function(e,a){return t(e,(0,o.Z)({defaultTheme:O.Z},a))}},G=i(c(u,v,E,h,N,g,y,P,F.Z,Z)),K=Y("div")(G,{name:"MuiBox"}),R=(a(8902),a(3584));var W=function(){var e,t=(0,n.useState)(2),a=t[0],l=t[1];return(0,n.useEffect)((function(){}),[a]),n.createElement("div",{className:"roadmap-container"},n.createElement("div",{className:"roadmap-title slightly-bolder margin-bottom"},"Roadmap"),n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"flex-row x-centre roadnav-container"},n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node pointer flex-row y-centre x-centre passed "+(1===a?"active-node":""),onClick:function(){return l(1)}},n.createElement("span",{className:"small-font white-text"},"Q1")),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link passed"}),n.createElement("div",{className:"node-path full"}))),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node pointer flex-row y-centre x-centre passed "+(2===a?"active-node":""),onClick:function(){return l(2)}},n.createElement("span",{className:"small-font white-text"},"Q2")),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link passed"}),n.createElement("div",{className:"node-path on-the-way"}))),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node pointer flex-row y-centre x-centre "+(3===a?"active-node white-text":""),onClick:function(){return l(3)}},n.createElement("span",{className:"small-font"},"Q3")),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node-path"}))),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node pointer flex-row y-centre x-centre "+(4===a?"active-node white-text":""),onClick:function(){return l(4)}},n.createElement("span",{className:"small-font"},"Q4")))),n.createElement(K,{className:"info-card flex-column"},0===(e=a)?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 1 - 2021"),n.createElement("div",{className:"flex-row x-centre"},"Chill dude, Snowge Mcfloofy wasn't even born yet..")):1===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 1 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"Snowge Pre Sale")),n.createElement("div",{className:"milestone-content flex-row wrap"},"HUGE SUCCESS! MUCH WOW! Our presale sold out in under 3 minutes.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 2"),n.createElement("span",null," - "),n.createElement("div",null,"Fair Launch on PancakeSwap")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Even though we had to move our launch forward about 24 hours it was an overall success in terms of demand. During this period we came across an issue with safemoon forks that allows them to rug you poor folk. As a team we decided to nuke this and save our fellow floofs. ",n.createElement("strong",null,"Community over greed, always"),".")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 3"),n.createElement("span",null," - "),n.createElement("div",null,"Meme Contest + Airdrops")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Snowge doesn't belong to anyone. It belongs to all of us. So far, we've had one meme contest and three airdrops! Wow!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 4"),n.createElement("span",null," - "),n.createElement("div",null,"TechRate Audit")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Your safety comes first! ",n.createElement("a",{href:"https://snowge.s3.amazonaws.com/Snowge+Coin(1).pdf",target:"_blank"}," Passed ")," with Floofy Colors.")))):2===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 2 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"CoinsBit Listing")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Complete - CoinsBit funds were raised and paid for, and trading began on 4/30 with BTC, ETH, and USDT pairs.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 2"),n.createElement("span",null," - "),n.createElement("div",null,"NFTs")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Stage 1 Complete - Plenty to do in terms of NFTs! Our first batch of SnowgeCoin NFTs has been minted and sent out to the dev team and a few lucky donators. Expect more on this front very soon, we can't wait to show y'all what our artists have been working on! Check out the NFT section of the website for more details.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 3"),n.createElement("span",null," - "),n.createElement("div",null,"Snowge Gaming")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Stage 1 Complete - A community led effort has sprung up to launch the Snowge Gaming channel on Twitch - Snowge Gaming hopes to become a force in the e-sports world! We stream live on twitch most days of the week.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 4"),n.createElement("span",null," - "),n.createElement("div",null,"CMC, CG, and Blockfolio Listing")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Complete - Spreading the word one website at a time. So far, we've been listed on Blockfolio, BSCScan, Delta, CoinRanking, LiveCoinWatch, CoinGecko, CoinMarketCap, and countless other sites. Pick your favorite!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 5"),n.createElement("span",null," - "),n.createElement("div",null,"IndaSwap Listing")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Complete - Initial Liquidity has been provided to IndaSwap via a multi-sig wallet, and users can now buy SnowgeCoin directly with fiat on ",n.createElement("a",{href:"indaswap.com"}," IndaSwap!"))),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 6"),n.createElement("span",null," - "),n.createElement("div",null,"Website Upgrades")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Complete - so far we've added teams, how to buy, audits, this roadmap, about, an NFT showcase, web3 connectivity, and there's plenty more to come!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 7"),n.createElement("span",null," - "),n.createElement("div",null,"Partnerships")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Complete - So far: We are a launch partner on IndaCoin's DeFi Platform, IndaSwap; we've had an rocket league tournament with HOGE, POODL, and PIT (The Defi Dog Invitational), we've had a meme contest with NCAT, we've listed 15 tokens on SnowgeSwap, and we've got upcoming plans with tons more tokens with similar goals as ourselves!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"in-progress milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 8"),n.createElement("span",null," - "),n.createElement("div",null,"Charitable Donation Fund")),n.createElement("div",{className:"milestone-content flex-row wrap"},"In Progress - Saving the floofs is one of our highest priorities. Our current plans include NFT-incentivized donations along with a DAO to decide where the money goes. Check out our floofypaper for more details!")))):3===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 3 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"5000 Holder Celebration Giveaway!")),n.createElement("div",{className:"milestone-content flex-row wrap"},"A celebration of our floofy holders - we're giving away free $SNOWGE for participating in our gleam contest. Check our Twitter for details!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 2"),n.createElement("span",null," - "),n.createElement("div",null,"SnowgeSwap Launch (PCS V1)")),n.createElement("div",{className:"milestone-content flex-row wrap"}," The launch of the floofiest dex on the Binance Smart Chain - check out ",n.createElement("a",{href:"https://snowgecoin.com/swap"}," SnowgeSwap!")," SnowgeSwap V1 was designed as a PancakeSwap alternative, due the fact that PancakeSwap was needlessly phasing out their V1 liquidity pools. Many other tokens have jumped on board as well, and SnowgeSwap is a huge part of our future plans.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 3"),n.createElement("span",null," - "),n.createElement("div",null,"Harmony ONE bridge")),n.createElement("div",{className:"milestone-content flex-row wrap"},"bscSnowge is now available to purchase on ViperSwap!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 4"),n.createElement("span",null," - "),n.createElement("div",null,"Telegram PriceBot Ads")),n.createElement("div",{className:"milestone-content flex-row wrap"},"We have worked with AchTools in order to provide a year's worth of price bot advertisements, ensuring visibility to the many users of the popular telegram price checking bot!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"milestone-complete"},n.createElement(R.Y,{size:"small",color:"#3C8980"})),n.createElement("div",{className:"slightly-bolder"},"Milestone 5"),n.createElement("span",null," - "),n.createElement("div",null,"Dessert Finance Audit")),n.createElement("div",{className:"milestone-content flex-row wrap"},"The sweetest, floofiest audit you'll ever see. Dessert Finance and SnowgeSwap will be entering a long-term partnership going forward, with combination listing/auditing packages beneficial to everyone!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"in-progress milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 6"),n.createElement("span",null," - "),n.createElement("div",null,"Onboarding SnowgeSwap Partners")),n.createElement("div",{className:"milestone-content flex-row wrap"},"New partners are being added regularly, including Laika Protocol, Dessert Finance, AchTools, MoonStar, Tardigrades, AquaGoat, NCAT, Bingus, bShiba, Milk & Butter, ComfyToken, Tsuki DAO, and Feta!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"in-progress milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 7"),n.createElement("span",null," - "),n.createElement("div",null,"Defi Dog Invitational, Round 2")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Round 2 of the DeFi Dog Invitational, featuring 11 incredible tokens! Check out our twitter or HogeGaming's for details.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 8"),n.createElement("span",null," - "),n.createElement("div",null,"SnowgeSwap Launch (Polygon Snowge-LP)")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Not only is SnowgeSwap going cross chain, it is also going to start using its own liquidity pools & AMM! This sets the stage for SnowgeSwap to become a bigger dApp, and will allow us to add yield farming in the future.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 9"),n.createElement("span",null," - "),n.createElement("div",null,"PolySnowge Launch (Name TBD)")),n.createElement("div",{className:"milestone-content flex-row wrap"},"SnowgeCoin is going cross-chain once more - this time with a relaunched contract on the Polygon Network, with liquidity on our very own SnowgeSwap! Details to come soon - this new contract will feature exciting new tokenomics, and will support our mission of saving the floofs. Active development will continue on both chains. Ownership will be given to our team's shared multi-signature wallet, and retained in order to make sure that specific farming/NFT/marketplace/charity related addresses can be whitelisted from fees as required. Relaunch details TBA.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 10"),n.createElement("span",null," - "),n.createElement("div",null,"SnowgeSwap Launch (BSC Snowge-LP)")),n.createElement("div",{className:"milestone-content flex-row wrap"},"SnowgeSwap will begin to support not only Cake-LP from PancakeSwap V1, but will be expanded to utilize our very own SnowgeRouter and AMM on BSC in addition to Polygon. This allows us to list newer tokens as well, instead of being restricted to tokens with V1 liquidity.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 11"),n.createElement("span",null," - "),n.createElement("div",null,"IndaSwap Fiat Launch (USA)")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Our floofers can now buy SnowgeCoin directly with fiat, and IndaSwap plans to bring this capability to USA residents by the end of the summer!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 12"),n.createElement("span",null," - "),n.createElement("div",null,"SnowgeFlake Farms")),n.createElement("div",{className:"milestone-content flex-row wrap"},"SnowgeCoin Yield Farming, utilizing the new SnowgeFlake token as rewards. What more is there to say, really? Details coming closer to date.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 13"),n.createElement("span",null," - "),n.createElement("div",null,"FloofyNFTs")),n.createElement("div",{className:"milestone-content flex-row wrap"},"There's a lot of work to be done here, but the FloofyNFT platform aims to be launched in Q3, allowing users to buy FloofyNFTs and pet them/dress them/take care of them in order to keep them happy. Read more on our FloofyPaper!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 14"),n.createElement("span",null," - "),n.createElement("div",null,"Snowge NFT Marketplace")),n.createElement("div",{className:"milestone-content flex-row wrap"},"A revamped NFT marketplace, where users can buy and sell their NFTs while providing a portion of each sale directly to dog charities.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 15"),n.createElement("span",null," - "),n.createElement("div",null,"Snowge NFT Trading Cards")),n.createElement("div",{className:"milestone-content flex-row wrap"},"These floofs are already underway, all I can spoil is that they will be ",n.createElement("i",null," *italian chef kiss*.")," Take a look at the very first one on our NFTs page, or peek the series 1 NFT's on Discord!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 16"),n.createElement("span",null," - "),n.createElement("div",null,"Physical Token Backing")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Can't show our hand too much here...but this will be ",n.createElement("i",null," exclusive ")," to SnowgeCoin holders!"))))):4===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 4 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"SnowgeCoin Merch")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Floofy Socks, Floofy Shirts, Floofy Gear. Floof up your life!"))),n.createElement("div",{className:"flex-row x-centre fade-animation bold"},"Stay tuned - more Snowges to come!")):void 0)))},H=a(1357),Q=a(9821),q=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];return n.createElement("div",{className:"app-background flex-column scrollbar home-banner"},t&&n.createElement(H.Z,null),n.createElement(l.Z,{toggleSnow:function(){return a(!t)}}),n.createElement("div",{className:"flex-row x-centre home-div"},n.createElement(W,null)),n.createElement("span",{className:"flex-spacer"}),n.createElement(Q.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-roadmap-js-de57417f22901e06cfaf.js.map