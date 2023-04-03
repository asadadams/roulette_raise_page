

//const all_contracts = window.roulette;
console.log("ALL_CONTRACTS::",all_contracts)


//returns the user details 
// struct User {
//     address user;
//     uint256 plsDonations;
//     uint256 usdcOfPlsDonations;
//     uint256 usdcDonations;
// }
async function getUserDetails(){
    try {
        //lets get user address
       let address = contract.provider.getAddress();
       const data = await contract.getUserDetails(address)
        console.log(data)
        return data
    } catch (error) {
        console.log("Error:",error)
    }
}

//returns current milestone eg 1
async function getCurrentMilestone(){
    try {
        const data = await contract.currentMilestone()
        console.log(data)
        return data.toNumber();
    } catch (error) {
        console.log(error)
    }
}

//returns the milestone details (level details)
// struct Milestone {
//     uint256 priceOfPeg;
//     uint256 usdcRaised; ///@dev usdc raised through usdc donations
//     uint256 usdcOfPlsRaised; ///@dev amount of usdc raised through pls donations
//     uint256 plsRaised; ///@dev number of pls tokens donated
//     uint256 targetAmount; ///@dev total amount of usdc to raise
//     uint256 totalUSDCRaised; ///@dev amount of usdc raised through both usdc and pls donations
//     uint8 milestoneId;
//     bool isCleared;
// }
async function getMilestone(milestone){
    try {
        const data = await contract.milestones(milestone)
        console.log(data)
        return data.toNumber();
    } catch (error) {
        console.log(error)
    }
}

//returns an array of user details 
//it contails all users who contributed per the level id you passed in as a parameter
// struct User {
//     address user;
//     uint256 plsDonations;
//     uint256 usdcOfPlsDonations;
//     uint256 usdcDonations;
// }
async function getUsersPerMileStone(milestone){
    //lets get user address
    let address = contract.provider.getAddress();

    try {
        let user = await contract.users(milestone,address)
        return user;
    } catch (error) {
        console.log(user)
    }

}

