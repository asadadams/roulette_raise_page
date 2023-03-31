// this script is to be used after the page has loaded and the contract is initialized
// in the window.reoulette object

//also the ethers library has to be imported already


//this script is for making contributions

const {pls_contract,usdc_contract} = window.roulette;


async function makeContributionPLS(amount){
    try {
    
            let estimatedGas;
            try {
                estimatedGas = pls_contract.estimateGas.donate(ethers.utils.parseUnits(amount.toString(), 18))
            } catch (error) {
                estimateGas = 3e6
            }

            try {
                const tx = await pls_contract.getAllUsersPerMilestone( ethers.utils.parseUnits(amount.toString(), 18),{gasLimit:estimatedGas.toNumber() + 1e4})
                let reciept = await tx.wait()
                console.log(reciept);
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
                estimatedGas = usdc_contract.estimateGas.donate(ethers.utils.parseUnits(amount.toString(), 18))
            } catch (error) {
                estimateGas = 3e6
            }

            try {
                const tx = await usdc_contract.getAllUsersPerMilestone( ethers.utils.parseUnits(amount.toString(), 18),{gasLimit:estimatedGas.toNumber() + 1e4})
                let reciept = await tx.wait()
                console.log(reciept);
            } catch (error) {
                console.log(error);
            }
        
    } catch (error) {
        console.log(error)
    }
}