// this script is to be used after the page has loaded and the contract is initialized
// in the window.reoulette object

//also the ethers library has to be imported already


//this script is for making contributions

//const {pls_contract,usdc_contract} = window.roulette;
const all_contracts = window.roulette;
//console.log("ALL_CONTRACTS::",all_contracts)
const contract = all_contracts.contract
const signer = all_contracts.signer

console.log("SIGNER:",signer)


async function makeContributionPLS(amount){
    try {
            let estimatedGas;
            try {
                estimatedGas = await signer.estimateGas.donatePLS(ethers.utils.parseUnits(amount.toString(), 18))
            } catch (error) {
                estimateGas = 3e6
            }

            try {
                const tx = await signer.donatePLS( ethers.utils.parseUnits(amount.toString(), 18),{gasLimit:estimatedGas.toNumber() + 1e4})
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
                estimatedGas = await signer.estimateGas.donateUSDC(ethers.utils.parseUnits(amount.toString(), 6))
            } catch (error) {
                estimateGas = 3e6
            }

            try {
                const tx = await signer.donateUSDC(ethers.utils.parseUnits(amount.toString(), 6),{gasLimit:estimatedGas.toNumber() + 1e4})
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