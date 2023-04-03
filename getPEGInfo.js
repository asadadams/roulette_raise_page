

//const all_contracts = window.roulette;
console.log("ALL_CONTRACTS::",all_contracts)
//const pegcontract = all_contracts.contract

async function getTotalAllocation(){
    try {
       const data = await pegcontract.PEG_TOTAL_ALLOCATION()
        console.log(data)
        return data
    } catch (error) {
        console.log("Error:",error)
    }
}

async function getDistributionPerMilestone(){
    try {
        const data = await pegcontract.TOTAL_PEG_DISTRIBUTION_PER_MILESTONE()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getCurrentPLSMilestone(){
    try {
        const data = await pegcontract.currentPLSMilestone()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getCurrentUSDCMilestone(){
    try {
        const data = await pegcontract.currentUSDCMilestone()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getUserPerMileStone(milestone){
    //lets get user address
    let address = pegcontract.provider.getAddress();

    try {
        let user = await pegcontract.getUserPerMileStone(milestone,address)
        return user;
    } catch (error) {
        console.log(user)
    }

}


async function getTotalUserPEGAllocation(){
    //lets get user address
    let address = pegcontract.provider.getAddress();

    try {
        let alloc = await pegcontract.totalUserPegAllocation(address)
        return alloc;
    } catch (error) {
        console.log(user)
    }

}

