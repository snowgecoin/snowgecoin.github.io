(self.webpackChunksnowge=self.webpackChunksnowge||[]).push([[46],{1046:function(e,t,a){"use strict";a.r(t);var l=a(2137),n=a(7757),s=a.n(n),c=a(7294),o=a(6177),r=a(3332),i=a(3729);a(5414);t.default=function(){var e="0x9c26915Afb65D9e5AEdE981ffA32431d0393058E",t="0x9c26915Afb65D9e5AEdE981ffA32431d0393058E",a="0x2547017a1406963042c4481af1c0e2b85cbf84e6",n="0x2d9447f06ebdd6b26ea45de0d031c737f5f8fa12",m="0x928212ad37e0fdd0c6d84a5ac7b0c37efa17c668",d="0xc2a54b5937f3ba1d81659f1d53eec7fa05cd108e",f=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"}],u=c.useState(localStorage.getItem("account")||""),g=u[0],b=u[1],E=c.useState({}),N=E[0],h=E[1],v=void 0!==window.ethereum;function w(e){return p.apply(this,arguments)}function p(){return(p=(0,l.Z)(s().mark((function t(a){var l,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Starting transaction..."),l=new window.Web3(window.ethereum),console.log(g),n={from:g,to:e,value:a},console.log(n),l.eth.sendTransaction(n,(function(e,t){e?console.log(e):console.log(t)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(e,t){v&&new(new window.Web3(window.ethereum).eth.Contract)(f,t).methods.balanceOf(e).call((function(e,a){if(a){var l=N;return l[t]=a,h(l),a.toString()}return console.log("Error getting remaining NFT balance."),"0"}))}var S=c.useState(""!=g||!1),x=S[0],Z=S[1];return c.useEffect((function(){var e=setInterval((function(){b(localStorage.getItem("account")),Z(""!=localStorage.getItem("account")),x&&(console.log("Checking number of remaining NFTs"),y(t,a),y(t,n),y(t,m),y(t,d),console.log(N))}),1e4);return function(){return clearInterval(e)}}),[]),c.createElement("div",{className:"flex-column nft-grid-container"},c.createElement("div",{className:"nft-grid-title slightly-bolder"},"Snowge NFTs",c.createElement("br",{className:"break"}),c.createElement(r.Z,{href:"#series0",className:"series-button"},"Series 0"),c.createElement(r.Z,{href:"#series1",className:"series-button"},"Series 1")),c.createElement("div",{className:"nft-grid-subtitle slightly-bolder",id:"series0"},"Series 0: Donor Awards!"),c.createElement("div",null,c.createElement("b",null,"Note"),": Purchased NFT Rewards will be sent directly to the purchaser's wallet address within 24-48 hours (typically much sooner)."),c.createElement("div",{className:"flex-row x-centre wrap"},c.createElement("div",{className:"nft-card flex-column"},c.createElement("img",{src:"https://snowge.s3.amazonaws.com/snowgecoin.gif",alt:"SnowgeCoin Gold",className:"nft-pic"}),c.createElement("div",{className:"nft-card-content"},c.createElement("div",{className:"slightly-bolder"},"SnowgeCoinV1 (Gold)"),c.createElement("div",{className:"flex-row wrap"},c.createElement("div",{className:"small-font"},'The very first round of Snowge NFTs, minted for the dev team and 3 lucky donors! These NFT\'s are rare - they are the first to include a beta version of the "pet your floof" functionality.',c.createElement("div",{className:"small-font slightly-bolder up-space"},"Floofyness: 100"),c.createElement("div",{className:"small-font slightly-bolder"},"Artist: BongChild"),c.createElement("div",{className:"small-font slightly-bolder"},"Remaining: ",N[a]||"?")),c.createElement("span",{className:"flex-spacer"}),c.createElement(o.ZP,{title:"Minted",enterDelay:600,className:"mint-button"},c.createElement(i.Z,{"aria-label":"Minted",href:"https://bscscan.com/token/0x2547017a1406963042c4481af1c0e2b85cbf84e6",target:"_blank",style:{color:"#0F4395"}},"16"))),c.createElement("div",{className:"flex-row wrap give-height"},x&&!N[a]&&c.createElement(r.Z,{className:"unavailable-button"},"loading..."),x&&N[a]<=0&&c.createElement(r.Z,{className:"sold-out-button"},"Sold out!"),x&&N[a]>0&&c.createElement(r.Z,{className:"buy-nft-button",onClick:function(){return w(1e18)}},"Purchase"),!x&&c.createElement(r.Z,{className:"unavailable-button"},"Connect Wallet")))),c.createElement("div",{className:"nft-card flex-column"},c.createElement("img",{src:"https://snowge.s3.amazonaws.com/silvercoin.gif",alt:"SnowgeCoin Silver",className:"nft-pic"}),c.createElement("div",{className:"nft-card-content"},c.createElement("div",{className:"slightly-bolder"},"SnowgeCoinV2 (Silver)"),c.createElement("div",{className:"flex-row"},c.createElement("div",{className:"small-font"},'The second round of Snowge NFTs, minted for donors who contribute at least 0.25 BNB or $100 BUSD! These NFT\'s include an upgraded version of the "pet your floof" functionality.',c.createElement("div",{className:"small-font slightly-bolder up-space"},"Floofyness: 25"),c.createElement("div",{className:"small-font slightly-bolder"},"Artist: BongChild"),c.createElement("div",{className:"small-font slightly-bolder"},"Remaining: ",N[n]||"?")),c.createElement("span",{className:"flex-spacer"}),c.createElement(o.ZP,{title:"Minted",enterDelay:600,className:"mint-button"},c.createElement(i.Z,{"aria-label":"Minted",href:"https://bscscan.com/token/0x2d9447f06ebdd6b26ea45de0d031c737f5f8fa12",target:"_blank",style:{color:"#0F4395"}},"32"))),c.createElement("div",{className:"flex-row wrap give-height"},x&&!N[a]&&c.createElement(r.Z,{className:"unavailable-button"},"loading..."),x&&N[n]<=0&&c.createElement(r.Z,{className:"sold-out-button"},"Sold out!"),x&&N[n]>0&&c.createElement(r.Z,{className:"buy-nft-button",onClick:function(){return w(25e16)}},"Purchase"),!x&&c.createElement(r.Z,{className:"unavailable-button"},"Connect Wallet")))),c.createElement("div",{className:"nft-card flex-column"},c.createElement("img",{src:"https://snowge.s3.amazonaws.com/bronzecoin.gif",alt:"SnowgeCoin Bronze",className:"nft-pic"}),c.createElement("div",{className:"nft-card-content"},c.createElement("div",{className:"slightly-bolder"},"SnowgeCoinV2 (Bronze)"),c.createElement("div",{className:"flex-row wrap"},c.createElement("div",{className:"small-font"},'The second round of Snowge NFTs, minted for donors who contribute at least 0.1 BNB or $50 BUSD! These NFT\'s include an upgraded version of the "pet your floof" functionality.',c.createElement("div",{className:"small-font slightly-bolder up-space"},"Floofyness: 10"),c.createElement("div",{className:"small-font slightly-bolder"},"Artist: BongChild"),c.createElement("div",{className:"small-font slightly-bolder"},"Remaining: ",N[m]||"?")),c.createElement("span",{className:"flex-spacer"}),c.createElement(o.ZP,{title:"Minted",enterDelay:600,className:"mint-button"},c.createElement(i.Z,{"aria-label":"Minted",href:"https://bscscan.com/token/0x928212ad37e0fdd0c6d84a5ac7b0c37efa17c668",target:"_blank",style:{color:"#0F4395"}},"64"))),c.createElement("div",{className:"flex-row wrap give-height"},x&&!N[a]&&c.createElement(r.Z,{className:"unavailable-button"},"loading..."),x&&N[m]<=0&&c.createElement(r.Z,{className:"sold-out-button"},"Sold out!"),x&&N[m]>0&&c.createElement(r.Z,{className:"buy-nft-button",onClick:function(){return w(1e17)}},"Purchase"),!x&&c.createElement(r.Z,{className:"unavailable-button"},"Connect Wallet"))))),c.createElement("div",{className:"team-grid-subtitle slightly-bolder",id:"series1"},"Series 1: Limited Edition Snowge Trading Cards!"),c.createElement("div",{className:"flex-row x-centre wrap"},c.createElement("div",{className:"nft-card flex-column"},c.createElement("img",{src:"https://snowge.s3.amazonaws.com/Indagifsmol.gif",alt:"IndaSnowge",className:"nft-pic"}),c.createElement("div",{className:"nft-card-content"},c.createElement("div",{className:"slightly-bolder"},"IndaSnowge"),c.createElement("div",{className:"flex-row wrap"},c.createElement("div",{className:"small-font"},"A limited edition NFT created for the SnowgeCoin + IndaSwap partnership! Only 10 minted. Will be given out as prizes during various SnowgeCoin + IndaSwap marketing events.",c.createElement("div",{className:"small-font slightly-bolder up-space"},"Floofyness: 100"),c.createElement("div",{className:"small-font slightly-bolder"},"Artist: BongChild & Momori"),c.createElement("div",{className:"small-font slightly-bolder"},"Remaining: ",N[d]||"?")),c.createElement("span",{className:"flex-spacer"}),c.createElement(o.ZP,{title:"Minted",enterDelay:600,className:"mint-button"},c.createElement(i.Z,{"aria-label":"Minted",href:"https://bscscan.com/token/0xc2a54b5937f3ba1d81659f1d53eec7fa05cd108e",target:"_blank",style:{color:"#0F4395"}},"10"))),c.createElement("div",{className:"flex-row wrap give-height"},c.createElement(r.Z,{className:"unavailable-button"},"Unavailable"))))))}}}]);
//# sourceMappingURL=46-be5d906bbfcba535828f.js.map