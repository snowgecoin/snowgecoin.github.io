(self.webpackChunksnowge=self.webpackChunksnowge||[]).push([[917],{9821:function(e,t,a){"use strict";var n=a(7294),r=a(9255);t.Z=function(){return n.createElement("div",{className:"flex-row y-centre x-centre reverse-wrap footer-container"},n.createElement("div",{className:"white-text slightly-bolder copyright"},"© 2021 SnowgeCoin | All rights reserved."),n.createElement("div",{className:"flex-spacer white-text email"},"Contact: admin@snowgecoin.com"),n.createElement(r.Z,null))}},1357:function(e,t,a){"use strict";var n=a(7294),r=a(5876);t.Z=function(){return n.createElement("div",{className:"snowflakes"},n.createElement("div",{className:"snowflake"},"❅"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:r.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❅"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:r.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❆"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:r.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❄"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:r.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❅"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:r.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❆"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:r.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❄"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:r.Z,alt:"snowge",className:"snowgeflake"})),n.createElement("div",{className:"snowflake"},"❅"),n.createElement("div",{className:"snowflake"},"❄"),n.createElement("div",{className:"snowflake"},n.createElement("img",{src:r.Z,alt:"snowge",className:"snowgeflake"})))}},4847:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var n=a(7294),r=a(2424),l=(a(9255),a(7329)),o=a(2122),s=(a(5697),a(4131));var c=function(e){var t=function(t){var a=e(t);return t.css?(0,o.Z)({},(0,s.Z)(a,e((0,o.Z)({theme:t.theme},t.css))),function(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}(t.css,[e.filterProps])):a};return t.propTypes={},t.filterProps=["css"].concat((0,l.Z)(e.filterProps)),t};var i=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=function(e){return t.reduce((function(t,a){var n=a(e);return n?(0,s.Z)(t,n):t}),{})};return n.propTypes={},n.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),n},m=a(6156),d=a(3592);function p(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var f=function(e){var t=e.prop,a=e.cssProperty,n=void 0===a?e.prop:a,r=e.themeKey,l=e.transform,o=function(e){if(null==e[t])return null;var a=e[t],o=p(e.theme,r)||{};return(0,d.k)(e,a,(function(e){var t;return"function"==typeof o?t=o(e):Array.isArray(o)?t=o[e]||e:(t=p(o,e)||e,l&&(t=l(t))),!1===n?t:(0,m.Z)({},n,t)}))};return o.propTypes={},o.filterProps=[t],o};function u(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var v=i(f({prop:"border",themeKey:"borders",transform:u}),f({prop:"borderTop",themeKey:"borders",transform:u}),f({prop:"borderRight",themeKey:"borders",transform:u}),f({prop:"borderBottom",themeKey:"borders",transform:u}),f({prop:"borderLeft",themeKey:"borders",transform:u}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),w=i(f({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),E=i(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),h=i(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),N=i(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),g=i(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=f({prop:"boxShadow",themeKey:"shadows"});function x(e){return e<=1?"".concat(100*e,"%"):e}var b=f({prop:"width",transform:x}),k=f({prop:"maxWidth",transform:x}),C=f({prop:"minWidth",transform:x}),S=f({prop:"height",transform:x}),Z=f({prop:"maxHeight",transform:x}),P=f({prop:"minHeight",transform:x}),T=(f({prop:"size",cssProperty:"width",transform:x}),f({prop:"size",cssProperty:"height",transform:x}),i(b,k,C,S,Z,P,f({prop:"boxSizing"}))),M=a(5408),I=i(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),K=a(1253),A=a(5505),F=a(5706),O=a.n(F),G=a(8518);function W(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}var R=a(8102),D=function(e){var t=function(e){return function(t){var a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=r.name,s=(0,K.Z)(r,["name"]),c=l,i="function"==typeof t?function(e){return{root:function(a){return t((0,o.Z)({theme:e},a))}}}:{root:t},m=(0,G.Z)(i,(0,o.Z)({Component:e,name:l||e.displayName,classNamePrefix:c},s));t.filterProps&&(a=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var d=n.forwardRef((function(t,r){var l=t.children,s=t.className,c=t.clone,i=t.component,d=(0,K.Z)(t,["children","className","clone","component"]),p=m(t),f=(0,A.Z)(p.root,s),u=d;if(a&&(u=W(u,a)),c)return n.cloneElement(l,(0,o.Z)({className:(0,A.Z)(l.props.className,f)},u));if("function"==typeof l)return l((0,o.Z)({className:f},u));var v=i||e;return n.createElement(v,(0,o.Z)({ref:r,className:f},u),l)}));return O()(d,e),d}}(e);return function(e,a){return t(e,(0,o.Z)({defaultTheme:R.Z},a))}},Q=c(i(v,w,E,h,N,g,y,T,M.Z,I)),z=D("div")(Q,{name:"MuiBox"});var B=function(){var e,t=(0,n.useState)(1),a=t[0],r=t[1];return(0,n.useEffect)((function(){}),[a]),n.createElement("div",{className:"roadmap-container"},n.createElement("div",{className:"about-title slightly-bolder margin-bottom"},"Roadmap"),n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"flex-row x-centre roadnav-container"},n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node pointer flex-row y-centre x-centre passed "+(1===a?"active-node":""),onClick:function(){return r(1)}},n.createElement("span",{className:"small-font white-text"},"Q1")),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link passed"}),n.createElement("div",{className:"node-path on-the-way"}))),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node pointer flex-row y-centre x-centre "+(2===a?"active-node white-text":""),onClick:function(){return r(2)}},n.createElement("span",{className:"small-font"},"Q2")),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node-path"}))),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node pointer flex-row y-centre x-centre "+(3===a?"active-node white-text":""),onClick:function(){return r(3)}},n.createElement("span",{className:"small-font"},"Q3")),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node-path"}))),n.createElement("div",{className:"node-container flex-row y-centre"},n.createElement("div",{className:"node-link"}),n.createElement("div",{className:"node pointer flex-row y-centre x-centre "+(4===a?"active-node white-text":""),onClick:function(){return r(4)}},n.createElement("span",{className:"small-font"},"Q4")))),n.createElement(z,{className:"info-card flex-column"},0===(e=a)?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 1 - 2021"),n.createElement("div",{className:"flex-row x-centre"},"Chill dude, Snowge Mcfloofy wasn't even born yet..")):1===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 1 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"Snowge Pre Sale")),n.createElement("div",{className:"milestone-content flex-row wrap"},"HUGE SUCCESS! MUCH WOW! Our presale sold out in under 3 minutes.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 2"),n.createElement("span",null," - "),n.createElement("div",null,"Fair Launch on PancakeSwap")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Even though we had to move our launch forward about 24 hours it was an overall success in terms of demand. During this period we came across an issue with safemoon forks that allows them to rug you poor folk. As a team we decided to nuke this and save our fellow floofs. ",n.createElement("strong",null,"Community over greed, always"),".")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 3"),n.createElement("span",null," - "),n.createElement("div",null,"Meme Contest + Airdrops")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Snowge doesn't belong to anyone. It belongs to all of us. So far, we've had one meme contest and three airdrops! Wow!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 4"),n.createElement("span",null," - "),n.createElement("div",null,"TechRate Audit")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Your safety comes first! ",n.createElement("a",{href:"https://snowge.s3.amazonaws.com/Snowge+Coin(1).pdf",target:"_blank"}," Passed ")," with Floofy Colors.")))):2===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 2 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"CMC, CG, and Blockfolio Listing")),n.createElement("div",{className:"milestone-content flex-row wrap"},"In Progress - Spreading the word one website at a time. So far, we've been listed on Blockfolio, BSCScan, and Delta, CoinRanking, and LiveCoinWatch - CoinMarketCap and CoinGecko have been applied for.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 2"),n.createElement("span",null," - "),n.createElement("div",null,"Website Upgrades")),n.createElement("div",{className:"milestone-content flex-row wrap"},"In Progress - so far we've added teams, how to buy, audits, this roadmap, about, an NFT showcase, web3 connectivity, and there's plenty more to come!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 3"),n.createElement("span",null," - "),n.createElement("div",null,"CEX Listings (Very Soon!)")),n.createElement("div",{className:"milestone-content flex-row wrap"},"In Progress - CoinsBit funds were raised and paid for, and trading will begin on 4/30! In addition, we are expecting to go live on IndaSwap soon!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 4"),n.createElement("span",null," - "),n.createElement("div",null,"Charitable Donation Fund")),n.createElement("div",{className:"milestone-content flex-row wrap"},"In Progress - Saving the floofs is one of our highest priorities. Our current plans include NFT-incentivized donations along with a DAO to decide where the money goes.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 5"),n.createElement("span",null," - "),n.createElement("div",null,"Partnerships")),n.createElement("div",{className:"milestone-content flex-row wrap"},"In Progress - So far: We'll be a launch partner on IndaCoin's DeFi Platform, IndaSwap; we've had an rocket league tournament with HOGE, POODL, and PIT (The Defi Dog Invitational), and we've got upcoming plans with a few other tokens with similar goals as ourselves!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 6"),n.createElement("span",null," - "),n.createElement("div",null,"NFTs")),n.createElement("div",{className:"milestone-content flex-row wrap"},"In Progress - Plenty to do in terms of NFTs! Our first batch of SnowgeCoin NFTs has been minted and sent out to the dev team and a few lucky donators. Expect more on this front very soon, we can't wait to show y'all what our artists have been working on! Check out the NFT section of the website for more details.")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 7"),n.createElement("span",null," - "),n.createElement("div",null,"Snowge Gaming")),n.createElement("div",{className:"milestone-content flex-row wrap"},"In Progress - A community led effort has sprung up to launch the Snowge Gaming channel on Twitch - Snowge Gaming hopes to become a force in the e-sports world! We stream live on twitch most days of the week.")))):3===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 3 - 2021"),n.createElement("div",{className:"card-info-container flex-column"},n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 1"),n.createElement("span",null," - "),n.createElement("div",null,"Snowge NFT Trading Cards")),n.createElement("div",{className:"milestone-content flex-row wrap"},"These floofs are already underway, all I can spoil is that they will be ",n.createElement("i",null," italian chef kiss"),". Take a look at the very first one on our NFTs page!")),n.createElement("div",{className:"milestone-container fade-animation"},n.createElement("div",{className:"flex-row y-centre wrap milestone-header"},n.createElement("div",{className:"not-passed milestone-complete"}),n.createElement("div",{className:"slightly-bolder"},"Milestone 2"),n.createElement("span",null," - "),n.createElement("div",null,"Physical Token Backing")),n.createElement("div",{className:"milestone-content flex-row wrap"},"Can't show our hand too much here...but this will be ",n.createElement("i",null," exclusive ")," to SnowgeCoin holders! More details coming soon!"))))):4===e?n.createElement("div",{className:"flex-column"},n.createElement("div",{className:"card-header-combo"},"Quarter 4 - 2021"),n.createElement("div",{className:"flex-row x-centre fade-animation"},"Stay tuned - more Snowges to come!")):void 0)))},H=a(1357),L=a(9821),j=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];return n.createElement("div",{className:"app-background flex-column scrollbar home-banner"},t&&n.createElement(H.Z,null),n.createElement(r.Z,{toggleSnow:function(){return a(!t)}}),n.createElement("div",{className:"flex-row x-centre home-div"},n.createElement(B,null)),n.createElement("span",{className:"flex-spacer"}),n.createElement(L.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-roadmap-js-aebdaa39d40afa949f4e.js.map