var provider = null;
var signer = null;
var current_account = '';

if (typeof window.ethereum !== 'undefined') {
   provider = new ethers.providers.Web3Provider(window.ethereum,"any");
   signer = provider.getSigner();
}else{
    alert("Please install Metamask")
}

const networks={
    42161:{
    chainId: `0x${Number(42161).toString(16)}`,
    rpcUrls: ["https://arbitrum-mainnet.infura.io/"],
    chainName: "Arbitrium One",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18
    },
    blockExplorerUrls: ["https://explorer.arbitrum.io"]
    }
}

async function connectWallet(){
    const connector_key='connector'

  
        console.log('MetaMask is installed!');
     
        const signer = await provider.getSigner()
        //initiate connection to wallet
        let accounts = await provider.send("eth_requestAccounts", []);
        current_account = accounts[0];
        //after connection lets store connector state to localStorage
        localStorage.setItem(connector_key,JSON.stringify({isConnected:true}))

        const {name,chainId} = await provider.getNetwork();


        if(chainId != 42161){
            //  alert("Please switch your network to Arbitrium")
            //  return
            console.log(networks['42161'].chainId)
            await provider.send(
                "wallet_switchEthereumChain",
                [{ chainId: networks['42161'].chainId }]
            );
         }

        provider.on('accountsChanged', function (accounts) {
            account = accounts[0];
            console.log(address); // Print new address
        });

        provider.on('chainChanged',function(chain){
            console.log(chain)
        })

    

}

window.onload = ()=>{
    let state = localStorage.getItem("connector")
    state = JSON.parse(state)
    console.log(state)
    if(state.isConnected){
        connectWallet()
    }
}


async function disconnect(){
    const connector_key='connector'

    // Revoke * authorization for the Dapp
   // await provider.send('wallet_requestPermissions', [{ eth_accounts: {} }]);

    localStorage.setItem(connector_key,JSON.stringify({isConnected:false}))
    window.location.reload()
}

async function getBalance(){
   
    const balance = await provider.getBalance(current_account)
    let formattedBalance = ethers.utils.formatUnits(balance, 6)
    
    console.log(formattedBalance)
    return formattedBalance;
}
