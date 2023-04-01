// this script is to be used after the page has loaded and the contract is initialized
// in the window.reoulette object

//also the ethers library has to be imported already


//this script is for making contributions

//const {pls_contract,usdc_contract} = window.roulette;
//const all_contracts = window.roulette;
//console.log("ALL_CONTRACTS::",all_contracts)
const pls_contract = all_contracts.pls_contract
const usdc_contract = all_contracts.usdc_contract


async function makeContributionPLS(amount){
    try {
    
            let estimatedGas;
            try {
                estimatedGas = await pls_contract.estimateGas.donate(ethers.utils.parseUnits(amount.toString(), 18))
            } catch (error) {
                estimateGas = 3e6
            }

            try {
                const tx = await pls_contract.donate( ethers.utils.parseUnits(amount.toString(), 18),{gasLimit:estimatedGas.toNumber() + 1e4})
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
                estimatedGas = await usdc_contract.estimateGas.donate(ethers.utils.parseUnits(amount.toString(), 6))
            } catch (error) {
                estimateGas = 3e6
            }

            try {
                const tx = await usdc_contract.donate(ethers.utils.parseUnits(amount.toString(), 6),{gasLimit:estimatedGas.toNumber() + 1e4})
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