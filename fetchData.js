

const data = require('./data.js')

//lets load all the data into the device localstorage so that we can update them when necessary
//e.g when user makes contribution.
const key = "CONTRACT_STORE";
localStorage.setItem(key,JSON.stringify(data))

function fetchAllDataFromStore(){
    let all_data = localStorage.getItem(key);
    return JSON.parse(all_data);
}

function fetchTopContributors(){
    //get data from store
    let all_data = fetchAllDataFromStore()
    return all_data.topHundredContributors;
}

