// this script is to be used after the page has loaded and the contract is initialized
// in the window.reoulette object

//also the ethers library has to be imported already

const {contract} = window.roulette;

async function getContributions(){
//lets loop through so that we can get contributions for all milestones
try {
    //array to keep all the contributions data
    let contributions = [];
    for(let i=1;i<10;i++){
        //make call to the contract function to get all contributions
        let estimatedGas;
        try {
            estimatedGas = await contract.estimateGas.getAllUsersPerMilestone(i)
        } catch (error) {
            estimateGas = 3e6
        }

        try {
            const data = await contract.getAllUsersPerMilestone(i,{gasLimit:estimatedGas.toNumber() + 1e4})
            contributions.push(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
} catch (error) {
    console.log(error)
}
}