

//const _contracts = window.roulette;
//console.log("ALL_CONTRACTS::",_contracts)

//lets get the signer directly from ethers
//const _signer = ethers.

const erc20ABI = [
    'function balanceOf(address account) view returns (uint256)',
    'function transfer(address recipient, uint256 amount) returns (bool)',
    'function allowance(address owner, address spender) view returns (uint256)',
    'function approve(address spender, uint256 amount) returns (bool)',
    'function transferFrom(address sender, address recipient, uint256 amount) returns (bool)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'event Approval(address indexed owner, address indexed spender, uint256 value)'
  ];


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
       //let address = _contracts.address
        console.log(address)
       const data = await main_contract.getUserDetails(address)
        console.log(data)
        return data
    } catch (error) {
        console.log("Error:",error)
    }
}

//returns current milestone eg 1
async function getCurrentMilestone(){
    try {
        const data = await main_contract.currentMilestone()
        console.log(data)
        return data
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
        const data = await main_contract.milestones(milestone)
        console.log(data)
        return data;
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
async function getUsersInMileStone(milestone){
    //lets get user address
    //let address = _contracts.address
    console.log(main_contract)
    try {
        let user = await main_contract.getUsersPerMilestone(milestone)
        console.log("USER::",user)
        return user;
    } catch (error) {
        console.log(error)
    }

}

async function approveUSDC(){
    try {
        let usdc_address = '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8'
        const tokenContract = new ethers.Contract(usdc_address, erc20ABI, signer);
        const tx = await tokenContract.approve('0x38E56fc4Ca17Ba6230b3A62593cAB91CAB78d043', ethers.constants.MaxUint256)
        const receipt = await tx.wait();
        console.log('Approval successful:', receipt);
    } catch (error) {
        console.log(error)
    }
  
}

async function approvePLS(){
    try {
        let pls_address = '0x51318B7D00db7ACc4026C88c3952B66278B6A67F'
        const tokenContract = new ethers.Contract(pls_address, erc20ABI, signer);
        const tx = await tokenContract.approve('0x38E56fc4Ca17Ba6230b3A62593cAB91CAB78d043', ethers.constants.MaxUint256)
        const receipt = await tx.wait();
        console.log('Approval successful:', receipt);
    } catch (error) {
        console.log(error)
    }
  
}

async function getAllowancePLS(){
    try {
        let pls_address = '0x51318B7D00db7ACc4026C88c3952B66278B6A67F'
        const tokenContract = new ethers.Contract(pls_address, erc20ABI, signer);
        const allowance = await tokenContract.allowance(address, '0x38E56fc4Ca17Ba6230b3A62593cAB91CAB78d043');
        if(ethers.utils.parseUnits('10',18).gt(allowance)){
            approvePLS()
        }
    } catch (error) {
        console.log(error)
    }
}

async function getAllowanceUSDC(){
    try {
        let usdc_address = '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8'
        const tokenContract = new ethers.Contract(usdc_address, erc20ABI, signer);
        const allowance = await tokenContract.allowance(address, '0x38E56fc4Ca17Ba6230b3A62593cAB91CAB78d043');
        if(ethers.utils.parseUnits('10',6).gt(allowance)){
            approveUSDC()
        }
    } catch (error) {
        console.log(error)
    }
}

