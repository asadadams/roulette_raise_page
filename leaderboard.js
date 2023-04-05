async function getAllUsers() {
    const currentMilestone = await main_contract.currentMilestone();
    let allUsers = {};

    for (let i = 1; i <= currentMilestone; i++) {
        const users = await main_contract.getUsersPerMilestone(i)
        if (i === 1) {
            for (const user of users) {
                allUsers[user.user] = user; /// @notice allUsers[userAddress] = userObject
                allUsers[user.user].totalDonation = user.usdcDonations.add(user.usdcOfPlsDonations)
            }
            continue
        }

        for (let user of users) {
            if (user.user in allUsers) {
                /// @notice expecting the values of the pls donations, usdcDonations ... to be BigNumbers
                allUsers[user.user].plsDonations = allUsers[user.user].plsDonations.add(user.plsDonations)
                allUsers[user.user].usdcDonations = allUsers[user.user].usdcDonations.add(user.usdcDonations)
                allUsers[user.user].usdcOfPlsDonations = allUsers[user.user].usdcOfPlsDonations.add(user.usdcOfPlsDonations)
                allUsers[user.user].totalDonation = ethers.utils.parseUnits('0',6)
                allUsers[user.user].totalDonation = allUsers[user.user].totalDonation.add(user.usdcDonations).add(user.usdcOfPlsDonations)
            }
            else {
                allUsers[user.user] = user;
                allUsers[user.user].totalDonation = user.user.usdcDonations.add(user.usdcOfPlsDonations)

            }
        }
    }
    return allUsers
}

async function rankUsersDesc() {
    const allUsers = await getAllUsers()
    const donationArray = Object.entries(allUsers).map(([user, data]) => ({ user, ...data }));
    donationArray.sort((a, b) => b.totalDonation - a.totalDonation);

    return donationArray;
}

// const leaderboardData = allUsersInMileStone()
// console.log("leader board:", leaderboardData)

const leaderBoardTable = document.querySelector('[datasource="leaderboard-table"]');

function loadLeaderBoardData(data) {
    console.log('test:', data)
    data.forEach((entry, index) => {
        let rank = index + 1

        //Creating elements
        let rankElement = ''
        let airDropElement = ''
        let entryElement = document.createElement('div');
        let addressElement = document.createElement('div')
        let amountElement = document.createElement('div')

        // Assigning attributes to elements
        entryElement.setAttribute('class', 'table_item colour leaderboard-entry')
        entryElement.setAttribute('role', 'row')
        addressElement.setAttribute('fs-cmssort-type', 'date');
        addressElement.setAttribute('fs-cmssort-field', 'IDENTIFIER');
        amountElement.setAttribute('fs-cmssort-type', 'date');
        amountElement.setAttribute('fs-cmssort-field', 'IDENTIFIER');

        // addressElement.innerHTML = `${entry.address.substring(0, 4)}.....${entry.address.slice(-4)}`
        amountElement.innerHTML = `${ethers.utils.formatUnits(entry.usdcDonations, 6)}`

        //Applying background colour class to all even entries
        if (index % 2 === 0) {
            entryElement.classList.add("anti");
        }


        //if (user.address === entry.address) {
        //  addressElement.innerHTML = "This is You!"
        //} else {
        addressElement.innerHTML = `${entry.user.substring(0, 4)}.....${entry.user.slice(-4)}`
        //s}

        if (rank <= 3) {
            if (rank == 1) rankElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201c51cc09c983c5c38739_Pepe%20First.png" loading="lazy" alt="" class="leaderboard_image">
                </div>`
            if (rank == 2) {
                rankElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201c50885ad9a63405ac90_Pepe%20Second.png" loading="lazy" alt="" class="leaderboard_image">
                </div>`
                entryElement.classList.remove('colour')
            }
            if (rank == 3) rankElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201c50a2bd1e700e469ca2_Pepe%20Third.png" loading="lazy" alt="" class="leaderboard_image">
                </div>`

            addressElement.setAttribute('class', 'text-leaderboard');
            amountElement.setAttribute('class', 'text-leaderboard');
            airDropElement = `<img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201b987894bf1462226062_Fill%2018.png" loading="lazy" alt="" class="airdrop-check">`;
        } else if (rank > 3 && rank <= 100) {
            rankElement = `<div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular rank">#${rank}</div>`
            addressElement.setAttribute('class', 'text-leaderboard-regular');
            amountElement.setAttribute('class', 'text-leaderboard-regular');
            airDropElement = `<img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/642041dd3e934451560f38be_22%20Check.png" loading="lazy" alt="" class="airdrop-check">`
            entryElement.classList.remove('colour')
        } else {
            rankElement = `<div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular rank">#${rank}</div>`
            addressElement.setAttribute('class', 'text-leaderboard-regular red');
            amountElement.setAttribute('class', 'text-leaderboard red');
            airDropElement = `<img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/6420439b7894bf2b49255cb8_Wrong.png" loading="lazy" alt="" class="airdrop-wrong">`
            entryElement.classList.remove('colour')
        }


        entryElement.innerHTML = `
            <div table-column="rank" role="cell" class="table9_column is-width-small rank">
               ${rankElement}
            </div>
            <div table-column="address" role="cell" class="table9_column is-width-large wide">
               ${addressElement.outerHTML}
            </div>
            <div table-column="" role="cell" class="table9_column is-width-large leaderboard usd">
                ${amountElement.outerHTML}
            </div>
            <div table-column="airdrop" role="cell" class="table9_column is-width-large airdrop">
               ${airDropElement}
            </div>
        `;

        // leaderboardData.slice(96, 99).forEach((entry, index) => {
        //     leaderBoardTable.appendChild(entryElement)
        // })


        // // Middle elment 
        // let startIndex = 6
        // let endIndex = 10
        // if (leaderboardData.length > 100) {
        //     startIndex = 96
        //     endIndex = 99
        // }
        // leaderboardData.slice(startIndex, endIndex).forEach((entry, index) => {
        //     leaderBoardTable.appendChild(entryElement)
        // })

        leaderBoardTable.appendChild(entryElement)
    });
}


function Run(leaderboardData) {
    //load first 3 entries
    loadLeaderBoardData(leaderboardData.slice(0, 3))


    if (leaderboardData.length > 3) {
        //Appening extra elements to page , element with dots . 
        const entryExtraElement = document.createElement('div');
        entryExtraElement.classList.add('table_item', 'extra', 'leaderboard-entry');
        entryExtraElement.setAttribute('role', 'row')
        entryExtraElement.innerHTML = `
            <div role="row" class="table_item extra">
            <div role="cell" class="table9_column is-width-small extra">
                <div class="dot-div">
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular extra">.</div>
                <div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular extra">.</div>
            </div>
            </div>
        `
        leaderBoardTable.appendChild(entryExtraElement);
    }

    let startIndex = 6
    let endIndex = 9
    if (leaderboardData.length > 100) {
        startIndex = 96
        endIndex = 99
    }

    //Loading middle entries
    loadLeaderBoardData(leaderboardData.slice(startIndex, endIndex))


    // Loading last entries
    loadLeaderBoardData(leaderboardData.slice(100, 104))


    function removeAllEntries() {
        // Get all the elements with the specific class name
        const elementsToRemove = document.querySelectorAll('.leaderboard-entry');

        // Loop through the selected elements and remove them one by one
        for (let i = 0; i < elementsToRemove.length; i++) {
            elementsToRemove[i].remove();
        }
    }



    //Appending show more button when data is more than 120
    if (leaderboardData.length > 120) {
        let leaderBoardButtons = document.getElementById('leaderBoardButtons')
        let showTop120ContributorsButton = document.createElement('div');
        showTop120ContributorsButton.innerHTML = `<a href="#" id='showmore' class="button-2 is-icon contribution w-inline-block"><div class="button-text"><div class="text-block-copy">See Top 120 Contributooors</div></div></a>`
        leaderBoardButtons.appendChild(showTop120ContributorsButton)


        // Loading the rest levels when shomore levels button is clicked
        const showmoreButton = document.getElementById('showmore');

        // add a click event listener to the "Show More" button
        showmoreButton.addEventListener("click", () => {
            removeAllEntries()
            loadLeaderBoardData(levelsData.slice(0, 120))
            document.getElementById('showmore').style.display = 'none'
        })

    }

}


rankUsersDesc().then(data => {
    console.log('users array::', data)
    Run(data)
}).catch(err => {
    console.log('error rank users::', err)
})
