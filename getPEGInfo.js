

const all_contracts = window.roulette;
console.log("ALL_CONTRACTS::",all_contracts)
const pegcontract = all_contracts.contract

function getTotalAllocation(){
    try {
       const data = pegcontract.PEG_TOTAL_ALLOCATION()
        console.log(data)
    } catch (error) {
        console.log("Error:",error)
    }
}

async function getDistributionPerMilestone(){
    try {
        const data = await pegcontract.TOTAL_PEG_DISTRIBUTION_PER_MILESTONE()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function getCurrentPLSMilestone(){
    try {
        const data = await pegcontract.currentPLSMilestone()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function getCurrentPLSMilestone(){
    try {
        const data = await pegcontract.currentUSDCMilestone()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}