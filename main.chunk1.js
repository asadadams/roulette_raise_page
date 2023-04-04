
// //fetchUser();

// //let leveld = fetchLevelData();
// //lets get the current active level
// let currentleve = null;

// console.log("CURRENTMILESTONE DATA:",currentlevel)

// const cl = document.getElementById('currentlevel');
// cl.innerHTML = 'Level '+currentlevel.level
// console.log('current level::',currentlevel)
// const levelcontent = document.getElementById('levelcontent');
// levelcontent.innerHTML = '$'+ (currentlevel.pls_contribute+currentlevel.usdc_contribute) +': 25% PLS / 75% USDC'

// const contributionUSDCLevelDiv = document.getElementById('current_usdc_level')
// const contributionPLSLevelDiv = document.getElementById('current_pls_level')

// contributionUSDCLevelDiv.innerHTML = 'USDC Level '+ currentlevel.level
// contributionPLSLevelDiv.innerHTML = 'PLS Level '+ currentlevel.level


// //widow.onload = ()=>{
// 	//generalprogress
// //generalprogressindicator
// const gpindc = document.getElementById('generalprogressindicator');
// //progressbar width = 300
// let currentcontb = currentlevel.pls_contribute+currentlevel.usdc_contribute
// let currentpercent = (currentcontb / currentlevel.max_raise) * 100
// gpindc.style.width = (currentpercent*300)+'px';
// //}

// let toppegprice = document.getElementById('toppegprice');
// toppegprice.innerHTML = '$PEG Price $0.5'
// let topnextpegprice = document.getElementById('topnextpegprice');
// topnextpegprice.innerHTML = 'Next Level: '+(currentlevel.peg_price+0.10)

// const plsContributions = document.getElementById('contributions_pls');
// const usdcContributions = document.getElementById('contributions_usdc');
// const amountContributions = document.getElementById('contributions_amount');
// const pegContributions = document.getElementById('contributions_peg');
// const pegPriceContributions = document.getElementById('contributions_peg_price');

// plsContributions.innerHTML = '$'+user?.contributed_pls
// usdcContributions.innerHTML = '$'+user?.contributed_usdc
// amountContributions.innerHTML = '$'+user?.contributed_amount
// pegPriceContributions.innerHTML = user?.contributed_peg
// pegContributions.innerHTML = user?.pegPrice