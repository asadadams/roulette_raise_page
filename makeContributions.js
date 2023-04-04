// this script is to be used after the page has loaded and the contract is initialized
// in the window.reoulette object

//also the ethers library has to be imported already


//this script is for making contributions

//const {pls_contract,usdc_contract} = window.roulette;
// const all_contracts = window.roulette;
// //console.log("ALL_CONTRACTS::",all_contracts)
// const contract = all_contracts.contract
// const signer = all_contracts.signer
const CONTRACT_ADDRESS = "0x38E56fc4Ca17Ba6230b3A62593cAB91CAB78d043";
_contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
console.log("SIGNER:",_contract)


async function makeContributionPLS(amount){
    try {
            let estimatedGas;
            try {
                estimatedGas = await _contract.estimateGas.donatePLS(ethers.utils.parseUnits(amount.toString(), 18))
            } catch (error) {
                estimateGas = 3e6
            }

            try {
                const tx = await _contract.donatePLS( ethers.utils.parseUnits(amount.toString(), 18),{gasLimit:estimatedGas})
                let reciept = await tx.wait()
                console.log(reciept);
                return reciept;
            } catch (error) {
                console.log(error);
            }
        
    } catch (error) {
        console.log(error)
    }
}

async function makeContributionUSDC(amount){
    try {
    
            let estimatedGas;
            try {
                estimatedGas = await _contract.estimateGas.donateUSDC(ethers.utils.parseUnits(amount.toString(), 6))
            } catch (error) {
                estimateGas = 3e6
            }

            try {
                const tx = await _contract.donateUSDC(ethers.utils.parseUnits(amount.toString(), 6),{gasLimit:estimatedGas})
                let reciept = await tx.wait()
                console.log(reciept);
                return reciept;
            } catch (error) {
                console.log(error);
            }
        
    } catch (error) {
        console.log(error)
    }
}