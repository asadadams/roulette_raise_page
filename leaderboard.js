const leaderboardData = [
    { rank: 1, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 5000 },
    { rank: 2, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 4000 },
    { rank: 3, address: "0x1234567890abcdef1234567890abcdef1234567dd", amount: 3000 },
    { rank: 4, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 2000 },
    { rank: 5, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 1000 },
    { rank: 6, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 900 },
    { rank: 7, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 800 },
    { rank: 8, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 700 },
    { rank: 9, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 600 },
    { rank: 10, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 500 },
    { rank: 97, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 100 },
    { rank: 98, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 99 },
    { rank: 99, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 98 },
    { rank: 100, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 97 },
    { rank: 125, address: "0x1234567890abcdef1234567890abcdef12345678", amount: 96 },
    { rank: 126, address: "0xabcdef1234567890abcdef1234567890abcdef12", amount: 95 },
];


const leaderBoardTable = document.querySelector('[datasource="leaderboard-table"]');

function loadLeaderBoardData(data) {
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
        amountElement.innerHTML = `${entry.amount}`

        //Applying background colour class to all even entries
        if (index % 2 === 0) {
            entryElement.classList.add("anti");
        }


        if (user.address === entry.address) {
            addressElement.innerHTML = "This is You!"
        } else {
            addressElement.innerHTML = `${entry.address.substring(0, 4)}.....${entry.address.slice(-4)}`
        }

        if (entry.rank <= 3) {
            if (entry.rank == 1) rankElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201c51cc09c983c5c38739_Pepe%20First.png" loading="lazy" alt="" class="leaderboard_image">
                </div>`
            if (entry.rank == 2) {
                rankElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201c50885ad9a63405ac90_Pepe%20Second.png" loading="lazy" alt="" class="leaderboard_image">
                </div>`
                entryElement.classList.remove('colour')
            }
            if (entry.rank == 3) rankElement = `<div class="table9_column-content"><img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201c50a2bd1e700e469ca2_Pepe%20Third.png" loading="lazy" alt="" class="leaderboard_image">
                </div>`

            addressElement.setAttribute('class', 'text-leaderboard');
            amountElement.setAttribute('class', 'text-leaderboard');
            airDropElement = `<img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/64201b987894bf1462226062_Fill%2018.png" loading="lazy" alt="" class="airdrop-check">`;
        } else if (entry.rank > 3 && entry.rank <= 100) {
            rankElement = `<div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular rank">#${entry.rank}</div>`
            addressElement.setAttribute('class', 'text-leaderboard-regular');
            amountElement.setAttribute('class', 'text-leaderboard-regular');
            airDropElement = `<img src="https://uploads-ssl.webflow.com/641c2b181f41df422637adc5/642041dd3e934451560f38be_22%20Check.png" loading="lazy" alt="" class="airdrop-check">`
            entryElement.classList.remove('colour')
        } else {
            rankElement = `<div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular rank">#${entry.rank}</div>`
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
            <div table-column="" role="cell" class="table9_column is-width-large leaderboard">
                ${amountElement.outerHTML}
            </div>
            <div table-column="airdrop" role="cell" class="table9_column is-width-large airdrop">
               ${airDropElement}
            </div>
        `;

        leaderboardData.slice(96, 99).forEach((entry, index) => {
            leaderBoardTable.appendChild(entryElement)
        })


        // Middle elment 
        let startIndex = 6
        let endIndex = 10
        if (leaderboardData.length > 100) {
            startIndex = 96
            endIndex = 99
        }
        leaderboardData.slice(startIndex, endIndex).forEach((entry, index) => {
            leaderBoardTable.appendChild(entryElement)
        })

    });
}



//load first 3 entries
loadLeaderBoardData(leaderboardData.slice(0, 3))


//Appening extra elements to page , element with dots . 
const entryExtraElement = document.createElement('div');
entryExtraElement.classList.add('table_item', 'extra', 'leaderboard-entry');
entryExtraElement.innerHTML = `<div fs-cmssort-type="date" fs-cmssort-field="IDENTIFIER" class="text-leaderboard-regular extra">.</div>`
leaderBoardTable.appendChild(entryExtraElement);
leaderBoardTable.appendChild(entryExtraElement.cloneNode(true));


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

//Appending show more button when data is more than 120
if (leaderboardData.length > 120) {
    let leaderBoardButtons = document.getElementById('leaderBoardButtons')
    let showTop120ContributorsButton = document.createElement('div');
    showTop120ContributorsButton.innerHTML = `<a href="#" id='showmore' class="button-2 is-icon contribution w-inline-block"><div class="button-text"><div class="text-block-copy">See Top 120 Contributooors</div></div></a>`
    leaderBoardButtons.appendChild(showTop120ContributorsButton)
}


function removeAllEntries() {
    // Get all the elements with the specific class name
    const elementsToRemove = document.querySelectorAll('.leaderboard-entry');

    // Loop through the selected elements and remove them one by one
    for (let i = 0; i < elementsToRemove.length; i++) {
        elementsToRemove[i].remove();
    }
}


// Loading the rest levels when shomore levels button is clicked
const showMoreLevelsButton = document.getElementById('showmore');

// add a click event listener to the "Show More" button
showMoreLevelsButton.addEventListener("click", () => {
    removeAllEntries()
    loadLeaderBoardData(levelsData.slice(0, 120))
    document.getElementById('showmore').style.display = 'none'
})
