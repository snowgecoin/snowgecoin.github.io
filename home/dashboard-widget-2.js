(() => {
  let loadDashboard = () => {
    jQuery(document).ready(() => {
      console.log('dashboard-widget-starting');
      let activeSupplyElement = jQuery('#activeSupply');
      let activeBurnElement = jQuery('#activeBurn');
      //let distributedTokensElement = jQuery('#distributedTokens');
      //let tokensInLPElement = jQuery('#tokensInLP');
      let marketCapElement = jQuery('#marketCap');
      let currentPriceElement = jQuery('#currentPrice');
      let totalHoldersElement = jQuery('#totalHolders');
      //let transactionsElement = jQuery('#transactions');

      let holdersRefreshRate = 1000 * 60 * 15;
      let priceRefreshRate = 1000 * 60;
      let web3RefreshRate = 1000 * 60 * 5;

      // this is the token address not the pair address
      let contractAddress = '0x5E9280d53F28281Ce098C8F64e49F5f5DC9Ea185';
      // this is the wallet that holds the coins
      let exchangeWalletAddress = '0x9781dbe0786e763ee15ad6ffd8157f0db8a0f985';
      // this is the address for pancake factory
      let masterChefAddress = '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F';
      // this is the liquidity
      let WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
      // this is the stable coin to be covnerted to as price reference
      let BUSD = '0xe9e7cea3dedca5984780bafc599bd69add087d56';

      let totalCirculatingSupply;
      let contractObject;
      let tokenDecimals;
      let factoryContract;
      let webSocketInstance;

      let factoryAbi = [
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'amountIn',
              type: 'uint256',
            },
            {
              internalType: 'address[]',
              name: 'path',
              type: 'address[]',
            },
          ],
          name: 'getAmountsOut',
          outputs: [
            {
              internalType: 'uint256[]',
              name: 'amounts',
              type: 'uint256[]',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ];
      let statsAbi = [
        {
          inputs: [],
          name: 'totalFees',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'totalSupply',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'decimals',
          outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
          name: 'balanceOf',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
      ];

      let getERC20TokenBalance = async (walletAddress) => {
        const balance = await contractObject.methods.balanceOf(walletAddress).call();
        const fbalance = BigNumber(balance)
          .div(10 ** tokenDecimals)
          .toNumber();
        return fbalance;
      };

      let getUnsoldTokens = async () => {
        return await getERC20TokenBalance(exchangeWalletAddress);
      };

      let getTotalFees = async () => {
        const fees = await contractObject.methods.totalFees().call();
        const ffees = BigNumber(fees)
          .div(10 ** tokenDecimals)
          .toNumber();
        return ffees;
      };

      let getSupply = async () => {
        const supply = await contractObject.methods.totalSupply().call();
        const fsupply = BigNumber(supply)
          .div(10 ** tokenDecimals)
          .toNumber();
        return fsupply;
      };

      let getBurn = async () => {
        const burn = await contractObject.methods.balanceOf('0x000000000000000000000000000000000000dead').call();
        const fburn = BigNumber(burn)
          .div(10 ** tokenDecimals)
          .toNumber();
        return fburn;
      };

      let getPriceData = async (addresses, decimals) => {
        let realPrice = null;

        const result1 = await factoryContract.methods.getAmountsOut(new BigNumber((10 ** decimals).toString()).toString(), addresses).call();

        // safe to hard code 18 because BNB is 18 so it doesn't matter what the input token is at that point
        realPrice = new BigNumber(result1[1]).div(10 ** 18).toNumber();

        return realPrice;
      };

      let getPriceDataInterval = async () => {
        let busdQuote = await getPriceData([BUSD, WBNB], 18);
        let tokenQuote = await getPriceData([contractAddress, WBNB], tokenDecimals);
        if (busdQuote && tokenQuote && totalCirculatingSupply) {
            let realPrice = tokenQuote / busdQuote;;
            let marketCap = totalCirculatingSupply * realPrice;
            currentPriceElement.html('$' + realPrice.toFixed(5));
            marketCapElement.html('$' + parseInt(marketCap.toFixed(0)).toLocaleString());
          }
          setTimeout(getPriceDataInterval, priceRefreshRate);
      };

      let getWeb3Data = async () => {
        let totalBurn = parseInt((await getBurn()).toFixed(0));
        totalCirculatingSupply = parseInt(((await getSupply()) - totalBurn).toFixed(0));
        //let distributedTokens = await getTotalFees();
        //let tokensInLp = await getUnsoldTokens();
        activeSupplyElement.html(totalCirculatingSupply.toLocaleString());
        activeBurnElement.html(totalBurn.toLocaleString());
        //distributedTokensElement.html(distributedTokens.toLocaleString());
        //tokensInLPElement.html(tokensInLp.toLocaleString());
        setTimeout(() => {
          getWeb3Data();
        }, web3RefreshRate);
      };

      let makeWebSocketRequest = async (request) => {
        request.id = Math.round(Math.random() * 100000000000);
        const promise = new Promise((resolve) => {
          const requestId = 'result_' + request.id;
          const handler = (result) => {
            webSocketInstance.off(requestId, handler);
            resolve(result);
          };
          webSocketInstance.on(requestId, handler);
        });
        webSocketInstance.emit('query', request);
        const response = await promise;
        return response;
      };

      let getRealTimeHolders = async () => {
        const response = await makeWebSocketRequest({
            address: contractAddress,
            method: 'holders'
          });
          if (response.holders === 0){
            setTimeout(getRealTimeHolders, 2000);
          } else {
            totalHoldersElement.html(response.holders.toLocaleString());

            setTimeout(getRealTimeHolders, holdersRefreshRate);
          }
      };

      /*let getRealTimeTransfers = async () => {
        const response = await makeWebSocketRequest({
          address: contractAddress,
          method: 'transfers'
        });

        transactionsElement.html(response.transfers.toLocaleString());

        setTimeout(getRealTimeTransfers, holdersRefreshRate);
      };*/

      let getHostedData = () => {
        const protocol = 'wss';
        const host = 'bsc-token-tools.com';
        const fqpn = protocol + '://' + host + ':8104/';
        webSocketInstance = io(fqpn);
        getRealTimeHolders();
        //getRealTimeTransfers();
      };

      let setupProviders = async () => {
        if (typeof Web3Eth == "undefined") {
          return setTimeout(setupProviders, 250);
        }
        window['web3'] = new Web3Eth(new Web3HttpProvider('https://bsc-dataseed.binance.org/'));
        contractObject = await new web3.Contract(statsAbi, contractAddress);
        factoryContract = await new web3.Contract(factoryAbi, masterChefAddress);
        tokenDecimals = await contractObject.methods.decimals().call();
        await getWeb3Data();
        getPriceDataInterval();
        getHostedData();
      };

      //setTimeout()
      try {
        setupProviders();
      } catch(err) {
        console.log('damn it richard')
      }
    });
  };

  setTimeout(loadDashboard, 1000);

})();
