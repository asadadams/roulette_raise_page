// // this script is to be used after the page has loaded and the contract is initialized
// // in the window.reoulette object

// //also the ethers library has to be imported already

// const all_contracts = window.roulette;
// //console.log("ALL_CONTRACTS::",all_contracts)
// const pegcontract = all_contracts.contract


// async function getContributions(){
// //lets loop through so that we can get contributions for all milestones
// try {
//     //array to keep all the contributions data
//     let contributions = [];
//     for(let i=1;i<10;i++){
//         //make call to the contract function to get all contributions
//         try {
//             const data = await pegcontract.getAllUsersPerMilestone(i)
//             contributions.push(data)
//             console.log(data);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return contributions;
    
// } catch (error) {
//     console.log(error)
// }
// }