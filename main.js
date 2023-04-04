//let currentMileStone = 0
let currentPegPrice =0

// var tag1 = document.createElement("script");
// var tag2 = document.createElement("script");
// var tag3 = document.createElement("script");
// tag1.src = "https://roulette-static-files.s3.us-west-2.amazonaws.com/getContributions.js";
// tag2.src = "https://roulette-static-files.s3.us-west-2.amazonaws.com/makeContributions.js";
// tag3.src = "https://roulette-static-files.s3.us-west-2.amazonaws.com/getPEGInfo.js";
// document.getElementsByTagName("head")[0].appendChild(tag1);
// document.getElementsByTagName("head")[0].appendChild(tag2);
// document.getElementsByTagName("head")[0].appendChild(tag3);

  console.log('Roulette contract::',window.roulette)

//tag3.addEventListener('load', function() {
//	console.log('tag3 finished loading')
//	getTotalAllocation()
  //});

//tag3.onload = function() {
// The script has finished loading, you can now call a function in it
//getTotalAllocation()
const approvepls = document.getElementById('approvepls')
const approveusdc = document.getElementById('approveusdc')
approvepls.addEventListener('click',function(){
  getAllowancePLS().then(res=>{
      console.log("approved pls:",res)
  }).catch(error=>{
      console.log(error)
  })
})

 approveusdc.addEventListener('click',function(){
  getAllowanceUSDC().then(res=>{
      console.log("approved usdc:",res)
  }).catch(error=>{
      console.log(error)
  })
})

//};


    //let userDetails = getUserDetails()
  //console.log('user details::',userDetails)
   getCurrentMilestone().then((data)=>{
       console.log('Milestone details::',data)
     currentMileStone = data
     
     getMilestone(data).then((data)=>{
         console.log('current milestone::', data.plsRaised.toNumber())
      console.log('target amount::', data.targetAmount.toNumber())
      
      //currentPegPrice = data.targetAmount.toNumber()
      
      const currentPegPrice = document.getElementById('current_peg_price')
      const contributePlsPegPrice = document.getElementById('contribute_pls_peg_price')
      const toppegprice = document.getElementById('toppegprice')
                currentPegPrice.innerHTML = '$' + ethers.utils.formatUnits(data.priceOfPeg,6) 
      contributePlsPegPrice.innerHTML = '$' + ethers.utils.formatUnits(data.priceOfPeg,6) 
      toppegprice.innerHTML = '$PEG Price ' + ethers.utils.formatUnits(data.priceOfPeg,6) 

      //set side wheel
      //get all side wheel ids
      const levels = document.getElementsByClassName('level-wheel');
      //lets loop through and get the active/live level-wheel
    for (let i = 0; i < levels.length; i++) {
        let attr = levels[i].classList
        console.log(attr)
        if(attr.contains('live')){
            levels[i].classList.remove('live')
            levels[i].classList.add('past')
        }

        if(levels[i]?.id === `wheel-${currentMileStone}`){
            levels[i].classList.add('live')
            levels[i].classList.remove('past')
        }
    }


      
     }).catch((err)=>{
         console.log('error: ', err)
     })
     
  }).catch((err)=>{
      console.log('error: ', err)
  })
  
  
  
  
  function getAllMileStones() {
    return new Promise(function(resolve, reject) {
       for (var i = 1; i <= 10; i++) {
      
            getUsersPerMileStone(i).then(function(data){
           // console.log('user in milestone::', data)
            if(data != undefined){
                allUsersInMileStone.push(data)
            }
           }).catch((err)=>{
            console.log('error: ', err)
           })
            
           getMilestone(i).then(function(data){
            //console.log('current milestone::', data.plsRaised.toNumber())
            totalTargetAmount += data.targetAmount.toNumber()
            allMileStones.push(data)
           }).catch((err)=>{
            console.log('error: ', err)
           })
        }
      resolve();
    });
  }

  window.onload=()=>{
    getAllMileStones().then(function() {
      
        setTimeout(function() {
          allUsersInMileStone = allUsersInMileStone.sort((a, b) => b.usdcDonations.toNumber() - a.usdcDonations.toNumber());
                 
          console.log('allUsersInMileStone::', allUsersInMileStone)
          console.log('all milestones::', allMileStones)
            
        var milestoneTag = document.createElement("script");
        milestoneTag.src = " https://roulette-static-files.s3.us-west-2.amazonaws.com/milestone.js";
        document.getElementsByTagName("body")[0].appendChild(milestoneTag);
    
    
        var pepesLevelTag = document.createElement("script");
        pepesLevelTag.src = "https://roulette-static-files.s3.us-west-2.amazonaws.com/pepeslevel.js";
        document.getElementsByTagName("body")[0].appendChild(pepesLevelTag);
          
          
          document.getElementById('total_raised_amount').innerHTML = '$' + totalTargetAmount
              }, 3000);
       
      });
  }


  


 // getCurrentPLSMilestone()
