

const {contract} = window.roulette;

async function getTotalAllocation(){
    try {
        const data = await contract.PEG_TOTAL_ALLOCATION
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function getDistributionPerMilestone(){
    try {
        const data = await contract.TOTAL_PEG_DISTRIBUTION_PER_MILESTONE
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function getCurrentPLSMilestone(){
    try {
        const data = await contract.currentPLSMilestone
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function getCurrentPLSMilestone(){
    try {
        const data = await contract.currentUSDCMilestone
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}