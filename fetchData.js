

//const data = require('./data.js')

//lets load all the data into the device localstorage so that we can update them when necessary
//e.g when user makes contribution.

const key = "CONTRACT_STORE";
let g = localStorage.getItem(key)
if(!g){
    localStorage.setItem(key,JSON.stringify(data))
}

function fetchAllDataFromStore(){
    let all_data = localStorage.getItem(key);
    return JSON.parse(all_data);
}

function fetchTopContributors(){
    //get data from store
    let all_data = fetchAllDataFromStore()
    return all_data.leaderboardData;
}

function fetchUser(){
    let all_data = fetchAllDataFromStore()
    return all_data.user
}

function fetchLevelData(){
    let all_data = fetchAllDataFromStore()
    return all_data.levelsData
}

function fetchCurrentLevel(){
    let all_data = fetchAllDataFromStore()
    return all_data.currentLevel
}

function fetchSalesData(){
    let all_data = fetchAllDataFromStore()
    return all_data.publicSaleDetails
}


{/* <script src="https://cdn.jsdelivr.net/gh/asadadams/roulette_raise_page@v1.0.8/leaderboard.js"></script>
<script src="https://cdn.jsdelivr.net/gh/asadadams/roulette_raise_page@v1.0.8/milestone.js"></script>
<script src="https://cdn.jsdelivr.net/gh/asadadams/roulette_raise_page@v1.0.8/pepeslevel.js"></script> */}