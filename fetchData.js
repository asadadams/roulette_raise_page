

const data = require('./data.js')

function fetchTopContributors(){
    return data.topHundredContributors
}

function getLevelsDetails(){
    return data.levelsDetails
}

function getUsersTotalContributions(){
    return data.yourTotalContributions
}

function getCurrentLevel(){
    return data.currentLevel
}

function getAllPublicSaleDetails(){
    return data.publicSaleDetails
}

module.exports = {
    fetchTopContributors,
    getLevelsDetails,
    getUsersTotalContributions,
    getCurrentLevel,
    getAllPublicSaleDetails
}
